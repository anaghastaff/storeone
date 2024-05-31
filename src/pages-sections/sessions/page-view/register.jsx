"use client"
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import * as yup from "yup"; // LOCAL CUSTOM COMPONENTS

import EyeToggleButton from "../eye-toggle-button"; // LOCAL CUSTOM HOOK

import BoxLink from "../box-link";
import usePasswordVisible from "../use-password-visible"; // GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
import BazaarTextField from "components/BazaarTextField";
import { SubmitButton } from "medusa/modules/common/components/submit-button";
import ErrorMessage from "medusa/modules/common/components/error-message";
import { useFormState } from "react-dom";
import { useState } from "react";
import { signUp } from "medusa/modules/account/actions";
const RegisterPageView = () => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible(); // COMMON INPUT PROPS FOR TEXT FIELD

  const inputProps = {
    endAdornment: (
      <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
    ),
  }; // REGISTER FORM FIELDS INITIAL VALUES

  const initialValues = {
    name: "",
    email: "",
    password: "",
    re_password: "",
    agreement: false,
  }; // REGISTER FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    re_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please re-type password"),
    agreement: yup
      .bool()
      .test(
        "agreement",
        "You have to agree with our Terms and Conditions!",
        (value) => value === true
      )
      .required("You have to agree with our Terms and Conditions!"),
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }
  
  const [message, formAction] = useFormState(signUp, null);

  return (
    <form action={formAction}>
      <BazaarTextField
      required
        mb={1.5}
        fullWidth
        name="first_name"
        size="small"
        label="First Name"
        variant="outlined"
        placeholder="Foo"
      />

      <BazaarTextField
      required
        mb={1.5}
        fullWidth
        name="last_name"
        size="small"
        label="Last Name"
        variant="outlined"
        placeholder="Bar"
      />

      <BazaarTextField
      required
        mb={1.5}
        fullWidth
        name="email"
        size="small"
        type="email"
        variant="outlined"
        label="Email"
        placeholder="exmple@mail.com"
      />

      <BazaarTextField
      required
        mb={1.5}
        fullWidth
        name="phone"
        size="small"
        type="tel"
        variant="outlined"
        label="Phone"
        placeholder="9000009009"
      />

      <BazaarTextField
      required
        mb={1.5}
        fullWidth
        size="small"
        name="password"
        label="Password"
        variant="outlined"
        autoComplete="on"
        placeholder="*********"
        type={visiblePassword ? "text" : "password"}
        InputProps={inputProps}
      />

      <FormControlLabel
        name="agreement"
        className="agreement"
        onChange={handleChange}
        control={
          <Checkbox
            size="small"
            color="secondary"
            checked={checked}
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
              By signing up, you agree to
            </Span>
            <Span
              display={{
                sm: "none",
                xs: "inline-block",
              }}
            >
              Accept Our
            </Span>
            <BoxLink title="Terms & Condition" href="/" />
          </FlexBox>
        }
      />

      <SubmitButton variant="contained" size="large" color="error" fullWidth disabled={!checked}>
        Create Account
      </SubmitButton>
      <ErrorMessage error={message} data-testid="error-message-login" />
    </form>
  );
};

export default RegisterPageView;
