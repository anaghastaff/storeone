import { Fragment } from "react"; // MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM COMPONENT

import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography"; // STYLED COMPONENT

import { StyledButton } from "./styles"; // ==============================================================
import type { PricedVariant } from "@medusajs/medusa/dist/types/pricing";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

// ==============================================================
const QuantityButtons = ({
  quantity,
  handleDecrement,
  handleIncrement,
  handleAddToCart,
  handleAddToCheckout,
  variant,
  disabled,
  inStock,
  isAdding,
  updating,
  reduce,
  toCheckout,
}: {
  quantity: number;
  handleDecrement: (quantity: number) => void;
  handleIncrement: (quantity: number) => void;
  handleAddToCart: () => void;
  handleAddToCheckout:() => void;
  variant: PricedVariant;
  disabled: boolean;
  inStock: boolean;
  isAdding: boolean;
  updating: boolean;
  toCheckout:boolean;
  reduce:boolean
}) => {
  return (
    <FlexBox
      width="100%"
      alignItems="center"
      className="add-cart"
      flexDirection="row-reverse"
      gap={1}
      justifyContent="flex-end"
    >
      <FlexBox
        alignItems="center"
        className="add-cart"
        flexDirection="row-reverse"
        gap={1}
        justifyContent="flex-start"
      >
        {quantity === 0 && (
          <Stack direction="row" columnGap={2}>
           


            <LoadingButton
              loading={isAdding}
              loadingPosition="center"
              disabled={disabled}
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
              data-testid="add-product-button"
              disableElevation
              disableFocusRipple
              size="small"
              sx={{
                display: "flex",
                columnGap: "0.5rem",
                minWidth: "5rem",
                minHeight: "2rem",
                borderRadius:'0'
              }}
            >
              {!variant
                ? "Select variant"
                : !inStock
                  ? "Out of stock"
                  : !isAdding && "Add to cart"}
            </LoadingButton>

             <LoadingButton
              loading={toCheckout}
              loadingPosition="center"
              disabled={disabled}
              variant="contained"
              onClick={handleAddToCheckout}
              data-testid="add-product-button"
              disableElevation
              disableFocusRipple
              size="small"
              sx={{
                display: "flex",
                columnGap: "0.5rem",
                minWidth: "5rem",
                minHeight: "2rem",
                borderRadius:'0',
                bgcolor:'#ffdf43',
                color:'black',
                '&:hover':{
                  bgcolor:'#ffd814',
                  color:'black',
                },
              }}
            >
              {!variant
                ? "Buy Now"
                : !inStock
                  ? "Out of stock"
                  : !toCheckout && "Buy Now"}
            </LoadingButton>
          </Stack>
        )}

        {quantity > 0 ? (
          <Fragment>
            <StyledButton
              loading={updating}
              disabled={disabled}
              variant="outlined"
              onClick={() => handleIncrement(quantity + 1)}
            >
              <Add fontSize="medium" />
            </StyledButton>

            <Paragraph fontWeight={600}>{1}</Paragraph>

            <StyledButton
              loading={reduce}
              disabled={disabled}
              variant="outlined"
              onClick={() => handleDecrement(quantity - 1)}
            >
              <Remove fontSize="medium" />
            </StyledButton>
          </Fragment>
        ) : null}
        {quantity > 0 && <Paragraph>Qty in Cart: {quantity}</Paragraph>}
      </FlexBox>
      {/* {disabled ? <Paragraph fontSize="l" color="error.main">Select an option</Paragraph>: ""} */}
    </FlexBox>
  );
};

export default QuantityButtons;
