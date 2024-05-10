import type { Region } from "@medusajs/medusa"
import { formatAmount } from "./prices"


const getTotalCartPrice = ({amount , region, includeTaxes}:{
    amount: number | null | undefined, 
    region:Region, 
    includeTaxes:boolean}) =>
    {
      
    return formatAmount({
      amount: amount || 0,
      region: region,
      includeTaxes: includeTaxes,
    })
  }

  export default getTotalCartPrice
