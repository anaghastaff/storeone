"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { H2 } from "components/Typography";
import { ProductCard8 } from "components/product-cards/product-card-8"; // CUSTOM DATA MODEL

// ===================================================
const Section6 = ({
  products
}) => {
  return <Container sx={{
    mt: 8
  }}>
      <H2 textAlign="center" mb={4}>
        Featured Products
      </H2>

      <Grid container spacing={3}>
        {products.slice(0, 4).map(product => <Grid item md={3} sm={6} xs={12} key={product.id}>
            <ProductCard8 product={product} />
          </Grid>)}
      </Grid>
    </Container>;
};

export default Section6;