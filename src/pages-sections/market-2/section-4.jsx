"use client";

import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import { NavLink3 } from "components/nav-link";
import { Carousel } from "components/carousel";
import { FlexBetween } from "components/flex-box";
import { ProductCard10 } from "components/product-cards/product-card-10"; // CUSTOM DATA MODEL

// ======================================================================
const Section4 = ({
  products
}) => {
  const responsive = [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 4
    }
  }, {
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
    py: 8
  }}>
      <FlexBetween mb={3}>
        <H3>Deals Of The Day</H3>
        <NavLink3 text="More Products" href="/" hoverColor="dark.main" />
      </FlexBetween>

      <Carousel slidesToShow={5} responsive={responsive} arrowStyles={{
      backgroundColor: "dark.main"
    }}>
        {products.map(product => <ProductCard10 product={product} key={product.id} />)}
      </Carousel>
    </Container>;
};

export default Section4;