import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import Image from "components/BazaarImage";
import { H5 } from "components/Typography";
import { FlexBox } from "components/flex-box"; // LOCAL CUSTOM HOOK

import useProduct from "../use-product"; // LOCAL CUSTOM COMPONENTS

import DiscountChip from "../discount-chip";
import ProductPrice from "../product-price";
import AddToCartButton from "./add-to-cart";
import FavoriteButton from "./favorite-button"; // STYLED COMPONENT

const Wrapper = styled(Card)({
  width: "100%",
  overflow: "hidden",
  position: "relative",
  marginBottom: "1.25rem"
}); // ===========================================================

// ===========================================================
const ProductCard9 = props => {
  const {
    imgUrl,
    title,
    price,
    off,
    rating,
    id,
    slug
  } = props || {};
  const {
    cartItem,
    handleCartAmountChange,
    isFavorite,
    toggleFavorite
  } = useProduct(slug);

  const handleIncrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: (cartItem?.qty || 0) + 1
    };
    handleCartAmountChange(product);
  };

  const handleDecrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: (cartItem?.qty || 0) - 1
    };
    handleCartAmountChange(product, "remove");
  };

  return <Wrapper>
      {
      /* PRODUCT FAVORITE BUTTON */
    }
      <FavoriteButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />

      <Grid container spacing={1}>
        <Grid item sm={3} xs={12}>
          <Box position="relative">
            {
            /* DISCOUNT PERCENT CHIP IF AVAILABLE */
          }
            <DiscountChip discount={off} />

            {
            /* PRODUCT IMAGE / THUMBNAIL */
          }
            <Image src={imgUrl} alt={title} width="100%" />
          </Box>
        </Grid>

        <Grid item sm={9} xs={12}>
          <FlexBox flexDirection="column" justifyContent="center" height="100%" p={2}>
            {
            /* PRODUCT TITLE / NAME */
          }
            <Link href={`/products/${slug}`}>
              <H5 fontWeight="600" my="0.5rem">
                {title}
              </H5>
            </Link>

            {
            /* PRODUCT RATING / REVIEW  */
          }
            <Rating size="small" value={rating} color="warn" readOnly />

            {
            /* PRODUCT PRICE */
          }
            <ProductPrice price={price} discount={off} />

            {
            /* PRODUCT ADD TO CART BUTTON */
          }
            <AddToCartButton quantity={cartItem?.qty} handleDecrement={handleDecrementQuantity} handleIncrement={handleIncrementQuantity} />
          </FlexBox>
        </Grid>
      </Grid>
    </Wrapper>;
};

export default ProductCard9;