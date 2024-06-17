import NotFound from "app/not-found";
import { getCustomer } from "medusa/lib/data";
import { redirect } from "next/navigation";
import { PaymentMethodsPageView } from "pages-sections/customer-dashboard/payment-methods/page-view";
export const metadata = {
  title: "Payment Methods - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function PaymentMethods() {
  const customer = await getCustomerr();
  
  if(!customer){
   redirect('/login')
  }
  return customer ? <PaymentMethodsPageView /> : <NotFound />;
}