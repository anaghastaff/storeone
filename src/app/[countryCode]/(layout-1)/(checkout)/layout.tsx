'use client'
import React from 'react'
import { PageStepper } from "components/layouts/shop-layout-1";
import type { CartWithCheckoutStep } from "medusa/types/global";

export default function Layout({
  children
}:{
  children:React.ReactNode,
  
}) {
  return <PageStepper >{children}</PageStepper>; 
}