import { Fragment } from "react"; // MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM COMPONENT

import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography"; // STYLED COMPONENT

import { ButtonBox, StyledButton } from "./styles";

// ==============================================================
import type { PricedVariant } from "@medusajs/medusa/dist/types/pricing";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

// ==============================================================
const BTN_STYLE = {
  py: "3px",
  fontSize: 13,
  width: "100%",
  flexGrow:1
};

const HealthBeautyQuantityButtons = ({
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
  children,
  hoverbutton=false,
}: {
  quantity: number;
  handleDecrement: (quantity: number) => void;
  handleIncrement: (quantity: number) => void;
  handleAddToCart: () => void;
  handleAddToCheckout: () => void;
  variant: PricedVariant;
  disabled: boolean;
  inStock: boolean;
  isAdding: boolean;
  updating: boolean;
  toCheckout: boolean;
  reduce: boolean;
  children:React.ReactNode
  hoverbutton?:boolean
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
        width="100%"
       
      >
        {quantity === 0 && (
          <ButtonBox>
            {quantity === 0 && (
              <Button
              disabled={isAdding}
                variant="contained"
                onClick={handleAddToCart}
                fullWidth={true}
                sx={BTN_STYLE}
              >
               {isAdding ? <CircularProgress size={16} color="error" sx={{mx:'auto'}} /> : children}
              </Button>
            )}

            <Button
              variant="contained"
              color="primary"
              sx={{
                p: "3px 8px",
              }}
            >
              <FavoriteBorder
                sx={{
                  fontSize: 16,
                }}
              />
            </Button>
          </ButtonBox>
        )}

        {(quantity > 0 && !hoverbutton) ? (
         
           <Stack direction="row" justifyContent="space-between" gap={2} marginTop="15px">           
            
            <StyledButton
              disabled={disabled || updating || reduce}
              variant="outlined"
              onClick={() => handleIncrement(quantity + 1)}
            >
              <Add fontSize="medium" />
            </StyledButton>

            <Paragraph fontWeight={600} sx={{display:'flex', alignItems:'center'}}>{1}</Paragraph>

            <StyledButton
              disabled={disabled || reduce || updating}
              variant="outlined"
              onClick={() => handleDecrement(quantity - 1)}
            >
              <Remove fontSize="medium" />
            </StyledButton>        
         
            </Stack >
            
           
          
        ) : null}
        {quantity > 0 && (
          <Stack direction="row" gap={1} alignItems="center"  marginTop="15px">
            Qty in Cart:{" "}
            <Avatar
              sx={{ width: 24, height: 24, bgcolor: "grey", color: "white" }}
            >
              {quantity}
            </Avatar>
          </Stack>
        )}
      </FlexBox>
      {/* {disabled ? <Paragraph fontSize="l" color="error.main">Select an option</Paragraph>: ""} */}
    </FlexBox>
  );
};

export default HealthBeautyQuantityButtons;
