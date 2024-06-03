"use client";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ErrorMessage from "medusa/modules/checkout/components/error-message";
import type { Cart } from "@medusajs/medusa";
import {
  
  
  RadioGroup,
  Paper,
  Typography,
  FormControl,
  
} from "@mui/material";

import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import CircularProgress from "@mui/material/CircularProgress"

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { setPaymentMethod } from "medusa/modules/checkout/actions";
import { paymentInfoMap } from "medusa/lib/constants";
import { StripeContext } from "medusa/modules/checkout/payment-wrapper";
import PaymentContainer from "../payment-container";
import { LoadingButton } from "@mui/lab";
import CreditCard from "@mui/icons-material/CreditCard";

export const maxDuration=60;

const Payment = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | null;
}) => {
  console.log("cart type", cart?.type)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentSelected, setPaymentSelected] = useState(false);
  const [selectedValue, setValue] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = searchParams.get("step") === "payment";

  const isStripe = cart?.payment_session?.provider_id === "stripe";
  const stripeReady = useContext(StripeContext);

  const paymentReady =
    cart?.payment_session && cart?.shipping_methods?.length !== 0;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const set = async (providerId: string) => {
    console.log("provider ID", providerId);
    setIsLoading(true);
    await setPaymentMethod(providerId)
      .catch((err) => setError(err.toString()))
      .finally(() => {
        if (providerId === "paypal") return;
        setIsLoading(false);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    
    set((event.target as HTMLInputElement).value);
    setPaymentSelected(true);
  };

  const handleEdit = () => {
    router.push(pathname + "?" + createQueryString("step", "payment"), {
      scroll: false,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    router.push(pathname + "?" + createQueryString("step", "review"), {
      scroll: false,
    });
  };

  useEffect(() => {
    setIsLoading(false);
    setError(null);
  }, [isOpen]);

  return (
    <Paper elevation={4} sx={{ bgcolor: "inherit" }}>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", mb:1 }}
      >
        <Stack direction="row" columnGap={1} alignItems="center">
          <Typography variant="h6">
            Payment Method
          </Typography>
          {!isOpen && paymentReady && <CheckCircleIcon color="success" />}
        </Stack>

        {!isOpen && paymentReady && (
          <Button
            onClick={handleEdit}
            color="primary"
            variant="contained"
            size="small"
            sx={{ maxWidth: "fit-content" }}
            data-testid="edit-delivery-button"
          >
            Edit
          </Button>
        )}
      </Stack>
      <Box>
        {cart?.payment_sessions?.length ? (
          <Box
            sx={{ display: isOpen ? "flex" : "none", flexDirection:'column', rowGap:1}}
          >
            <FormControl>
              <RadioGroup
                data-testid="delivery-option-radio"
                onChange={handleChange}
                sx={{
                  gap: 2,
                  p:1,
                }}
              >
                {cart?.payment_sessions
                  ?.sort((a, b) => {
                    return a.provider_id > b.provider_id ? 1 : -1;
                  })
                  .map((paymentSession) => {
                    return (
                      <PaymentContainer
                        paymentInfoMap={paymentInfoMap}
                        paymentSession={paymentSession}
                        key={paymentSession.id}
                        selectedPaymentOptionId={
                          cart.payment_session?.provider_id || null
                        }
                      />
                    );
                  })}
              </RadioGroup>
            </FormControl>
            <ErrorMessage
              error={error}
              data-testid="payment-method-error-message"
            />
            <LoadingButton
              size="large"
              variant="contained"
              sx={{ mt: 6 }}
              onClick={handleSubmit}
              loading={isLoading}
              loadingPosition="end"
              color="primary"
              disabled={
                (isStripe && !stripeReady && !paymentSelected) ||
                !cart.payment_session
              }
              data-testid="submit-payment-button"
            >
              <span>Review and Pay</span>
            </LoadingButton>
          </Box>
        ) : (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ px: 4, py: 16, fontSize: "normal" }}
          >
            <CircularProgress color="info" />
          </Stack>
        )}
      </Box>
     
        {cart && paymentReady && cart?.payment_session && (
           <Box sx={{ display: isOpen ? "none" : "flex", gap:2, py:1, my:1, height:40, alignItems:'center'}}>
            
              <Typography data-testid="payment-method-summary" variant="subtitle1">
                {paymentInfoMap[cart.payment_session.provider_id]?.title ||
                  cart.payment_session.provider_id}
              </Typography>
          
           
            
              <Box sx={{objectFit:'scale-down',position:'relative', width:100, height:50, 
                display:'flex', alignItems:'center'
              }}>
              {paymentInfoMap[cart.payment_session.provider_id]?.icon || (
                  <CreditCard />
                )} 
              </Box>
              {/* <Typography variant="body1">
                Secured by{" "}
                {cart.payment_session.provider_id === "stripe" &&
                  cart.payment_session.provider_id}
              </Typography> */}
            
           
            </Box>
        )}
      
     
    </Paper>
  );
};
export default Payment;
