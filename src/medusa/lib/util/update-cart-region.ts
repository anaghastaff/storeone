import type { LineItem, Region } from "@medusajs/medusa"
import { enrichLineItems } from "medusa/modules/cart/actions";
import type { CartWithCheckoutStep } from "medusa/types/global"
import { getCheckoutStep } from "./get-checkout-step";


export default async function UpdateCartRegion({region, cart}:{region:Region, cart:CartWithCheckoutStep | null}){

    const response = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/carts/${cart?.id}`, {
     method: "POST",
     credentials: "include",
     headers: {
       "Content-Type": "application/json",
     },
     
     body: JSON.stringify({
       region_id:region.id,
     }),
   })
   .then((response) => response.json())
   .then(({ cart }) => {
    
    return cart as CartWithCheckoutStep })

    if(response?.items?.length > 0){

      const enrichedItems = await enrichLineItems(response?.items, response?.region_id);
      response.items = enrichedItems as LineItem[];
      
      response.checkout_step = response ? getCheckoutStep(response) : null;
      console.log("checkout data inside update region", response?.checkout_step)
      return response;

    }
 
   return response as CartWithCheckoutStep
 }