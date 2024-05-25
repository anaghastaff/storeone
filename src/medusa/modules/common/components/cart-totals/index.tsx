"use client"

import { formatAmount } from "medusa/lib/util/prices"
import { InformationCircleSolid } from "@medusajs/icons"
import { Cart, Order } from "@medusajs/medusa"
import  Tooltip  from "@mui/material/Tooltip"
import React from "react"
import Stack from '@mui/material/Stack'
import {  H3, Span, Paragraph } from "components/Typography"
import Divider  from "@mui/material/Divider"
import InfoIcon from '@mui/icons-material/Info'

type CartTotalsProps = {
  data: Omit<Cart, "refundable_amount" | "refunded_total"> | Order
}

const CartTotals: React.FC<CartTotalsProps> = ({ data }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = data

  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: data.region,
      includeTaxes: false,
    })
  }

  return (
    <Stack width="100%" justifyContent="flex-end">
      <Stack>
        <Stack direction="row" justifyContent="flex-end" columnGap={2} alignItems="center">
          <Stack direction="row" alignItems="center">
        <Tooltip title="Cart total excluding shipping and taxes." >
              <InfoIcon sx={{color:"grey.600", fontSize:18}} />
            </Tooltip>
          <Paragraph fontWeight="medium">
            Subtotal
           
          </Paragraph>
          </Stack>
          <Span data-testid="cart-subtotal">{getAmount(subtotal)}</Span>
        </Stack>
        {!!discount_total && (
          <Stack direction="row" alignItems="center" justifyContent="flex-end" columnGap={2}>
            <Paragraph fontWeight="medium" color='info.dark'>Discount</Paragraph>
            <Span color="info" data-testid="cart-discount" data-value={getAmount(discount_total)}>
              - {getAmount(discount_total)}
            </Span>
          </Stack>
        )}
        {!!gift_card_total && (
          <Stack direction="row" justifyContent="flex-end" columnGap={2} alignItems="center">
            <Paragraph color="info.dark">Gift card</Paragraph>
            <Span color="info" data-testid="cart-gift-card-amount" data-value={getAmount(gift_card_total)}>
              - {getAmount(gift_card_total)}
            </Span>
          </Stack>
        )}
        <Stack direction="row" justifyContent="flex-end" columnGap={2} alignItems="center">
          <Paragraph>Shipping</Paragraph>
          <Span data-testid="cart-shipping">{getAmount(shipping_total)}</Span>
        </Stack>
        <Stack direction="row" justifyContent="flex-end" columnGap={2} >
          <Paragraph sx={{display:'flex', columnGap:1,alignItems:'center' }}>Taxes</Paragraph>
          <Span data-testid="cart-taxes">{getAmount(tax_total)}</Span>
        </Stack>
      </Stack>
      <Divider sx={{ height: 1, width: 'full', borderBottom: '1px solid #e0e0e0', my: 1 }} />

      <Stack direction="row" justifyContent="flex-end" columnGap={2} alignItems="center" >
        <H3 fontWeight="medium">Total</H3>
        <Span fontWeight="500" data-testid="cart-taxes">{getAmount(total)}</Span>
      </Stack>
      <Divider sx={{ height: 1, width: 'full', borderBottom: '1px solid #e0e0e0', mt: 1 }} />
    </Stack>
  )
}

export default CartTotals
