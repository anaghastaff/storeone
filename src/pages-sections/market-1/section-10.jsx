"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { SectionHeader } from "components/section-header";
import ProductCard1 from "components/product-cards/product-card-1"; // CUSTOM DATA MODEL

// ====================================================
const Section10 = ({
  moreItems
}) => {
  return <Container sx={{
    mb: "70px"
  }}>
      <SectionHeader title="More For You" seeMoreLink="#" />

      <Grid container spacing={3}>
        {moreItems.map(item => <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
            <ProductCard1 hoverEffect id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} discount={item.discount} />
          </Grid>)}
      </Grid>
    </Container>;
};

export default Section10;