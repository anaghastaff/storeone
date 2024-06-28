import Divider from "@mui/material/Divider"; // MUI ICON COMPONENTS

import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"; // GLOBAL CUSTOM COMPONENT

import { Span } from "components/Typography"; // STYLED COMPONENT

import { HoverWrapper } from "./styles"; // ==============================================================
import ProductActionsHealth_Beauty from "medusa/modules/products/components/product-actions-handb";
import ProductActionsHoverButton from "medusa/modules/products/components/product-actions-hoverbutton";
import IconButton from '@mui/material/IconButton'
// ==============================================================
const HoverActions = ({
  isFavorite,
  toggleView,
  toggleFavorite,

  product,
  region,
  cart,
}) => {
  const hoverbutton = true;
  return (
    <HoverWrapper className="controller">
      <Span onClick={toggleView}>
        <RemoveRedEye />
      </Span>

      <Divider orientation="horizontal" flexItem />

      <Span onClick={toggleFavorite}>
        {isFavorite ? (
          <Favorite color="primary" fontSize="small" />
        ) : (
          <FavoriteBorder fontSize="small" color="primary" />
        )}
      </Span>

      <Divider orientation="horizontal" flexItem />

      <Span>
        <ProductActionsHoverButton
          product={product}
          region={region}
          cart={cart}         
        >
          <AddShoppingCart />
        </ProductActionsHoverButton>
        
      </Span>
    </HoverWrapper>
  );
};

export default HoverActions;
