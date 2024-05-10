'use client'
import { Info } from "@mui/icons-material";
import { Card, Button, Typography, TextField, Tooltip, Box, Stack } from "@mui/material";
import React, { useMemo, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ErrorMessage from "medusa/modules/checkout/components/error-message";
import {CartWithCheckoutStep} from 'medusa/types/global'
 // @ts-ignore
import {useFormState} from "react-dom"

import {
  removeDiscount,
  removeGiftCard,
  submitDiscountForm,
} from "medusa/modules/checkout/actions";
import { formatAmount } from "medusa/lib/util/prices";

const DiscountCode = ({ cart }:{
  cart:CartWithCheckoutStep
}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const { discounts, gift_cards, region } = cart;

  const appliedDiscount = useMemo(() => {
    if (!discounts || !discounts.length) {
      return undefined;
    }

    switch (discounts[0].rule.type) {
      case "percentage":
        return `${discounts[0].rule.value}%`;
      case "fixed":
        return `- ${formatAmount({
          amount: discounts[0].rule.value,
          region: region,
          includeTaxes: false
        })}`;

      default:
        return "Free shipping";
    }
  }, [discounts, region]);

  const removeGiftCardCode = async (code) => {
    await removeGiftCard(code, gift_cards);
  };

  const removeDiscountCode = async () => {
    await removeDiscount(discounts[0].code);
  };

  const [message, formAction] = useFormState(submitDiscountForm, null);

  return (
    <Card sx={{width: '100%', backgroundColor: '#e3f2fd', p:2, display: 'flex', flexDirection: 'column'}}>
      <Box sx={{fontSize: 'medium'}}>
        {gift_cards.length > 0 && (
          <Box sx={{display: 'flex', flexDirection: 'column', marginBottom: 4}}>
            <Typography variant="h6" color="primary">Gift card(s) applied:</Typography>
            {gift_cards?.map((gc) => (
              <Box
                sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 'small'}}
                key={gc.id}
                data-testid="gift-card"
              >
                <Typography sx={{display: 'flex', gap: '3px', alignItems: 'baseline', justifyContent:'space-between'}}>
                  <span>Code: </span>
                  <span
                    data-testid="gift-card-code">
                    {gc.code}
                  </span>
                </Typography>
                <Typography sx={{fontWeight: 'semibold'}} data-testid="gift-card-amount">
                  {formatAmount({
                    region: region,
                    amount: gc.balance,
                    includeTaxes: false,
                  })}
                </Typography>
                <Button
                  sx={{display: 'flex', alignItems: 'center', gap: '2px', backgroundColor: 'transparent', border: 'none'}}
                  onClick={() => removeGiftCardCode(gc.code)}
                  data-testid="remove-gift-card-button"
                >
                  <DeleteForeverIcon />
                  <span>Remove gift card from order</span>
                </Button>
              </Box>
            ))}
          </Box>
        )}

        {appliedDiscount ? (
          <Stack>
            
              <Typography variant="body1" color="primary.black">Discount applied:</Typography>
              
                <Box sx={{display: 'flex', alignItems: 'baseline', gap:"12px", fontSize: 'small', width: '80%', paddingRight: '1px'}}>
                  <Typography variant="body1">Code: </Typography>
          
                  
                  <Typography sx={{minWidth: 'fitContent', color:'blue'}}> {discounts[0].code} ({appliedDiscount})</Typography>
                  
                 
                </Box>
                <Button onClick={removeDiscountCode} size="small" variant="text" color="error" sx={{minWidth:'fit-content', textTransform:'none', pl:0, pr:0}} endIcon={<DeleteForeverIcon />}>
                  
                   Remove discount code from order 
                  
                </Button>
              
            
          </Stack>
        ) : (
          <form action={formAction} style={{width: '100%'}}>
            <Box  sx={{p:1, my:2}}>
              <Button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                variant="text"
                sx={{fontSize: 'medium' }}
                color="primary"
                data-testid="add-discount-button"
                endIcon={
                <Tooltip
                  title="You can add multiple gift cards, but only one discount code."
                  placement="right"
                >
                  <Info color="disabled" />
                </Tooltip>}
              >
                Add gift card or discount code
              </Button>
              
            </Box>
            {isOpen && (
              <>
                <Box sx={{display: 'flex', gap: 2, width: '100%', alignItems: 'center', justifyContent:'space-between'}}>
                  <TextField
                    label="Please enter code"
                    name="code"
                    type="text"
                    autoFocus={false}
                    data-testid="discount-input"
                    fullWidth
                    sx={{color:'blue'}}
                  />
                  <Button variant="contained" type="submit" data-testid="discount-apply-button">
                    Apply
                  </Button>
                </Box>
                <ErrorMessage error={message} data-testid="discount-error-message" />
              </>
            )}
          </form>
        )}
      </Box>
    </Card>
  );
};

export default DiscountCode;
