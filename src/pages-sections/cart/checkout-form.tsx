'use client'
import Link from "next/link";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete"; // GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; // GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; // DUMMY CUSTOM DATA

import countryList from "data/countryList"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib";
import type { CartWithCheckoutStep } from "medusa/types/global";
import getTotalCartPrice from "medusa/lib/util/get-total-cart-price";
import DiscountCode from "medusa/modules/checkout/components/discount-code";


const CheckoutForm = ({ cart }: { cart: CartWithCheckoutStep }) => {
  // const {
  //   state
  // } = useCart();

  
console.log("checkout step",cart?.checkout_step)
  const STATE_LIST = [
    {
      value: "new-york",
      label: "New York",
    },
    {
      value: "chicago",
      label: "Chicago",
    },
  ];
  return (
    <Card
      sx={{
        padding: 3,
      }}
    >
      <FlexBetween mb={2}>
        <Span color="grey.600">Total:</Span>

        <Span fontSize={18} fontWeight={600} lineHeight="1">
          {getTotalCartPrice({
            amount: cart.subtotal,
            region: cart.region,
            includeTaxes: false,
          })}
        </Span>
      </FlexBetween>

      <Divider
        sx={{
          mb: 2,
        }}
      />

      <FlexBox alignItems="center" columnGap={1} mb={2}>
        <Span fontWeight="600">Additional Comments</Span>

        <Span
          p="6px 10px"
          fontSize={12}
          lineHeight="1"
          borderRadius="3px"
          color="primary.main"
          bgcolor="primary.light"
        >
          Note
        </Span>
      </FlexBox>

      {/* COMMENTS TEXT FIELD */}
      <TextField variant="outlined" rows={6} fullWidth multiline />

      <Divider
        sx={{
          mb: 2,
        }}
      />

      {/* APPLY VOUCHER TEXT FIELD */}
     
        <DiscountCode cart={cart} />

      <Divider
        sx={{
          mb: 2,
        }}
      />

      <Span fontWeight={600} mb={2} display="block">
        Shipping Estimates
      </Span>

      {/* COUNTRY TEXT FIELD */}
      <Autocomplete
        fullWidth
        sx={{
          mb: 2,
        }}
        options={countryList}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            label="Country"
            variant="outlined"
            placeholder="Select Country"
            inputProps={{ ...params.inputProps, autoComplete: "new-password" }}
          />
        )}
      />

      {/* STATE/CITY TEXT FIELD */}
      <TextField
        select
        fullWidth
        size="small"
        label="State"
        variant="outlined"
        placeholder="Select State"
        defaultValue="new-york"
      >
        {STATE_LIST.map(({ label, value }) => (
          <MenuItem value={value} key={label}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      {/* ZIP-CODE TEXT FIELD */}
      <TextField
        fullWidth
        size="small"
        label="Zip Code"
        placeholder="3100"
        variant="outlined"
        sx={{
          mt: 2,
        }}
      />

      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{
          my: 2,
        }}
      >
        Calculate Shipping
      </Button>

      <Button
        fullWidth
        color="primary"
        href= {"/checkout?step=" + cart?.checkout_step}
        variant="contained"
        LinkComponent={Link}
      >
        Checkout Now
      </Button>
    </Card>
  );
};

export default CheckoutForm;
