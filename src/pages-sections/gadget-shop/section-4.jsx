"use client";

import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { SectionCreator } from "components/section-header";
import { ProductCard2 } from "components/product-cards/product-card-2"; // CUSTOM DATA MODEL

// =============================================
const Section4 = ({
  mostViewedList
}) => {
  const responsive = [{
    breakpoint: 950,
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
  return <SectionCreator title="Most Viewed">
      <Box mt={-0.5} mb={-0.5}>
        <Carousel slidesToShow={4} responsive={responsive} arrowStyles={{
        color: "dark.main",
        backgroundColor: "white"
      }}>
          {mostViewedList.map((item, ind) => <Box py={0.5} key={ind}>
              <ProductCard2 slug={item.slug} title={item.title} price={item.price} off={item.discount} rating={item.rating} imgUrl={item.thumbnail} />
            </Box>)}
        </Carousel>
      </Box>
    </SectionCreator>;
};

export default Section4;