import { formatAmount } from "medusa/lib/util/prices"
import { LineItem, Region } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import Stack from "@mui/material/Stack"
import Box from '@mui/material/Box'

import { Paragraph, Span } from "components/Typography"

import { getPercentageDiff } from "medusa/lib/util/get-precentage-diff"
import { CalculatedVariant } from "medusa/types/medusa"

type LineItemPriceProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  style?: "default" | "tight"
}

const LineItemPrice = ({
  item,
  region,
  style = "default",
}: LineItemPriceProps) => {
  const originalPrice =
    (item.variant as CalculatedVariant).original_price * item.quantity
  const hasReducedPrice = (item.total || 0) < originalPrice

  return (
    <Stack 
      columnGap={2} sx={{color:"grey.600"}} alignItems="flex-end"
    >
      <Box >
        {hasReducedPrice && (
          <>
            <Paragraph align="left">
              {style === "default" && (
                <Span color="grey.600" align="left">Original: </Span>
              )}
              <Span 
                sx={{textDecoration:'line-through'}}
                color="grey.600"
              data-testid="product-original-price">
                {formatAmount({
                  amount: originalPrice,
                  region: region,
                  includeTaxes: false,
                })}
              </Span>
            </Paragraph>
            {style === "default" && (
              <Span color="info">
                -{getPercentageDiff(originalPrice, item.total || 0)}%
              </Span>
            )}
          </>
        )}
        <Span
          color={hasReducedPrice ? "info" : "common.black"}
          
          data-testid="product-price"
        >
          {formatAmount({
            amount: item.total || 0,
            region: region,
            includeTaxes: false,
          })}
        </Span>
      </Box>
    </Stack >
  )
}

export default LineItemPrice
