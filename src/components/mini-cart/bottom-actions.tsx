import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; // ==============================================================
import type { CartWithCheckoutStep } from "medusa/types/global";

// ==============================================================
const BottomActions = ({
  total,
  handleNavigate,
  cart
}:{ 
  total: string; 
  handleNavigate: (path: any) => () => void; 
  cart: CartWithCheckoutStep; 

}
) => {
  return <Box p={2.5}>
      <Button fullWidth color="primary" variant="contained" sx={{
      mb: "0.75rem",
      height: "40px"
    }} onClick={handleNavigate("/checkout?step=" + cart?.checkout_step)}>
        Checkout Now ({total})
      </Button>

      <Button fullWidth color="primary" variant="outlined" sx={{
      height: 40
    }} onClick={handleNavigate("/cart")}>
        View Cart
      </Button>
    </Box>;
};

export default BottomActions;