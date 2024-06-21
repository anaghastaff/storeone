import Link from "next/link";
import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography"; // LOCAL CUSTOM HOOK
import useProduct from "../use-product"; // LOCAL CUSTOM COMPONENTS
import ProductPrice from "../product-price";
import DiscountChip from "../discount-chip";
import ProductStatus from "./product-status";
import ProductRating from "../product-rating";
import QuantityButtons from "./quantity-buttons"; // STYLED COMPONENTS
import { Suspense } from "react";
import { useState, useEffect } from "react";
import {
  StyledCard,
  ContentWrapper,
  ColorBox,
  ImgBox,
  SizeBox,
} from "./styles"; // =======================================================
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PreviewPrice from "medusa/modules/products/product-preview-price/price";
import ProductActions from "medusa/modules/products/components/product-actions";
import CartQTYChip from "../cart-qty-chip";
import averageRating from "medusa/lib/average-rating";
import {
  Review,
  ApiResponse,
  ApiResponseWithoutData,
  type AverageRatings,
  type CartWithCheckoutStep,
} from "medusa/types/global";
import Skeleton from "@mui/material/Skeleton";
import Loading from "app/[countryCode]/(layout-1)/products/[slug]/loading";
import type { Cart, Region } from "@medusajs/medusa";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

type Props ={
  sx?:any,
    off?:string,
    status?:string | "",
    id:string,
    title:string,
    price?:string,
    imgUrl:string,
    rating?:number,
    hideRating?:boolean,    
    slug?:string,
    region?:Region,
    cart?:CartWithCheckoutStep | null,
    product:PricedProduct,
    ratings:AverageRatings,
    countryCode?:string,
}

// =======================================================
const ProductCard17 = (props:Props) => {
  const {
    sx,
    off,
    status,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,    
    slug,
    region,
    cart,
    product,
    ratings,
    
  } = props;

  const discount = 15;
 const pr = ratings.find((p) => p.id === product.id)
  
  return (
    <StyledCard sx={sx}>
      <Link href={`/products/${slug}`}>
        <ProductStatus status={status} />
        <DiscountChip
          discount={discount}
          sx={{
            borderRadius: 0,
          }}
        />
        <ImgBox
          id="imgBox"
          style={{
            height: 275,
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* PRODUCT IMAGE / THUMBNAIL */}
         
            <LazyImage
              alt={title}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={imgUrl}
              sx={{ objectFit: "contain", left: 0, top: 0, right: 0 }}
              id="productImg"
            />         
        </ImgBox>
      </Link>

      <ContentWrapper>
        <Box flex="1 1 0" width="100%">
          {/* PRODUCT TITLE / NAME */}
          <Link href={`/products/${slug}`}>
            <H3
              title={title}
              fontSize="24px"
              fontWeight="700"
              className="title"
              color="text.secondary"
            >
              {title}
            </H3>
          </Link>

          {/* PRODUCT RATING / REVIEW  */}

          <ProductRating
            showRating={hideRating}
            rating={ pr ? pr?.averageRating : 0}            
            length={pr ? pr?.count : 0}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <ProductActions
              product={product}
              region={region}
              cart={cart}
            />
          </div>
        </Box>
      </ContentWrapper>
    </StyledCard>
  );
};

export default ProductCard17;
