"use client"

import  Button  from "@mui/material/Button"
import React from "react"
import { useFormStatus } from "react-dom"
import { CircularProgress } from "@mui/material"

export function SubmitButton({
  children,
  variant = "contained",
  className,
  'data-testid': dataTestId,
  size="medium",
  color="primary",
  fullWidth
}: {
  children: React.ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  className?: string
  'data-testid'?: string,
    size?:'small' | 'medium' | 'large',
    color?:'primary' | 'secondary' | 'info' | 'error' | 'warning',
    fullWidth?:boolean
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      size={size}
      className={className}
      type="submit"
      disabled={pending}
      variant={variant}
      color={color}
      data-testid={dataTestId}
      endIcon={pending && <CircularProgress />}
      disableElevation
      disableRipple
      fullWidth={fullWidth}
    >
      {pending ? "submitting..." : children}
    </Button>
  )
}
