import { ProductVariant } from "@medusajs/medusa"
import { Paragraph } from "components/Typography"
import  Typography  from "@mui/material/Typography"

type LineItemOptionsProps = {
  variant: ProductVariant
  'data-testid'?: string
  'data-value'?: ProductVariant
}

const LineItemOptions = ({ variant, 'data-testid': dataTestid, 'data-value': dataValue }: LineItemOptionsProps) => {
  return (
    <Typography variant="caption" component="span" data-testid={dataTestid} data-value={dataValue} 
    sx={{display:'flex', flexWrap:"wrap", color:'grey.600', overflow:"hidden" }}>
    
      Variant: {variant.title}
    </Typography>
  )
}

export default LineItemOptions
