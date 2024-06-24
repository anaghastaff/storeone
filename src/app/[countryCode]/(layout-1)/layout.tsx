import { ShopLayout1 } from "components/layouts/shop-layout-1";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { getRegion } from "medusa/lib/data";
import UpdateCartRegion from "medusa/lib/util/update-cart-region";
import type { Viewport } from "next";
import { getCustomer } from "medusa/lib/data";
import { Suspense } from "react";
import Loading from "./loading";
import { getProductsList } from "medusa/lib/data";
import { medusaClient } from "medusa/lib/config";

export const viewport: Viewport = {
  width:'device-width',
  initialScale:1,
}

export default async function Layout1({ children, params }:{
  children:React.ReactNode
  params:{
    countryCode:string
  }
}) {

  const cart = await fetchCart();

  const region = await getRegion(params.countryCode);
  if(!region) { return null}
  const { products, count } = await medusaClient.products
    .list()
    .then(({ products, limit, offset, count }) => {
      return { products, count };
    });

  const customer = await getCustomer() 
  return (
      
      <ShopLayout1 cart={cart} customer={customer} countryCode={params.countryCode} products={products}>{children} </ShopLayout1> 
      
  );
}
