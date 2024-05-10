"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENTS

import Card1 from "./common/card-1";
import ProductCarousel from "./common/product-carousel"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { CarouselCard3 } from "components/carousel-cards";
import { SectionCreator } from "components/section-header"; // CUSTOM DATA MODEL

// =================================================================
const Section1 = ({
  topPickList,
  mainCarousel
}) => {
  return <Container sx={{
    pt: 6
  }}>
      <Grid container spacing={5}>
        <Grid item md={5} xs={12}>
          <Carousel slidesToShow={1} arrowStyles={{
          boxShadow: 0,
          color: "dark.main",
          background: "transparent"
        }}>
            {mainCarousel.map(product => <CarouselCard3 product={product} key={product.id} />)}
          </Carousel>
        </Grid>

        <Grid item md={7} xs={12}>
          <SectionCreator title="Top Picks">
            {
            /* TOP PICK LIST PRODUCT */
          }
            <ProductCarousel products={topPickList} />

            {
            /* MIDDLE BANNER AREA */
          }
            <Box my="3rem">
              <Card1 title="Converse Collections" body="Get the most exciting deals. Starting at $59" imgUrl="/assets/images/products/red-shoe.png" />
            </Box>

            {
            /* BOTTOM PICK LIST PRODUCT */
          }
            <ProductCarousel products={topPickList} />
          </SectionCreator>
        </Grid>
      </Grid>
    </Container>;
};

export default Section1;