"use client";
import Link from "next/link";
import { CircularProgress, Box, Stack, Typography, Card } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  redirect,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { Formik } from "formik"; // DUMMY CUSTOM DATA

import countryList from "data/countryList"; // LOCAL CUSTOM COMPONENTS

import ShippingForm from "../shipping-address";
import BillingAddressForm from "../billing-address";
import type { CartAddress, CartWithCheckoutStep } from "medusa/types/global";
import { setCartAddress } from "medusa/modules/checkout/actions";
import CustomizedSnackbars from "components/snackbar";
import { error } from "console";
import useToggleState from "medusa/lib/hooks/use-toggle-state";
import compareAddresses from "medusa/lib/util/compare-addresses";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const Addresses = ({ cart }: { cart: CartWithCheckoutStep }) => {
   
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const countryCode = params.countryCode as string;

  const isOpen = searchParams.get("step") === "address";

  const { state: sameAsSBilling, toggle: toggleSameAsBilling } = useToggleState(
    cart?.shipping_address && cart?.billing_address
      ? compareAddresses(cart?.shipping_address, cart?.billing_address)
      : true
  );

  const handleFormSubmit = async (values) => {
    setUpdating(true);

    const message = await setCartAddress(sameAsSBilling, values)
      .catch((err) => {
        console.log("inside catch", err.message);
      })
      .finally(() => {
        setUpdating(false);
      });
    message && setSnackbarMessage(message);

    if (snackbarMessage !== "success" && snackbarMessage !== null) {
      setOpen(true);
    }

    const temp = "Address updated Successfully";
    setSnackbarMessage(temp);
    setOpen(true);
    router.push("/checkout?step=delivery");
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleEdit = () => {
    router.push(pathname + "?step=address");
  };

  const initialValues = setValuesfromCart({ cart });

  return (
    <Box sx={{mb:4}}>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", mb:1 }}
      >
        <Stack direction="row" columnGap={1} alignItems="center">
          <Typography variant="h6" color="primary.black">
            Address
          </Typography>
          {!isOpen && cart?.shipping_address && (
            <CheckCircleIcon color="success" />
          )}
        </Stack>

        {!isOpen && cart?.shipping_address && (
          <Button
            onClick={handleEdit}
            color="primary"
            variant="contained"
            size="small"
            data-testid="edit-address-button"
          >
            Edit
          </Button>
        )}
      </Stack>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => {
          useEffect(() => {
                        
            setFieldValue("billing_zip", sameAsSBilling ? values.shipping_zip : values.billing_zip);
            setFieldValue(
              "billing_firstName",
              sameAsSBilling ? values.shipping_firstName : values.billing_firstName
            );
            setFieldValue(
              "billing_lastName",
              sameAsSBilling ? values.shipping_lastName : values.billing_lastName
            );

            setFieldValue("billing_city", sameAsSBilling ? values.shipping_city : values.billing_city);
            setFieldValue(
              "billing_contact",
              sameAsSBilling ? values.shipping_contact : values.billing_contact
            );
            setFieldValue(
              "billing_company",
              sameAsSBilling ? values.shipping_company : values.billing_company
            );
            setFieldValue(
              "billing_address1",
              sameAsSBilling ? values.shipping_address1 : values.billing_address1
            );
            setFieldValue(
              "billing_address2",
              sameAsSBilling ? values.shipping_address2 : values.billing_address2
            );
            setFieldValue(
              "billing_country",
              sameAsSBilling ? values.shipping_country : values.billing_country
            );
          },[sameAsSBilling, values, toggleSameAsBilling]);

          return (
            <>
              {isOpen ? (
                <form onSubmit={handleSubmit}>
                  <ShippingForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    toggleSameAsBilling={toggleSameAsBilling}
                    sameAsSBilling={sameAsSBilling}
                  />

                  {!sameAsSBilling && (
                    <Stack>
                      <Typography variant="h3" color="primary.black">
                        Billing Address
                      </Typography>
                      <BillingAddressForm
                        errors={errors}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        sameAsSBilling={sameAsSBilling}
                        setFieldValue={setFieldValue}
                        touched={touched}
                        values={values}
                      />
                    </Stack>
                  )}

                  <Grid container spacing={6}>
                    { !isOpen ? (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "16px",
                          bgcolor: "#eee",
                          width: "100%",
                        }}
                      >
                        <span>Confirm Address</span>
                        <CircularProgress color="primary" />
                      </Box>
                    ) : (
                      <>
                        <Grid item sm={6} xs={12}>
                          <Button
                            LinkComponent={Link}
                            variant="outlined"
                            color="primary"
                            type="button"
                            href="/cart"
                            fullWidth
                          >
                            Back to Cart
                          </Button>
                        </Grid>

                        <Grid item sm={6} xs={12}>
                          <Button
                           LinkComponent={Link}
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            disabled={updating}
                            sx={{mx:'auto'}}
                          >
                            {
                              updating ?
                             "Submitting Address"
                              :
                              "Proceed to Delivery"
                            }
                            
                          </Button>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </form>
              ) : (
                <div>
                  <Box sx={{ fontSize: "14px", fontWeight: "regular" }}>
                    {cart && cart.shipping_address ? (
                      <Grid container spacing={3}>

                       <Grid item xs={12} md={6}>
                          <Stack
                            justifyContent="flex-start"
                            data-testid="shipping-address-summary"
                          >
                            <Typography
                              variant="subtitle1"
                              fontWeight="medium"                            
                            >
                              Shipping Address
                            </Typography>
                            <Typography variant="body1" fontWeight="normal">
                              {cart.shipping_address.first_name}{" "}
                              {cart.shipping_address.last_name}
                            </Typography>
                            <Typography variant="body1" fontWeight="normal">
                              {cart.shipping_address.address_1}{" "}
                              {cart.shipping_address.address_2}
                            </Typography>
                            <Typography variant="body1" fontWeight="normal">
                              {cart.shipping_address.postal_code},{" "}
                              {cart.shipping_address.city}
                            </Typography>
                            <Typography variant="body1" fontWeight="normal">
                              {
                                countryList.find(
                                  (country) =>
                                    country?.value?.toLowerCase() ===
                                    cart?.shipping_address.country_code?.toLowerCase()
                                ).label
                              }{" "}
                              ({cart.shipping_address.country_code})
                            </Typography>

                            <Typography variant="body1" fontWeight="normal">
                              Ph: {cart?.shipping_address?.phone}
                            </Typography>
                            <Typography variant="body1" fontWeight="normal">
                              {cart?.email}
                            </Typography>
                            <Typography variant="body1" fontWeight="normal">
                              {/* checkputstep {cart?.checkout_step} */}
                            </Typography>
                          </Stack>
                          </Grid>
                          <Grid item xs={12} md={6}>
                          <Stack
                           justifyContent="flex-start"
                            data-testid="billing-address-summary"
                          >
                            <Typography variant="subtitle1">
                              Billing Address
                            </Typography>

                            {sameAsSBilling ? (
                              <Typography
                                variant="subtitle1"
                                sx={{ fontSize: "medium", color: "#666666" }}
                              >
                                Billing- and delivery address are the same.
                              </Typography>
                            ) : (
                              <>
                                <Typography
                                  variant="body1"
                                  sx={{ fontSize: "medium", color: "#666666" }}
                                >
                                  {cart.billing_address.first_name}{" "}
                                  {cart.billing_address.last_name}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{ fontSize: "medium", color: "#666666" }}
                                >
                                  {cart.billing_address.address_1}{" "}
                                  {cart.billing_address.address_2}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{ fontSize: "medium", color: "#666666" }}
                                >
                                  {cart.billing_address.postal_code},{" "}
                                  {cart.billing_address.city}
                                </Typography>
                                <Typography variant="body1" fontWeight="normal">
                                  {
                                    countryList.find(
                                      (country) =>
                                        country.value.toLowerCase() ===
                                        cart.billing_address.country_code?.toLowerCase()
                                    ).label
                                  }{" "}
                                  ({cart.billing_address.country_code})
                                </Typography>

                                <Typography variant="body1" fontWeight="normal">
                                  Ph: {cart?.billing_address?.phone}
                                </Typography>
                              </>
                            )}
                          </Stack>
                          </Grid>
                      </Grid>
                    ) : (
                    updating &&  <div>
                        <CircularProgress />
                      </div>
                    )}
                  </Box>
                </div>
              )}
            </>
          );
        }}
      </Formik>
      <CustomizedSnackbars
        open={open}
        handleClose={handleClose}
        message={snackbarMessage}
      />
    </Box>
  );
};

const setValuesfromCart = ({ cart }: { cart: CartWithCheckoutStep | null }) => {
  const data = {
    email: cart?.email || "",
    shipping_zip: cart?.shipping_address?.postal_code || "",
    shipping_firstName: cart?.shipping_address?.first_name || "",
    shipping_lastName: cart?.shipping_address?.last_name || "",
    shipping_contact: cart?.shipping_address?.phone || "",
    shipping_company: cart?.shipping_address?.company || "",
    shipping_address1: cart?.shipping_address?.address_1 || "",
    shipping_address2: cart?.shipping_address?.address_2 || "",
    shipping_city: cart?.shipping_address?.city || "",
    shipping_country: cart?.shipping_address !== null || cart?.shipping_address?.country_code !== null  ? 
    countryList.find(
      (country) =>
        country.value.toLowerCase() ===
        cart?.shipping_address?.country_code
    ) : countryList[229],

    billing_zip: cart?.billing_address?.postal_code || "",
    billing_lastName: cart?.billing_address?.last_name || "",
    billing_firstName: cart?.billing_address?.first_name || "",
    billing_contact: cart?.billing_address?.phone || "",
    billing_company: cart?.billing_address?.company || "",
    billing_address1: cart?.billing_address?.address_1 || "",
    billing_address2: cart?.billing_address?.address_2 || "",
    billing_city: cart?.billing_address?.city || "",
    billing_country: cart?.billing_address !== null || cart?.billing_address?.country_code !== null  ?
     countryList.find(
      (country) =>
        country.value.toLowerCase() ===
        cart?.billing_address?.country_code 
    ) : countryList[229],
  };
  return data;
}; // uncomment these fields below for from validation

const checkoutSchema = yup.object().shape({
  email: yup.string().email().required("required"),
  shipping_firstName: yup.string().required("required"),
  shipping_lastName: yup.string().notRequired(),
  shipping_contact: yup.string().required("required"),
  shipping_zip: yup.string().required("required"),
  shipping_country: yup.object().required("required"),
  shipping_address1: yup.string().required("required"),
  shipping_address2: yup.string().notRequired(),
  shipping_city: yup.string().required("required"),
  shipping_company:yup.string().notRequired(),
  billing_firstName: yup.string().required("required"),
  billing_lastName: yup.string().notRequired(),
  billing_contact: yup.string().required("required"),
  billing_zip: yup.string().required("required"),
  billing_country: yup.object().required("required"),
  billing_address1: yup.string().required("required"),
  billing_address2: yup.string().notRequired(),
  billing_company:yup.string().notRequired(),
  billing_city: yup.string().required("required"),
});

export default Addresses;
