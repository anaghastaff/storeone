"use client";

import { Fragment } from "react";
import ShoppingBag from "@mui/icons-material/ShoppingBag"; // Local CUSTOM COMPONENTS

import OrderSummery from "../order-summery";
import OrderProgress from "../order-progress";
import OrderedProducts from "../ordered-products";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import {Order} from '@medusajs/medusa'
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
// =============================================================
const OrderDetailsPageView = ({
  order,
  products
}:
{
  order: Omit<Order, 'beforeInsert'> | null,
  products: PricedProduct[]
}) => {
    
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader href="/products" Icon={ShoppingBag} title="Order Details" buttonText="Order Again" />

      {
      /* ORDER PROGRESS AREA */
    }
      <OrderProgress order={order}/>

      {
      /* ORDERED PRODUCT LIST */
    }
      <OrderedProducts order={order} products={products} />

      {
      /* SHIPPING AND ORDER SUMMERY */
    }
      <OrderSummery order={order} />
    </Fragment>;
};

export default OrderDetailsPageView;