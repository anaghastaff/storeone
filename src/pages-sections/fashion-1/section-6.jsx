"use client";

import Grid from "@mui/material/Grid"; // LOCAL CUSTOM COMPONENT

import LongProductCard from "./shared/long-product-card"; // GLOBAL CUSTOM COMPONENTS

import { SectionCreator } from "components/section-header";
import { ProductCard2 } from "components/product-cards/product-card-2"; // CUSTOM DATA MODEL

// =============================================================
const Section6 = ({
  products
}) => {
  // GET THE FIRST PRODUCT
  const {
    title,
    slug,
    id,
    price,
    discount,
    rating,
    thumbnail
  } = products[0] || {}; // REMAINING TRENDING PRODUCTS

  const TRENDING_ITEMS = products.slice(1, products.length);
  return <SectionCreator title="Trending Items">
      <Grid container spacing={4}>
        <Grid item md={3} xs={12}>
          <LongProductCard id={id} slug={slug} title={title} price={price} off={discount} rating={rating} imgUrl={thumbnail} />
        </Grid>

        <Grid item container md={9} xs={12} spacing={4}>
          {TRENDING_ITEMS.map(item => <Grid item xs={6} sm={4} key={item.id}>
              <ProductCard2 slug={item.slug} title={item.title} price={item.price} off={item.discount} rating={item.rating} imgUrl={item.thumbnail} />
            </Grid>)}
        </Grid>
      </Grid>
    </SectionCreator>;
};

export default Section6;