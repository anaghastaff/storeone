import { ShopLayout1 } from "components/layouts/shop-layout-1";
import { enrichLineItems, retrieveCart } from "medusa/modules/cart/actions";
import type { LineItem } from "@medusajs/medusa";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { getRegion } from "medusa/lib/data";
import UpdateCartRegion from "medusa/lib/util/update-cart-region";

export default async function Layout1({ children, params }:{
  children:React.ReactNode
  params:{
    countryCode:string
  }
}) {

  const cart = await fetchCart();

  const region = await getRegion(params.countryCode);
  if(!region) { return null}

  const updatedCart = await UpdateCartRegion({region, cart })
  
  return (
    
      <ShopLayout1 cart={updatedCart} >{children} </ShopLayout1> 
    
  );
}
