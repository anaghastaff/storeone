import { Fragment } from "react"; // MUI ICON COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM COMPONENT

import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography"; // STYLED COMPONENT

import { StyledButton } from "./styles"; // ==============================================================
import type { PricedVariant } from "@medusajs/medusa/dist/types/pricing";
import Button from '@mui/material/Button'
import { revalidateTag } from "next/cache";

// ==============================================================
const QuantityButtons = ({
  quantity,
  handleDecrement,
  handleIncrement,
  handleAddToCart,
  variant,
  disabled,
  inStock
}:{
    quantity:number,
    handleDecrement: (quantity: number) => void;
    handleIncrement: (quantity: number) => void;
    handleAddToCart:()=> void;
    variant: PricedVariant;
    disabled:boolean;
    inStock:boolean;
}) => {

  return  <FlexBox width="100%" alignItems="center" className="add-cart" flexDirection="row-reverse" gap="1rem" justifyContent={quantity > 0 ? "space-between" : 'flex-end' }>
     <FlexBox  alignItems="center" className="add-cart" flexDirection="row-reverse" gap="1rem" justifyContent="flex-start">
    {quantity === 0  && 
    <Button disabled={disabled} variant="contained" size="large" color="primary" onClick={handleAddToCart} data-testid="add-product-button">
    {!variant
          ? "Select variant"
          : !inStock
          ? "Out of stock"
          : "Add to cart"}
    </Button>
    
    }  

      { quantity > 0 ? <Fragment>
        <StyledButton disabled={disabled} variant="outlined" onClick={()=>handleIncrement(quantity + 1)}>
        <Add fontSize="small" />
      </StyledButton>

          <Paragraph fontWeight={600}>{1}</Paragraph> 

          <StyledButton disabled={disabled} variant="outlined" onClick={()=>handleDecrement(quantity - 1)}>
            <Remove fontSize="small" />
          </StyledButton>
        </Fragment> : null}
        </FlexBox>
        {/* {disabled ? <Paragraph fontSize="l" color="error.main">Select an option</Paragraph>: ""} */}
        {quantity > 0 ? <Paragraph fontSize="l" color="primary.dark" align="right">In cart qty - {quantity}</Paragraph>: ""}
    </FlexBox>;
      
};

export default QuantityButtons;