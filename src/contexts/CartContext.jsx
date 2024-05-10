'use client'

import { createContext, useMemo, useReducer, useEffect, useState } from "react"; // =================================================================================
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { medusaClient } from "medusa/lib/config";
import { getCartID } from "../medusa/lib/util/get-cart-id-from-cookie";
import { useGetCart } from "medusa-react";
import Cookies from "js-cookie";

// =================================================================================
// const INITIAL_CART = [{
//   qty: 1,
//   price: 210,
//   slug: "silver-high-neck-sweater",
//   name: "Silver High Neck Sweater",
//   id: "6e8f151b-277b-4465-97b6-547f6a72e5c9",
//   imgUrl: "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
// }, {
//   qty: 1,
//   price: 110,
//   slug: "yellow-casual-sweater",
//   name: "Yellow Casual Sweater",
//   id: "76d14d65-21d0-4b41-8ee1-eef4c2232793",
//   imgUrl: "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
// }, {
//   qty: 1,
//   price: 140,
//   slug: "denim-blue-jeans",
//   name: "Denim Blue Jeans",
//   id: "0fffb188-98d8-47f7-8189-254f06cad488",
//   imgUrl: "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png"
// }];

const INITIAL_CART = [];

const INITIAL_STATE = {
  cart: []
};

// ==============================================================

// ==============================================================



export const CartContext = createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.items.find(item => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.items.filter(item => item.id !== cartItem.id);
        return { ...state,
          cart: filteredCart
        };
      } 
      
      // IF PRODUCT ALREADY EXISTS IN CART

      if (exist) {
        const newCart = cartList.items.map(
          item => item.id === cartItem.id 
          ? 
          { ...item,
          quantity: cartItem.qty
        } 
        : item
      );
        return { ...state,
          cart: newCart
        };
      }
      return { ...state,
        cart: [...cartList.items, cartItem]
      };

    default:
      { 
        return state;
      }
  }
};



export const CartProvider =  ({
   children
}) => {

 
 
  const [state, dispatch] =  useReducer(reducer, INITIAL_STATE) ;
  const contextValue = useMemo(() => ({
    state,
    dispatch
  }), [state, dispatch]);
 
  return <CartContext.Provider value={contextValue}>
    {children}  
  </CartContext.Provider>;
};
export default CartProvider;