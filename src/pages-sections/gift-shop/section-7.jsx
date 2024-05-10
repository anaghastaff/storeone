"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS

import { SectionCreator } from "components/section-header";
import { ProductCard6 } from "components/product-cards/product-card-6"; // CUSTOM DATA MODEL

// =========================================================
const Section7 = ({
  products
}) => {
  return <SectionCreator title="All Products" seeMoreLink="#">
      <Grid container mb={-0.5} spacing={3}>
        {products.map((item, ind) => <Grid key={ind} item md={3} sm={6} xs={12}>
            <ProductCard6 id={item.id} key={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} images={item.images} discount={item.discount} thumbnail={item.thumbnail} />
          </Grid>)}
      </Grid>

      <Box mt={6} display="flex" justifyContent="center">
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </Box>
    </SectionCreator>;
};

export default Section7;