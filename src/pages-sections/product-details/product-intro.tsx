import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";

// import useCart from "hooks/useCart"; // GLOBAL CUSTOM COMPONENTS

import { H1, H6 } from "components/Typography";
import { FlexBox } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION

import ProductActions from "medusa/modules/products/components/product-actions";
import { getProductPrice } from "medusa/lib/util/get-product-price";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import type { Region } from "@medusajs/medusa";
import type { CartWithCheckoutStep } from "medusa/types/global";
import ImageGalleryArea from "./image-gallery";
import ProductTabs from "./product-tabs";
import { useEffect } from "react";
import {ApiResponse, Review} from './product-review'
import averageRating from "medusa/lib/average-rating";
// ================================================================

type ProductIntroProps = {
  product:PricedProduct,
  region:Region,
  cart: CartWithCheckoutStep
response:ApiResponse,
}



const ProductIntro:React.FC<ProductIntroProps> = ({ product, region, cart, response }) => {
   const { id, title, images, handle, thumbnail, options, variants } = product || {};
  const {cheapestPrice} = getProductPrice({
    product:product,
   region,
  }); 
  let finalRating:number;
  if(!response || !response?.data){
    finalRating = 0
  }
  const ratingdata = response?.data;
  finalRating = averageRating({response:ratingdata})
  

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
            <Rating color="warn" value={finalRating} precision={0.1} readOnly />
            {/* <H6 lineHeight="1">(50)</H6> */}
          </FlexBox>

          {/* PRICE & STOCK */}
          {/* <Box pt={1} mb={3}>
           
          </Box> */}
          <div style={{display:'flex', flexDirection:'column', gap:"14px", width:'100%', backgroundColor:'#fafafa'}}>
        <ProductActions product={product} region={region} cart={cart}/>
        </div>

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
