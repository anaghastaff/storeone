"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import { Carousel } from "components/carousel";
import BazaarImage from "components/BazaarImage";
import { FlexRowCenter } from "components/flex-box"; // CUSTOM DATA MODEL

// ==========================================================
const Section8 = ({
  brands
}) => {
  const responsive = [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }];
  return <Container sx={{
    my: 8
  }}>
      <H3 mb={3}>Featured Brands</H3>

      <Box padding={4} bgcolor="white" sx={{
      ".slick-slide": {
        textAlign: "center"
      }
    }}>
        <Carousel slidesToShow={5} arrows={false} responsive={responsive}>
          {brands.map(({
          id,
          image
        }) => <FlexRowCenter maxWidth={110} height="100%" margin="auto" key={id}>
              <BazaarImage alt="brand" width="100%" src={image} sx={{
            filter: "grayscale(1)"
          }} />
            </FlexRowCenter>)}
        </Carousel>
      </Box>
    </Container>;
};

export default Section8;