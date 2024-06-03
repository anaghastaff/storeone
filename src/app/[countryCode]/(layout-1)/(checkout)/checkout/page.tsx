import { CheckoutPageView } from "pages-sections/checkout/page-view";
import { fetchCart } from "../../../../../medusa/lib/util/get-cart-from-cookie";
import { createPaymentSessions, getRegion } from "medusa/lib/data";
import UpdateCartRegion from "medusa/lib/util/update-cart-region"
import type { CartWithCheckoutStep } from "medusa/types/global";
import { Viewport } from "next";
import Wrapper from "medusa/modules/checkout/payment-wrapper";

export const metadata = {
  title: "Checkout - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com" 
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale:1,
}
export default async function Checkout({params}:{params:{countryCode:string}}) {

  const cart = await fetchCart();
  
  const region = await getRegion(params.countryCode);
  if(!region) return null

  const cartWithRegion = await UpdateCartRegion({region, cart });
  
  const cartWithPaymentSession = (await createPaymentSessions(cart?.id).then(
    (cart) => cart
  )) as CartWithCheckoutStep
  console.log("cart type", cart?.type)
  return (
    <Wrapper cart={cart}>
      <CheckoutPageView cart={cartWithPaymentSession}/>
  </Wrapper>
  )
  
}