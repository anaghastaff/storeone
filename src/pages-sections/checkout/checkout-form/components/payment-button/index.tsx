import React, { useState } from "react";

import type { Cart, PaymentSession } from "@medusajs/medusa";

import { OnApproveActions, OnApproveData } from "@paypal/paypal-js";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Stripe from "stripe";
import type {
  StripeError,
  StripePaymentElementOptions,
} from "@stripe/stripe-js";

import { placeOrder } from "medusa/modules/checkout/actions";

import ErrorMessage from "../../../../../medusa/modules/checkout/components/error-message";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { LoadingButton } from "@mui/lab";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type PaymentButtonProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
  "data-testid": string;
};

const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    cart.shipping_methods.length < 1
      ? true
      : false;

  const paymentSession = cart.payment_session as PaymentSession;

  switch (paymentSession.provider_id) {
    case "stripe":
      return (
        <StripePaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      );
    case "manual":
      return (
        <ManualTestPaymentButton notReady={notReady} data-testid={dataTestId} />
      );
    case "paypal":
      return (
        <PayPalPaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      );
    default:
      return (
        <Stack>
          
            <Typography variant="h6" align="center">Select a payment method to start processing payment</Typography >
          
        </Stack>
      );
  }
};

const StripePaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
  notReady: boolean;
  "data-testid"?: string;
}) => {
  
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cardComplete, setCardComplete] = useState(false);


  const stripe = useStripe();
  const elements = useElements();
  const card = elements?.getElement("card");

  const onPaymentCompleted = async () => {
    await placeOrder().catch(() => {
      setErrorMessage("An error occurred, please try again.");
      setSubmitting(false);
    });
  };  

  const disabled = !stripe || !elements ? true : false;

  const handleError = (submitError: StripeError) => {
    setErrorMessage(submitError.message || null);
  };

  const session = cart?.payment_session as PaymentSession;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const pi = session?.data?.id;
    console.log("PI IN DATA ID", pi);

    if (!stripe || !elements || !cart) {
      setSubmitting(false);
      return;
    }

    setSubmitting(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
    const res = await fetch(`/api/payments/stripe`, {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({ session }),
    });

    // const { client_secret: clientSecret } = await res.json()
    const { clientSecret } = await res.json();
    console.log("clientsecret", clientSecret);
    // Use the clientSecret and Elements instance to confirm the setup
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "",
      },
      // Uncomment below if you only want redirect for redirect-based payments
      redirect: "if_required",
    });

    if (error) {
      const pi = error.payment_intent;
      console.log("error log", pi);
      if (
        (pi && pi.status === "requires_capture") ||
        (pi && pi.status === "succeeded")
      ) {
        onPaymentCompleted();
      }

      setErrorMessage(error.message || null);
      return;
    }

    if (
      (paymentIntent && paymentIntent.status === "requires_capture") ||
      paymentIntent.status === "succeeded"
    ) {
      return onPaymentCompleted();
    }

    if (error) {
      handleError(error);
    }
  };

  const options = {
    layout: "tabs" as "tabs",
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Stack sx={{ p: 2, bgcolor: "beige", gap: 2, mb: 1 }}>
            <form
              id="payment-form"
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", rowGap: 2 }}
            >
              <PaymentElement
                options={options}
                onChange={(e) => setCardComplete(e.complete)}
              />

              {/* <Button
              disabled={disabled || notReady || !cardComplete}

              type="submit"
              size="large"
              isLoading={submitting}
              data-testid={dataTestId}
              className="gap-y-4"
            >
              Place order
            </Button> */}
              <LoadingButton
                disabled={disabled || notReady || !cardComplete}
                type="submit"
                loading={submitting}
                variant="contained"
                color="secondary"
                size="large"
                data-testid={dataTestId}             
                loadingPosition="center"
                sx={{rowGap:1}}
              >
                {submitting ? "Processing... " : "Process Payment"}
              </LoadingButton>
            </form>
          </Stack>
        </Grid>
      </Grid>
      <ErrorMessage
        error={errorMessage}
        data-testid="stripe-payment-error-message"
      />
    </>
  );
};

const PayPalPaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
  notReady: boolean;
  "data-testid"?: string;
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onPaymentCompleted = async () => {
    await placeOrder().catch(() => {
      setErrorMessage("An error occurred, please try again.");
      setSubmitting(false);
    });
  };

  const session = cart.payment_session as PaymentSession;

  const handlePayment = async (
    _data: OnApproveData,
    actions: OnApproveActions
  ) => {
    actions?.order
      ?.authorize()
      .then((authorization) => {
        if (authorization.status !== "COMPLETED") {
          setErrorMessage(`An error occurred, status: ${authorization.status}`);
          return;
        }
        onPaymentCompleted();
      })
      .catch(() => {
        setErrorMessage(`An unknown error occurred, please try again.`);
        setSubmitting(false);
      });
  };

  const [{ isPending, isResolved }] = usePayPalScriptReducer();

  if (isPending) {
    return <CircularProgress />;
  }

  if (isResolved) {
    return (
      <>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Stack sx={{ p: 2 }}>
              <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={async () => session.data.id as string}
                onApprove={handlePayment}
                disabled={notReady || submitting || isPending}
                data-testid={dataTestId}
              />
              <ErrorMessage
                error={errorMessage}
                data-testid="paypal-payment-error-message"
              />
            </Stack>
          </Grid>
        </Grid>
      </>
    );
  }
};

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const onPaymentCompleted = async () => {
    await placeOrder()
    .then((cart)=> cart)
    .catch((err) => {
      setErrorMessage(err.toString());
      setSubmitting(false);
    });
  };

  const handlePayment = async () => {
    setSubmitting(true);
    await onPaymentCompleted();
  };

  return (
    <>
      <LoadingButton
        color="secondary"
        variant="contained"
        disabled={notReady}
        loading={submitting}
        
        loadingPosition="end"
        onClick={handlePayment}
        size="large"
        data-testid="submit-order-button"
      >
        <span>Place order</span>
      </LoadingButton>
      <ErrorMessage
        error={errorMessage}
        data-testid="manual-payment-error-message"
      />
    </>
  );
};
export default PaymentButton;
