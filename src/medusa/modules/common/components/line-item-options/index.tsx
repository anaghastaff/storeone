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
    <Typography variant="caption" component="span" data-testid={dataTestid} data-value={dataValue}  color="grey.700">
    
      Variant: {variant.title}
    </Typography>
  )
}

export default LineItemOptions
