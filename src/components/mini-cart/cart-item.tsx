import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { H6, Tiny } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL
import type { LineItem } from "@medusajs/medusa";
import { getProductPrice } from "medusa/lib/util/get-product-price";
import { formatAmount } from "medusa/lib/util/prices";
import { useParams } from "next/navigation";
import type { CalculatedVariant } from "medusa/types/medusa";
import type { CartWithCheckoutStep } from "medusa/types/global";

// ==============================================================

type HandleCartAmountChange = (quantity: number, item: LineItem) => void

const MiniCartItem =  ({
  item,
  handleCartAmountChange,
  cart
}:{
  item:LineItem,
  handleCartAmountChange:HandleCartAmountChange,
  cart:CartWithCheckoutStep
}) => {
 
  console.log("mini cart line item", item.variant.title) 


  const unitPrice = (item.variant as CalculatedVariant).original_price || item.unit_price
  const hasReducedUnitPrice = (unitPrice * item.quantity || 0) > item.total!
  const reducedPrice = (item.total || 0) / item.quantity!

 const unitPriceWithQty =  unitPrice * item.quantity
 const hasReducedPriceWithQty = (item.total || 0) < unitPriceWithQty
 


  return <FlexBox py={2} px={2.5} key={item.id} alignItems="center" borderBottom="1px solid" borderColor="divider">
      <FlexBox alignItems="center" flexDirection="column">
        <Button size="small" color="primary" variant="outlined" onClick={()=>handleCartAmountChange(item.quantity + 1, item)} sx={{
        height: 28,
        width: 28,
        borderRadius: 50
      }}>
          <Add fontSize="small" />
        </Button>

        <H6 my="3px">{item?.quantity}</H6>

        <Button size="small" color="primary" variant="outlined" disabled={item.quantity === 1} onClick={()=>handleCartAmountChange(item.quantity - 1, item)} sx={{
        height: 28,
        width: 28,
        borderRadius: 50
      }}>
          <Remove fontSize="small" />
        </Button>
      </FlexBox>

      <Link href={`/products/${item.variant.product.handle}`}>
        <Avatar alt={item.title} src={item.thumbnail} sx={{
        mx: 1,
        width: 75,
        height: 75
      }} />
      </Link>

      <Box flex="1" textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">
        <Link href={`/products/${item.variant.product.handle}`}>
          <H6 ellipsis className="title">
            {item?.title}
          </H6>
        </Link>

        <Tiny color="grey.600">
          {formatAmount({
                amount: unitPrice,
                region: cart.region,
                includeTaxes: false,
              })} x {item.quantity}
        </Tiny>

        <H6 color="primary.main" mt={0.5}>
        {formatAmount({
                amount: unitPriceWithQty,
                region: cart.region,
                includeTaxes: false,
              })}
        </H6>
      </Box>

      <IconButton size="small" onClick={()=>handleCartAmountChange(0, item)} sx={{
      marginLeft: 2.5
    }}>
        <Close fontSize="small" />
      </IconButton>
    </FlexBox>;
};

export default MiniCartItem;