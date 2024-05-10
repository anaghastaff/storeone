import Button from "@mui/material/Button"; // MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM COMPONENTS

import { H5 } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; // ==============================================================

// ==============================================================
const AddToCartButton = ({
  quantity,
  handleDecrement,
  handleIncrement
}) => {
  return <FlexBox mt={1}>
      {quantity ? <FlexBetween>
          <Button color="primary" variant="outlined" sx={{
        padding: "5px"
      }} onClick={handleIncrement}>
            <Add fontSize="small" />
          </Button>

          <H5 fontWeight="600" fontSize="15px" mx={1.5}>
            {quantity}
          </H5>

          <Button color="primary" variant="outlined" sx={{
        padding: "5px"
      }} onClick={handleDecrement}>
            <Remove fontSize="small" />
          </Button>
        </FlexBetween> : <Button color="primary" variant="contained" sx={{
      height: 32
    }} onClick={handleIncrement}>
          Add To Cart
        </Button>}
    </FlexBox>;
};

export default AddToCartButton;