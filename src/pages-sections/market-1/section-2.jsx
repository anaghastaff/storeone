"use client";

import Box from "@mui/material/Box"; // CUSTOM ICON COMPONENT

import Light from "icons/Light"; // CUSTOM DATA MODEL

// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { SectionCreator } from "components/section-header";
import ProductCard1 from "components/product-cards/product-card-1"; // =============================================================

// =============================================================
const Section2 = ({
  flashDeals
}) => {
  const responsive = [{
    breakpoint: 1279,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 959,
    settings: {
      slidesToShow: 3
    }
  }, {
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
  return <SectionCreator icon={<Light color="primary" />} title="Flash Deals" seeMoreLink="#">
      <Carousel responsive={responsive}>
        {flashDeals.map(item => <Box pb={0.6} key={item.id}>
            <ProductCard1 id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} discount={item.discount} />
          </Box>)}
      </Carousel>
    </SectionCreator>;
};

export default Section2;