import { formatAmount } from "medusa/lib/util/prices";
import { LineItem, Region } from "@medusajs/medusa";
import { clx } from "@medusajs/ui";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { Paragraph, Span } from "components/Typography";

import { getPercentageDiff } from "medusa/lib/util/get-precentage-diff";
import { CalculatedVariant } from "medusa/types/medusa";

type LineItemPriceProps = {
  item: Omit<LineItem, "beforeInsert">;
  region: Region;
  style?: "default" | "tight";
};

const LineItemPrice = ({
  item,
  region,
  style = "default",
}: LineItemPriceProps) => {
  const originalPrice =
    (item.variant as CalculatedVariant).original_price * item.quantity;
  const hasReducedPrice = (item.total || 0) < originalPrice;

  return (
    <Stack>
      {hasReducedPrice && (
        <Stack direction="row" columnGap={1}>
          {style === "tight" && (
            <Paragraph color="info.dark">
              -{getPercentageDiff(originalPrice, item.total || 0)}%
            </Paragraph>
          )}

          <Paragraph
         
         >
            {/* {style === "tight" && (
                <Span color="grey.600" align="left">Original: </Span>
              )} */}
            <Span
              sx={{ textDecoration: "line-through" }}
              color="common.black"
              data-testid="product-original-price"
            >
              {formatAmount({
                amount: originalPrice,
                region: region,
                includeTaxes: false,
              })}
            </Span>
          </Paragraph>
        </Stack>
      )}
      <Paragraph
        color={hasReducedPrice ? "common.black" : "grey.800"}
        data-testid="product-price"
        variant="subtitle1"
        align="right"
      >
        {formatAmount({
          amount: item.total || 0,
          region: region,
          includeTaxes: false,
        })}
      </Paragraph>
    </Stack>
  );
};

export default LineItemPrice;
