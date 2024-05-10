"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENT

import ListBlock from "./list-block"; // CUSTOM DATA MODEL

// ======================================================================
const Section8 = props => {
  const {
    saleProducts,
    popularProducts,
    bestWeekProducts,
    latestProducts
  } = props;
  return <Container sx={{
    py: 10
  }}>
      <Grid container spacing={3}>
        <ListBlock title="Sale Products" products={saleProducts} />
        <ListBlock title="Latest Products" products={latestProducts} />
        <ListBlock title="Best of the Week" products={bestWeekProducts} />
        <ListBlock title="Popular Products" products={popularProducts} />
      </Grid>
    </Container>;
};

export default Section8;