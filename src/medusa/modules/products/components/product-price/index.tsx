import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getProductPrice } from "medusa/lib/util/get-product-price"
import { RegionInfo } from "medusa/types/global"


export default function ProductPrice({
  product,
  variant,
  region,
}: {
  product: PricedProduct
  variant?: PricedVariant
  region: RegionInfo
}) {

  
  const { cheapestPrice, variantPrice } = getProductPrice({
    product ,
    variantId: variant?.id,
    region,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <Box sx={{ width: '32px', height: '9px', backgroundColor: '#f0f0f0', animation: 'pulse 1.5s infinite' }} />;
  }
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', color: '#333' }}>
      <Box sx={{columnGap:1, display:'flex'}}>
      <Typography variant="subtitle1" sx={{ fontWeight: '600', color: selectedPrice.price_type === "sale" ? '#007bff' : 'inherit' }}>
        {!variant && "From "}
        
      </Typography>
      <Typography color="info.dark" variant="subtitle1" fontWeight="600">
      {selectedPrice.calculated_price} <span style={{  color:'green', gap:1 }}>-{selectedPrice.percentage_diff}%</span>
      </Typography>
      </Box>
     
      
      {selectedPrice.price_type === "sale" && (
        <>
          <Typography variant="body1">
            <span style={{ color: '#666' }}>Original: </span>
            <span style={{ textDecoration: 'line-through' }}>{selectedPrice.original_price}</span>
          </Typography>
          <Typography variant="body1" sx={{ color: '#007bff' }}>
            -{selectedPrice.percentage_diff}%
          </Typography>
        </>
      )}
    </Box>
  )
}
