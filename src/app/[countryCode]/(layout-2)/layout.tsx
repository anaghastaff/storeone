import { ShopLayout2 } from "components/layouts/shop-layout-2";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { getRegion } from "medusa/lib/data";
import UpdateCartRegion from "medusa/lib/util/update-cart-region";
import type { Viewport } from "next";
import { getCustomer } from "medusa/lib/data";
import { Suspense } from "react";
import Loading from "./loading";
import { getProductsList } from "medusa/lib/data";
import { medusaClient } from "medusa/lib/config";

export default async function Layout({
  children,
  params,
}:
{
  children: React.ReactNode;
  params: {countryCode: string };
}
){
  const cart = await fetchCart();
  const region = await getRegion(params.countryCode);
  if (!region) {
    return null;
  }
  const customer = await getCustomer();

  return <ShopLayout2
  cart={cart}
  customer={customer}
  countryCode={params.countryCode}
  
  >{children}</ShopLayout2>;
}