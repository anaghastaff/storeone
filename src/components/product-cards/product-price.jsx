import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTIONS

import { calculateDiscount, currency } from "lib"; // ==============================================================

// ==============================================================
const ProductPrice = ({
  discount,
  price
}) => {
  const actualPrice = price/100;
  console.log("price", price)
  return <FlexBox alignItems="center" gap={1} mt={0.5}>
      <Paragraph fontWeight={600} color="primary.main">
        {calculateDiscount(actualPrice, discount)}
      </Paragraph>

      {discount ? <Paragraph component="del" fontWeight={600} color="grey.600">
          {currency(actualPrice)}
        </Paragraph> : null}
    </FlexBox>;
};

export default ProductPrice;