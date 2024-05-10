import type { Region } from "@medusajs/medusa"
import { retrievePricedProductById } from "medusa/lib/data"
import { getProductPrice } from "medusa/lib/util/get-product-price"

export type PriceType = {
  calculated_price: string
  original_price?: string
  price_type?: "sale" | "default"
  percentage_diff?: string,
 
}

 

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      {price.price_type === "sale" && (
        <div>
          {price.original_price}
        </div>
      )}
      <div
      >
        {price.calculated_price}
      </div>
    </>
  )
}