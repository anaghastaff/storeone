"use client"

import * as yup from "yup"; // LOCAL CUSTOM COMPONENTS

import EyeToggleButton from "../eye-toggle-button"; // LOCAL CUSTOM HOOK

import usePasswordVisible from "../use-password-visible"; // GLOBAL CUSTOM COMPONENTS

import BazaarTextField from "components/BazaarTextField";

import { useFormState } from "react-dom";
import {logCustomerIn} from "medusa/modules/account/actions"
import ErrorMessage from "medusa/modules/common/components/error-message";
import { SubmitButton } from "medusa/modules/common/components/submit-button";
import { useSnackbar } from "notistack";

const LoginPageView = () => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible(); // LOGIN FORM FIELDS INITIAL VALUES

  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    email: yup.string().email("invalid email").required("Email is required"),
  });
  

  const [message, formAction] = useFormState(logCustomerIn, null);

 
  return (
    <form action={formAction}>
      <BazaarTextField
        mb={1.5}
        fullWidth
        name="email"
        size="medium"
        type="email"
        variant="outlined"
        label="Email or Phone Number"
        placeholder="exmple@mail.com"
        required
      />

      <BazaarTextField
        mb={2}
        fullWidth
        size="medium"
        name="password"
        label="Password"
        autoComplete="on"
        variant="outlined"
        placeholder="*********"
        type={visiblePassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <EyeToggleButton
              show={visiblePassword}
              click={togglePasswordVisible}
            />
          ),
        }}
      />

      <SubmitButton
      variant="contained"
      size="large"
      color="error"
      fullWidth
      message={message}
      >
        Login
      </SubmitButton>
      <ErrorMessage error={message} data-testid="error-message-login" />
    </form> 
  );
};

export default LoginPageView;
