import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";

// import useCart from "hooks/useCart"; // GLOBAL CUSTOM COMPONENTS

import { H1, H6, Span } from "components/Typography";
import { FlexBox } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION

import ProductActions from "medusa/modules/products/components/product-actions";
import { getProductPrice } from "medusa/lib/util/get-product-price";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import type { Region } from "@medusajs/medusa";
import type { CartWithCheckoutStep } from "medusa/types/global";
import ImageGalleryArea from "./image-gallery";
import ProductTabs from "./product-tabs";
import { useEffect } from "react";
import { ApiResponse, Review } from "./product-review";
import averageRating from "medusa/lib/average-rating";
import SubmitProductReview from "./submit-review";
import ProductActionsHealth_Beauty from "medusa/modules/products/components/product-actions-handb";
import Add from "@mui/icons-material/Add";
// ================================================================

type ProductIntroProps = {
  product: PricedProduct;
  region: Region;
  cart: CartWithCheckoutStep;
  response: ApiResponse;
  store?:string
};

const ProductIntro: React.FC<ProductIntroProps> = ({
  product,
  region,
  cart,
  response,
  store,
}) => {
  const { id, title, images, handle, thumbnail, options, variants } =
    product || {};
  const { cheapestPrice } = getProductPrice({
    product: product,
    region,
  });
  let finalRating: number;
  if (!response || !response?.data) {
    finalRating = 0;
  }
  const ratingdata = response?.data;
  const length = ratingdata?.length;
  finalRating = averageRating({ response: ratingdata });

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
          <H1>{title}</H1>

          {/* PRODUCT BRAND */}
          <FlexBox alignItems="center" mb={1} >           
            <H6 color="info.dark">{product?.subtitle ?? "Premium Collection"  }</H6>
          </FlexBox>

          {/* PRODUCT RATING */}
          <FlexBox alignItems="center" gap={1} mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Rating color="warn" size="small" value={finalRating} precision={0.1} readOnly />
            <Span lineHeight="1">from {length} user reviews</Span>
            
          </FlexBox>
          <SubmitProductReview productId={product.id} variant="text">
              Review this product
            </SubmitProductReview>
          {/* PRICE & STOCK */}
          {/* <Box pt={1} mb={3}>
           
          </Box> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "100%",
              backgroundColor: "#fafafa",
            }}
          >
            {store === "health-beauty-shop" ? 
            <ProductActionsHealth_Beauty
            product={product}
            region={region}
            cart={cart}
          >
            <Add /> Add to Cart
          </ProductActionsHealth_Beauty>
            : 
            <ProductActions product={product} region={region} cart={cart} />
            }
            
          </div>

          {/* SHOP NAME */}
          <FlexBox alignItems="center" gap={1} mb={2} mt={2}>
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
