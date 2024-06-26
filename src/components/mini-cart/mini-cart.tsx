'use client'
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider"; // GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; // LOCAL CUSTOM COMPONENTS

import TopHeader from "./top-header";
import MiniCartItem from "./cart-item";
import EmptyCartView from "./empty-view";
import BottomActions from "./bottom-actions"; // GLOBAL CUSTOM COMPONENT

import Scrollbar from "components/Scrollbar"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL

// =========================================================

import { updateLineItem } from "medusa/modules/cart/actions";
import type { LineItem } from "@medusajs/medusa";
import { useState } from "react";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { CalculatedVariant } from "medusa/types/medusa";
import getTotalCartPrice from "medusa/lib/util/get-total-cart-price";

const MiniCart = ({
  toggleSidenav,
  cart,
}: {
  toggleSidenav: any;
  cart: CartWithCheckoutStep;
}) => {
  const { push } = useRouter();
  // const {
  //   state,
  //   dispatch
  // } = useCart();

  if (!cart) {
    return <EmptyCartView />;
  }

  const cartList = cart;
  const region = cartList?.region;
  console.log("mini cart length", cart?.items?.length);
  const amount = cartList?.subtotal;

  const handleCartAmountChange = async (quantity: number, item: LineItem) => {
    
    const message = await updateLineItem({
      lineId: item.id,
      quantity,
    }).catch((err) => console.log(err.message));
   
  };
  
  const getTotalPrice = () => {
    return cartList?.items?.reduce(
      (acc, item) => acc + item.unit_price * item.quantity,
      0
    );
  };

  const handleNavigate = (path) => () => {
    toggleSidenav();
    push(path);
  };

  return (
    <Box width="100%">
      {/* HEADING SECTION */}
      <TopHeader toggle={toggleSidenav} total={cartList?.items.length} />
      <Divider />
      <Box height={`calc(100vh - ${cartList?.items.length ? "207px" : "75px"})`}>
        {/* CART ITEM LIST */}
        {cartList?.items.length > 0 ? (
          <Scrollbar>
            {cartList?.items.map((item: LineItem, ind) => (
              <MiniCartItem
                key={ind}
               
                cart={cart}
                item={item}
                handleCartAmountChange={handleCartAmountChange}
              />
            ))}
          </Scrollbar>
        ) : (
          <EmptyCartView />
        )}
      </Box>

      {/* CART BOTTOM ACTION BUTTONS */}

      {cartList?.items.length > 0 ? (
        <BottomActions
          total={getTotalCartPrice({ amount, region, includeTaxes: false })}
          handleNavigate={handleNavigate}
          cart={cart}
        />
      ) : null}
    </Box>
  );
};

export default MiniCart;
