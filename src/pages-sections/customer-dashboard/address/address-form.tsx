"use client";
import { useFormState } from "react-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup"; // CUSTOM DATA MODEL
import { SubmitButton } from "medusa/modules/common/components/submit-button";
import { Box, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { Span } from "components/Typography";
import BoxLink from "pages-sections/sessions/box-link";
import { updateCustomerShippingAddress } from "medusa/modules/account/actions";
import { useState } from "react";
import CountrySelect from "medusa/modules/common/components/country-select";
import type { Address, Region } from "@medusajs/medusa";
import ErrorMessage from "medusa/modules/common/components/error-message";
import { useRouter } from "next/navigation";
import { useSnackbar, VariantType } from "notistack";

// =============================================================
const AddressForm = ({
  address,
  region,
}: {
  address: Address;
  region: Region;
}) => {
  const INITIAL_VALUES = {
    first_name: address?.first_name || "",
    last_name: address?.last_name || "",
    address_1: address?.address_1 || "",
    address_2: address?.address_2 || "",
    company: address?.company || "",
    postal_code: address?.postal_code || "",
    city: address?.city || "",
    province: address?.province || "",
    country_code: address?.country_code || "",
    phone: address?.phone || "",
  };

  const [formState, formAction] = useFormState(updateCustomerShippingAddress, {
    success: false,
    error: null,
    addressId: address?.id,
  });
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleCancel = () => {
    enqueueSnackbar("Address update cancelled", { variant: "warning" });
    router.push("/address");
  };
  const [checked, setChecked] = useState(false);

  if (formState.success === true) {
    enqueueSnackbar("Address Updated Successfully", { variant: "success" });
    router.push("/address");
  } 
  if(formState.success === false && formState.error) {
    enqueueSnackbar("Error Updating Address", { variant: "error" });
  }

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <form action={formAction}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            name="first_name"
            label="First Name"
            required
            defaultValue={INITIAL_VALUES.first_name || undefined}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            name="last_name"
            label="Last Name"
            required
            defaultValue={INITIAL_VALUES.last_name || undefined}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="Company"
            name="company"
            autoComplete="organization"
            defaultValue={INITIAL_VALUES.company || undefined}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="Address"
            name="address_1"
            required
            autoComplete="address-line1"
            defaultValue={INITIAL_VALUES.address_1 || undefined}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="Apartment, suite, etc."
            name="address_2"
            autoComplete="address-line2"
            defaultValue={INITIAL_VALUES.address_2 || undefined}
          />
        </Grid>

        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="Postal code"
            name="postal_code"
            required
            defaultValue={INITIAL_VALUES.postal_code || undefined}
            autoComplete="postal-code"
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            required
            defaultValue={INITIAL_VALUES.city || undefined}
            autoComplete="locality"
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="Province / State"
            name="province"
            defaultValue={INITIAL_VALUES.province || undefined}
            autoComplete="address-level1"
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <CountrySelect
            region={region}
            name="country_code"
            required
            autoComplete="country"
            defaultValue={INITIAL_VALUES.country_code || undefined}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            autoComplete="phone"
            required
            defaultValue={INITIAL_VALUES.phone || undefined}
          />
        </Grid>
      </Grid>
      <Grid item md={6} xs={12} sm={6}>
        <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox size="small" color="secondary" checked={checked} />
          }
          label={
            <FlexBox
              flexWrap="wrap"
              alignItems="center"
              justifyContent="flex-start"
              gap={1}
            >
              <Span
                display={{
                  sm: "inline-block",
                  xs: "none",
                }}
              >
                I am a Human
              </Span>
            </FlexBox>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack direction="row" gap={1}>
          <SubmitButton
            variant="contained"
            size="small"
            color="error"
            disabled={!checked}
          >
            Save Changes
          </SubmitButton>
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Stack>
      </Grid>
      <ErrorMessage
        error={formState.error as string}
        data-testid="error-message-add-new-address"
      />
    </form>
  );
};

export default AddressForm;
