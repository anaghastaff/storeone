
import Grid from "@mui/material/Grid"; // LOCAL CUSTOM COMPONENTS

import { CheckoutForm } from "../checkout-form";
import { CheckoutSummary } from "../checkout-summery";
import type { CartWithCheckoutStep } from "medusa/types/global";

const CheckoutPageView = ({cart}:{cart:CartWithCheckoutStep}) => {
  return <Grid container flexWrap="wrap-reverse" spacing={3}>
      <Grid item lg={8} md={8} xs={12}>
        <CheckoutForm cart={cart} />
      </Grid>

      <Grid item lg={4} md={4} xs={12}>
        <CheckoutSummary cart={cart}/>
      </Grid>
    </Grid>;
};

export default CheckoutPageView;