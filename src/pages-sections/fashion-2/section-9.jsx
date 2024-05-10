"use client";

import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import BazaarImage from "components/BazaarImage";
import { FlexRowCenter } from "components/flex-box"; // CUSTOM DATA MODEL

// ======================================================================
const Section9 = ({
  brands
}) => {
  const responsive = [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 426,
    settings: {
      slidesToShow: 1
    }
  }];
  return <Container sx={{
    mt: 8
  }}>
      <Divider sx={{
      mb: 4,
      borderColor: "grey.400"
    }} />

      <Carousel autoplay arrows={false} slidesToShow={5} responsive={responsive}>
        {brands.map(item => <FlexRowCenter maxWidth={110} height="100%" margin="auto" key={item.id}>
            <BazaarImage alt="brand" width="100%" src={item.image} sx={{
          filter: "grayscale(1)"
        }} />
          </FlexRowCenter>)}
      </Carousel>

      <Divider sx={{
      mt: 4,
      borderColor: "grey.400"
    }} />
    </Container>;
};

export default Section9;