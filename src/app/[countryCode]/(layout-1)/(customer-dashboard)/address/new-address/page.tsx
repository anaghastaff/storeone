import { Customer } from "@medusajs/medusa";
import { getCustomer, getRegion } from "medusa/lib/data";
import type { Viewport } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "pages-sections/customer-dashboard/address/page-view"; // API FUNCTIONS

import api from "utils/__api__/address";
export const metadata = {
  title: "Add new address",
  description: `Add new shipping Address`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export const viewport:Viewport = {
    width:'device-width',
    initialScale:1
}
export default async function NewAddress({
  params
}:{
  params:{
    addressId:string
  }
}) {
  const nextHeaders = headers();
  const countryCode = nextHeaders.get("next-url")?.split("/")[1] || ""
  const region = await getRegion(countryCode);
  const customer = await getCustomer() as Omit<Customer, 'password-hash'> | null;
  const add=true
  const address = customer?.shipping_addresses.find((a)=> a?.id === params.addressId)
    
    return <AddressDetailsPageView address={address} region={region} add={add} />;
 
}