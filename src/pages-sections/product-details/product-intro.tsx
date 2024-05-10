import Link from "next/link";
import { useState } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button"; // MUI ICON COMPONENTS
import filter_by_handle from "lib/filter-by-handle";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM HOOK
import { useProducts } from "medusa-react";
import FetchProducts from "app/api/fetchProducts";
import { useFetchData } from "lib/useEffect";
import Skeleton from "@mui/material/Skeleton";
import { ColorBox } from "components/product-cards/product-card-7/styles";
import Stack from "@mui/material/Stack";

// import useCart from "hooks/useCart"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H1, H2, H3, H6 } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // DUMMY DATA

import productVariants from "data/product-variants"; // CUSTOM DATA MODEL
import UniqueOptions from "lib/uniqueOptionSetter";
import ProductActions from "medusa/modules/products/components/product-actions";
import { getProductPrice } from "medusa/lib/util/get-product-price";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import type { Region } from "@medusajs/medusa";
import type { CartWithCheckoutStep } from "medusa/types/global";
import  CircularProgress  from "@mui/material/CircularProgress";
import ImageGalleryArea from "./image-gallery";
// ================================================================

type ProductIntroProps = {
  product:PricedProduct,
  region:Region,
  cart: CartWithCheckoutStep

}

const ProductIntro:React.FC<ProductIntroProps> = ({ product, region, cart }) => {
 
 

  const { id, title, images, handle, thumbnail, options, variants } = product || {};

  const {cheapestPrice} = getProductPrice({
    product:product,
   region,
  });
   
  

  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">


        {/* IMAGE GALLERY AREA */}
        <Grid item md={6} xs={12} alignItems="center">
       
          <ImageGalleryArea product={product} />
        </Grid>

        {/* PRODUCT INFO AREA */}
        <Grid item md={6} xs={12} alignItems="center">
          {/* PRODUCT NAME */}
          <H1 mb={1}>{title}</H1>

          {/* PRODUCT BRAND */}
          <FlexBox alignItems="center" mb={1} columnGap={2}>
            <Box>
              {product.length === 0 ? (
                <Skeleton variant="text" width="100%" />
              ) : (
                product[0]?.tags[0].value
              )}
            </Box>
            <H6>{title}</H6>
          </FlexBox>

          {/* PRODUCT RATING */}
          <FlexBox alignItems="center" gap={1} mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Rating color="warn" value={4} readOnly />
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>

          {/* PRICE & STOCK */}
          {/* <Box pt={1} mb={3}>
           
          </Box> */}
          <div style={{display:'flex', flexDirection:'column', gap:"14px", width:'100%', backgroundColor:'#fafafa'}}>
        <ProductActions product={product} region={region} cart={cart}/>
        </div>

          {/* ADD TO CART BUTTON */}
          {/* {!cartItem?.qty ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCartAmountChange(1)}
              sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40,
              }}
            >
              Add to Cart
            </Button>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <Button
                size="small"
                sx={{
                  p: 1,
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </Button>

              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <Button
                size="small"
                sx={{
                  p: 1,
                }}
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize="small" />
              </Button>
            </FlexBox>
          )} */}

          {/* SHOP NAME */}
          <FlexBox alignItems="center" gap={1} mb={2}>
            <div>Sold By:</div>
            <Link href="/shops/scarlett-beauty">
              <H6>Medusa</H6>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
