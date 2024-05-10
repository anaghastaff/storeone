import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField"; // LOCAL CUSTOM COMPONENT

import ListItem from "../list-item"; // GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTION


import type { CartWithCheckoutStep } from "medusa/types/global";
import getTotalCartPrice from "medusa/lib/util/get-total-cart-price";
import { formatAmount } from "medusa/lib/util/prices";
import DiscountCode from "medusa/modules/checkout/components/discount-code";

const CheckoutSummary = ({cart}:{cart:CartWithCheckoutStep}) => {

    
  return <Card sx={{
    p: 3
  }}>
     
      <ListItem mb={1} title="Subtotal" color="#424242" value={getTotalCartPrice({amount:cart.subtotal, region:cart.region, includeTaxes:false})} />
      <ListItem mb={1} title="Shipping"  value={formatAmount({amount:cart.shipping_total, region:cart.region, includeTaxes:false })}/>
      <ListItem mb={1} title="Tax"  value={formatAmount({amount:cart.tax_total, region:cart.region, includeTaxes:false })} />
      <ListItem mb={1} title="Discount" color="success.dark" value={formatAmount({amount:cart.discount_total, region:cart.region, includeTaxes:false})}/>

      <Divider sx={{
      my: 2
    }} />

      <Paragraph fontSize={25} fontWeight={600} lineHeight={1}>
        {getTotalCartPrice({amount:cart.total, region:cart.region, includeTaxes:false})}
      </Paragraph>

      <Stack spacing={2} mt={3}>
        {/* <TextField placeholder="Voucher" variant="outlined" size="small" fullWidth />
        <Button variant="outlined" color="primary" fullWidth>
          Apply Voucher
        </Button> */}
        <DiscountCode cart={cart}/>
      </Stack>
    </Card>;
};

export default CheckoutSummary;