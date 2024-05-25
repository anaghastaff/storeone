import { formatAmount } from "medusa/lib/util/prices"
import { LineItem, Region } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import {Paragraph, Span} from "components/Typography"
import Stack from "@mui/material/Stack"
import { getPercentageDiff } from "medusa/lib/util/get-precentage-diff"
import { CalculatedVariant } from "medusa/types/medusa"

type LineItemUnitPriceProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  style?: "default" | "tight"
}

const LineItemUnitPrice = ({
  item,
  region,
  style = "default",
}: LineItemUnitPriceProps) => {
  const originalPrice = (item.variant as CalculatedVariant).original_price
  const hasReducedPrice = (originalPrice * item.quantity || 0) > item.total!
  const reducedPrice = (item.total || 0) / item.quantity!

  return (
    <Stack 
      sx={{fontStyle:'normal'}}
      justifyContent="center"
      height="100%"
    >
      {hasReducedPrice && (
        <>
          <p>
            {style === "default" && (
              <Span color="grey.600">Original: </Span>
            )}
            <Span sx={{textDecoration:'line-through'}} data-testid="product-unit-original-price">
              {formatAmount({
                amount: originalPrice,
                region: region,
                includeTaxes: false,
              })}
            </Span>
          </p>
          {style === "default" && (
            <Span color="info">
              -{getPercentageDiff(originalPrice, reducedPrice || 0)}%
            </Span>
          )}
        </>
      )}
      <Span
        
        color={hasReducedPrice ? "info" : "grey.700"}
        data-testid="product-unit-price"
      >
        {formatAmount({
          amount: reducedPrice || item.unit_price || 0,
          region: region,
          includeTaxes: false,
        })}
      </Span>
    </Stack>
  )
}

export default LineItemUnitPrice
