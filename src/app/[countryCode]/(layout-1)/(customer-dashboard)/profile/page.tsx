import { ProfilePageView } from "pages-sections/customer-dashboard/profile/page-view"; // API FUNCTIONS
import { getCustomer, listCustomerOrders } from "medusa/lib/data";
import { redirect } from "next/navigation";
import api from "utils/__api__/users";
import { LoginPageView } from "pages-sections/sessions/page-view";
import type { Order } from "@medusajs/medusa";

export const metadata = {
  title: "Profile - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function Profile({params}:{
  params:{
    countryCode:string
  }
}) {
  
  const customer = await getCustomer(); 
    const orders = await listCustomerOrders() as Order[]; 
  if(!customer){
    redirect(`/${params.countryCode}/login`)
  }

  return customer ? <ProfilePageView orders={orders} customer={customer} /> 
  : <LoginPageView/>
}