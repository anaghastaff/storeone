import { Customer } from "@medusajs/medusa";
import { getCustomer, getRegion } from "medusa/lib/data";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "pages-sections/customer-dashboard/address/page-view"; // API FUNCTIONS

import api from "utils/__api__/address";
export const metadata = {
  title: "Address - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function Address({
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
  const edit=true
  const address = customer?.shipping_addresses.find((a)=> a?.id === params.addressId)
    
    return <AddressDetailsPageView address={address} region={region}  edit={edit}/>;
 
}