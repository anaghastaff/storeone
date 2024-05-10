'use client'
import Grid from "@mui/material/Grid"; // GLOBAL CUSTOM HOOK

import CartItem from "../cart-item";
import CheckoutForm from "../checkout-form";

import type { CartWithCheckoutStep } from "medusa/types/global";


export type CartProps = {
  cart: CartWithCheckoutStep
} 

const CartPageView = ({cart}:CartProps) => {
  // const {
  //   state
  // } = useCart();
  
  
  return <Grid container spacing={3}>
      {
      /* CART PRODUCT LIST */
    }
      <Grid item md={8} xs={12}> 
        {cart?.items?.map(({
        variant, 
        id,
        unit_price,
        quantity,
        thumbnail,
        total
        
      }) => ( <CartItem id={id} key={id} total={total} variant={variant} qty={quantity} name={variant.product.title} slug={variant.product.handle} price={unit_price} imgUrl={thumbnail} cart={cart}/>))}
      </Grid>
 
      {
      /* CHECKOUT FORM */
    }
      <Grid item md={4} xs={12}>
        <CheckoutForm cart={cart} />
      </Grid>
    </Grid>;
};

export default CartPageView;