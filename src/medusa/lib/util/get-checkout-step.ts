import { CartWithCheckoutStep } from "medusa/types/global"
export function getCheckoutStep(
  cart: CartWithCheckoutStep
 
) {
  if (!cart?.shipping_address?.address_1 || !cart?.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else { 
    return "payment"
  }
} 
