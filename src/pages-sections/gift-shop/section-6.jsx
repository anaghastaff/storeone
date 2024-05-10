"use client";

import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { SectionCreator } from "components/section-header";
import { ProductCard6 } from "components/product-cards/product-card-6"; // COMMON CAROUSEL STYLES

import { CAROUSEL_ARROW_STYLE } from "./styles"; // CUSTOM DATA MODEL

// =========================================================
const Section6 = ({
  products
}) => {
  const responsive = [{
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 500,
    settings: {
      slidesToShow: 1
    }
  }];
  return <SectionCreator title="Top Sale Items" seeMoreLink="#">
      <Carousel slidesToShow={4} responsive={responsive} arrowStyles={CAROUSEL_ARROW_STYLE}>
        {products.map(item => <Box pb={2} key={item.id}>
            <ProductCard6 id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} images={item.images} discount={item.discount} thumbnail={item.thumbnail} sx={{
          "& #imgBox": {
            backgroundColor: "primary.200"
          }
        }} />
          </Box>)}
      </Carousel>
    </SectionCreator>;
};

export default Section6;