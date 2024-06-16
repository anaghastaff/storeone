import { OrdersPageView } from "pages-sections/customer-dashboard/orders/page-view"; // API FUNCTIONS
import { getCustomer, listCustomerOrders } from "medusa/lib/data";
import { notFound, redirect } from "next/navigation";
import api from "utils/__api__/orders";

import { Suspense } from "react";
export const metadata = {
  title: "Orders - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function Orders() {
  
  const customer = await getCustomer();
  const orders = await listCustomerOrders();
  if(!customer || !orders){
   notFound()
  }
  return <OrdersPageView orders={orders} />;
}