import type { CartWithCheckoutStep } from "medusa/types/global";
import Addresses from "./components/addresses";
import Grid from "@mui/material/Unstable_Grid2";
import ShippingOptions from "./components/shipping-options";
import { listShippingMethods } from "medusa/lib/data";
import Payment from "./components/payment";

const CheckoutForm = async ({ cart }: { cart: CartWithCheckoutStep }) => {

  const availableShippingMethods = await listShippingMethods( 
    cart.region_id
  ).then((methods) => methods?.filter((m) => !m.is_return))

  if (!availableShippingMethods) {
    return null
  }

  
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Addresses cart={cart} />
        </Grid>
        <Grid xs={12}>
          <ShippingOptions
            cart={cart}
            availableShippingMethods={availableShippingMethods}
          />
        </Grid>
        <Grid xs={12}>
          <Payment cart={cart} />
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutForm;
