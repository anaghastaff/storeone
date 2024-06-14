'use client'
import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { H1, Paragraph } from "components/Typography";
import { ProductCard7 } from "components/product-cards/product-card-7"; // CUSTOM DATA MODEL
import Typography from "@mui/material/Typography";
import { variantColors } from "lib/colors";
import { variantSizes } from "lib/sizes";

import { CircularProgress, Skeleton } from "@mui/material";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Product } from "@medusajs/medusa";
import type { Region } from "medusa/types/medusa";

import { getProductPrice } from "medusa/lib/util/get-product-price";
import {CartWithCheckoutStep} from "medusa/types/global"
import ProductInCarousel from "./product-in-carousal";
// import ProductInCarousel from "./product-in-carousal";

// ====================================================
const Section3 = ({
   products,
  heading,
  region,
  description,
  cart,
}:
{
  products,
  heading:string,
  region:Region,
  description:string,
  cart:CartWithCheckoutStep | null
}) => {
  const responsive = [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ];


  return (products.length === 0) ? (
    <Box sx={{ width: "100%", bgcolor:'aqua' }}>
      <Box my={2}>
        <H1 mb="4px">{heading}</H1>
        <Paragraph color="grey.600">{description}</Paragraph>
      </Box>
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={{
          bgcolor: "#E9EBFF",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="primary">
          Loading...
        </Typography>
        <CircularProgress color="success" />
      </Skeleton>
    </Box>
  ) : (
    <div>
      <Box my={2}>
        <H1 mb="4px">{heading}</H1>
        <Paragraph color="grey.600">{description}</Paragraph>
      </Box>
      <ProductInCarousel 
        products={products}     
        region={region}       
        cart={cart}        
        />

    </div>
  );
};

export default Section3;
