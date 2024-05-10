"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { CarouselCard4 } from "components/carousel-cards"; // CUSTOM DATA MODEL

import { COMMON_DOT_STYLES } from "components/carousel/styles"; // ======================================================

// ======================================================
const Section1 = ({
  carouselData
}) => {
  return <Box pt={3} mb={3}>
      <Container>
        <Carousel dots arrows={false} spaceBetween={0} slidesToShow={1} dotColor="white" dotStyles={COMMON_DOT_STYLES}>
          {carouselData.map((item, ind) => <CarouselCard4 key={ind} mode="dark" title={item.title} bgImage={item.imgUrl} discount={item.discount} category={item.category} buttonText={item.buttonText} buttonLink={item.buttonLink} description={item.description} />)}
        </Carousel>
      </Container>
    </Box>;
};

export default Section1;