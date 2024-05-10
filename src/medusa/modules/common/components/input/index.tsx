import { FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput, FormHelperText } from "@mui/material";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import Eye from "@mui/icons-material/Visibility";
import EyeOff from "@mui/icons-material/VisibilityOff";

type InputProps = Omit<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  "placeholder"
> & {
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
  topLabel?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, touched, required, topLabel, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
      if (type === "password" && showPassword) {
        inputRef.current?.setAttribute("type", "text");
      } else if (type === "password" && !showPassword) {
        inputRef.current?.setAttribute("type", "password");
      }
    }, [type, showPassword]);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <FormControl variant="outlined" fullWidth >
        {topLabel && <InputLabel htmlFor={name}>{topLabel}</InputLabel>}
        <OutlinedInput
          id={name}
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          inputRef={inputRef}
          // {...props}
          endAdornment={
            type === "password" && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </IconButton>
              </InputAdornment>
            )
          }
          label={label}
          required={required}
        />
        {required && (
          <InputAdornment position="end">
            <FormHelperText>{label}</FormHelperText>
          </InputAdornment>
        )}
      </FormControl>
    );
  }
);

Input.displayName = "Input";

export default Input;
