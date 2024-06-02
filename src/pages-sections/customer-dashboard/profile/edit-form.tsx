"use client";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup"; // CUSTOM DATA MODEL
import type { Customer } from "@medusajs/medusa";
import { useFormState } from "react-dom";
import { updateProfileInfo } from "medusa/modules/account/actions";
import { SubmitButton } from "medusa/modules/common/components/submit-button";
import ErrorMessage from "medusa/modules/common/components/error-message";
import { useState } from "react";
import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { Span } from "components/Typography";

import {useRouter} from 'next/navigation'
import { useSnackbar, VariantType } from 'notistack';
// ==============================================================
const ProfileEditForm = ({
  customer,
}: {
  customer: Omit<Customer, "password-hash"> | null;
}) => {

  const [state, formAction] = useFormState(updateProfileInfo, {
    error: false,
    success: false,
  });

  const router = useRouter();

  const INITIAL_VALUES = {
    email: customer?.email || "",
    phone: customer?.phone || "",
    last_name: customer?.last_name || "",
    first_name: customer?.first_name || "",
  };
  const VALIDATION_SCHEMA = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    phone: yup.string().required("Contact is required"),
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const {enqueueSnackbar} = useSnackbar()
  
  
  if (state.success === true) {
    enqueueSnackbar("Profile Edit Successful", { variant: "success" });
    router.push("/profile");
  } 
  if(state.success === false && state.error) {
    enqueueSnackbar("Error submitting changes", { variant: "error" });
  }
 

  return (
    <form action={formAction}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            name="first_name"
            defaultValue={INITIAL_VALUES.first_name}
            label="First Name"
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            name="last_name"
            defaultValue={INITIAL_VALUES.last_name}
            label="Last Name"
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            name="email"
            defaultValue={INITIAL_VALUES.email}
            type="email"
            label="Email"
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            defaultValue={INITIAL_VALUES.phone}
          />
        </Grid>
        <Grid item md={6} xs={12}>
        <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={checked}
              defaultChecked={false}
            />
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
                I have completed the changes
              </Span>
            </FlexBox>
          }
        />
          </Grid>
        <Grid item xs={12}>
          <Stack direction="row" gap={1}>
          <SubmitButton
            variant="contained"
            size="small"
            color="error"
            
            disabled={!checked}
          >
            Confirm Changes
          </SubmitButton>
          <Button variant="outlined" size="small" color="error" href="/profile">Cancel</Button>
          </Stack>
          <ErrorMessage
            error={state.error as string}
            data-testid="error-message-login"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfileEditForm;
