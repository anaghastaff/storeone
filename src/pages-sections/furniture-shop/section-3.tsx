import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { H1, Paragraph } from "components/Typography";
import { ProductCard7 } from "components/product-cards/product-card-7"; // CUSTOM DATA MODEL
import Typography from "@mui/material/Typography";
import { variantColors } from "lib/colors";
import { variantSizes } from "lib/sizes";

import { CircularProgress, Skeleton } from "@mui/material";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Product, Region } from "@medusajs/medusa";
import { getProductPrice } from "medusa/lib/util/get-product-price";
import {CartWithCheckoutStep, type AverageRatings} from "medusa/types/global"
import ProductInCarousel from "./product-in-carousal";
// import ProductInCarousel from "./product-in-carousal";

// ====================================================
const Section3 = ({
  products,
  heading,
  region,
  description,
  cart,
  ratings,
}:
{
  products:PricedProduct[],
  heading:string,
  region:Region,
  description:string,
  cart:CartWithCheckoutStep | null,
  ratings:AverageRatings
}) => {
  
  
  const responsive = [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
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
  
  return  (
    products && <div>
      <Box my={2}>
        <H1 mb="4px">{heading}</H1>
        <Paragraph color="grey.600">{description}</Paragraph>
      </Box>
      <ProductInCarousel 
       responsive={responsive}
        products={products}     
        region={region}       
        cart={cart}   
        ratings={ratings}     
        />
    </div>
  );
};

export default Section3;
