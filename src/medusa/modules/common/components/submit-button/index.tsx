"use client"

import  Button  from "@mui/material/Button"
import React from "react"
import { useFormStatus } from "react-dom"
import { CircularProgress } from "@mui/material"
import { useSnackbar } from "notistack";

export function SubmitButton({
  children,
  variant = "contained",
  className,
  'data-testid': dataTestId,
  size="medium",
  color="primary",
  fullWidth,
  disabled,
  message
}: {
  children: React.ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  className?: string
  'data-testid'?: string,
    size?:'small' | 'medium' | 'large',
    color?:'primary' | 'secondary' | 'info' | 'error' | 'warning',
    fullWidth?:boolean,
    disabled?:boolean,
  message?:string | null
}) {
  const { pending } = useFormStatus()
  const {enqueueSnackbar} = useSnackbar()
  // if(message === null && !pending){
  //   console.log("Message", message)
  //   enqueueSnackbar("You have successfully Signed IN!", {variant:"success"})
  // }
 
  return (
    <Button
      size={size}
      className={className}
      type="submit"
      disabled={pending || disabled}
      variant={variant}
      color={color}
      data-testid={dataTestId}
      endIcon={pending && <CircularProgress size={16}/>}
      disableElevation
      disableRipple
      fullWidth={fullWidth}
     
    >
      {pending ? "submitting" : children}
    </Button>
  )
}
