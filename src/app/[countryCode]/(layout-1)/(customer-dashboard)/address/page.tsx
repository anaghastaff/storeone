import { AddressPageView } from "pages-sections/customer-dashboard/address/page-view"; // API FUNCTIONS
import {headers} from 'next/headers';
import {getCustomer, getRegion} from 'medusa/lib/data';
import {redirect} from 'next/navigation';
import NotFound from "app/not-found";

export const metadata = {
  title: "Address - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function Address() {
  const nextHeaders = headers();
  const countryCode = nextHeaders.get("next-url")?.split("/")[1] || ""
  const region = await getRegion(countryCode);
  const customer = await getCustomer();
  if(!customer) {
    redirect('/login')
  }

  return customer ? <AddressPageView customer={customer} region={region} /> : 
  <NotFound />
  ;
}