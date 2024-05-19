'use client'
import React from 'react'
import { PageStepper } from "components/layouts/shop-layout-1";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width:'device-width',
  initialScale:1,
}


export default function Layout({
  children
}:{
  children:React.ReactNode,
  
}) {
  return <PageStepper >{children}</PageStepper>; 
}