import { OrderConfirmationPageView } from "pages-sections/order-confirmation";
import { retrieveOrder } from "medusa/lib/data"
import { LineItem, Order } from "@medusajs/medusa"
import { enrichLineItems } from "medusa/modules/cart/actions"
import { notFound } from "next/navigation"
import Loading from "../loading";
import { Suspense } from "react";
export const metadata = {
  title: "Order Confirmed",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

type Props = {
  params:{id : string}
}

async function getOrder(id: string) {

  const order = await retrieveOrder(id)

  if (!order) {
    return notFound()
  }

  const enrichedItems = await enrichLineItems(order.items, order.region_id)

  return {
    order: {
      ...order,
      items: enrichedItems as LineItem[],
    } as Order,
  }
}
export default async function OrderConfirmation(
  { params }: Props
) {

  const { order } = await getOrder(params.id)

  return  <OrderConfirmationPageView order={order}/>;
}