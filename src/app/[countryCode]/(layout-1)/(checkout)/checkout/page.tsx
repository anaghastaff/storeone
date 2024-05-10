import { CheckoutPageView } from "pages-sections/checkout/page-view";
import { fetchCart } from "../../../../../medusa/lib/util/get-cart-from-cookie";
import { getRegion } from "medusa/lib/data";
import UpdateCartRegion from "medusa/lib/util/update-cart-region"

export const metadata = {
  title: "Checkout - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com" 
  }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function Checkout({params}:{params:{countryCode:string}}) {

  const cart = await fetchCart();
  
  const region = await getRegion(params.countryCode);
  if(!region) return null

  const updatedCart = await UpdateCartRegion({region, cart })
  
  return <CheckoutPageView cart={updatedCart}/>;
}