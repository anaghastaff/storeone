'use client'
import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM COMPONENTS

import Image from "components/BazaarImage";
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box"; // GLOBAL CUSTOM HOOK
import CircularProgress from '@mui/material/CircularProgress'

// import useCart from "hooks/useCart"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // STYLED COMPONENT

import { Wrapper } from "./styles"; // =========================================================
import { useState } from "react";
import { updateLineItem } from "medusa/modules/cart/actions";
import type { CalculatedVariant } from "medusa/types/medusa";
import { formatAmount } from "medusa/lib/util/prices";

// =========================================================
const CartItem = ({
  id,
  name,
  qty,
  price,
  imgUrl,
  slug,
  variant,
  total,
  cart
}) => {
 
  const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<string | null>(null);
  //  const {dispatch} = useCart(); // HANDLE CHANGE CART PRODUCT QUANTITY

  const handleCartAmountChange =  async (quantity:number) => {
       setError(null);
      setUpdating(true);
      
      const message = await updateLineItem({
        lineId: id,
        quantity,
      })
        .catch((err) => {
          return err.message;
        })
        .finally(() => {
           setUpdating(false);
        });
  
       message && console.log("error message", message);
      }

  const unitPrice = (variant as CalculatedVariant).original_price || price
  const hasReducedUnitPrice = (unitPrice * qty || 0) > total!
  const reducedPrice = (total || 0) / qty! 
 const unitPriceWithQty =  unitPrice * qty
 const hasReducedPriceWithQty = (total || 0) < unitPriceWithQty 

  return <Wrapper>
      <Image alt={name} width={140} height={140} display="block" src={imgUrl || "/assets/images/products/iphone-xi.png"} />
      {
      /* DELETE BUTTON */
    }
      <IconButton size="small" onClick={()=>handleCartAmountChange(0)} sx={{
      position: "absolute",
      right: 15,
      top: 15
    }}>
        <Close fontSize="small" />
      </IconButton>

      <FlexBox p={2} rowGap={2} width="100%" flexDirection="column">
        <Link href={`/products/${slug}`}>
          <Span ellipsis fontWeight="600" fontSize={18}>
            {name}
          </Span>
        </Link>

        {
        /* PRODUCT PRICE SECTION */
      }
        <FlexBox gap={1} flexWrap="wrap" alignItems="center">
          <Span color="grey.600">
          {formatAmount({
                amount: unitPrice,
                region: cart.region,
                includeTaxes: false,
              })} x {qty}
          </Span>

          <Span fontWeight={600} color="primary.main">
          {formatAmount({
                amount: unitPriceWithQty,
                region: cart.region,
                includeTaxes: false,
              })}
          </Span>
        </FlexBox>

        {
        /* PRODUCT QUANTITY INC/DEC BUTTONS */
      }
        <FlexBox alignItems="center">
        {updating ? <CircularProgress size={14} /> 
        :  <Button color="primary" sx={{
          p: "5px"
        }} variant="outlined" disabled={qty === 1} onClick={()=>handleCartAmountChange(qty - 1)}>
           <Remove fontSize="small" />
          </Button>}

          <Span mx={1} fontWeight={600} fontSize={15}>
            {qty}
          </Span>

          {updating ? <CircularProgress size={14} /> 
          :   
          <Button color="primary" disabled={updating} sx={{
          p: "5px"
        }} variant="outlined" onClick={()=>handleCartAmountChange(qty + 1)}>
            <Add fontSize="small" />
          </Button>}
        </FlexBox>
      </FlexBox>
    </Wrapper>;
};

export default CartItem;