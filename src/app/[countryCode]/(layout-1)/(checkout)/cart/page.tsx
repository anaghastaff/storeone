import { CartPageView } from "../../../../../pages-sections/cart/page-view";
import { fetchCart } from "../../../../../medusa/lib/util/get-cart-from-cookie";
import { getRegion } from "medusa/lib/data";
import UpdateCartRegion from "medusa/lib/util/update-cart-region";
import { Viewport } from "next";
import EmptyCartView from "components/mini-cart/empty-view";

export const metadata = {
  title: "Cart - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],

  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function Cart({
  params,
}: {
  params: { countryCode: string };
}) {
  const cart = await fetchCart();

  const region = await getRegion(params.countryCode);
  if (!region) return null;

  const updatedCart = await UpdateCartRegion({ region, cart });

  return cart?.items?.length > 0 ? (
    <CartPageView cart={updatedCart} />
  ) : (
    <EmptyCartView />
  );
}
