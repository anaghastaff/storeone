"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // CUSTOM ICON COMPONENTS

import RankBadge from "icons/RankBadge";
import DottedStar from "icons/DottedStar"; // LOCAL CUSTOM COMPONENTS

import FeaturedProductCard from "./shared/featured-product-card";
import TopRatingProductCard from "./shared/top-rating-product-card"; // GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { SectionHeader } from "components/section-header"; // CUSTOM DATA MODELS

// =================================================================
const Section4 = ({
  topRatedBrands,
  topRatedList
}) => {
  return <Box mb={7.5}>
      <Container>
        <Grid container spacing={4}>
          {
          /* TOP RATINGS AREA */
        }
          <Grid item lg={6} xs={12}>
            <SectionHeader icon={<RankBadge />} title="Top Ratings" seeMoreLink="#" />

            <BazaarCard sx={{
            p: 2
          }}>
              <Grid container spacing={4}>
                {topRatedList.map(item => <Grid item md={3} sm={6} xs={6} key={item.title}>
                    <Link href={`/products/${item.slug}`}>
                      <TopRatingProductCard title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} reviewCount={item.reviews.length} />
                    </Link>
                  </Grid>)}
              </Grid>
            </BazaarCard>
          </Grid>

          {
          /* FEATURED BRANDS AREA */
        }
          <Grid item lg={6} xs={12}>
            <SectionHeader icon={<DottedStar />} title="Featured Brands" seeMoreLink="#" />

            <BazaarCard sx={{
            p: 2
          }}>
              <Grid container spacing={3}>
                {topRatedBrands.map(({
                id,
                name,
                image,
                slug
              }) => <Grid item sm={6} xs={12} key={id}>
                    <Link href={`/products/search/${slug}`}>
                      <FeaturedProductCard title={name} imgUrl={image} />
                    </Link>
                  </Grid>)}
              </Grid>
            </BazaarCard>
          </Grid>
        </Grid>
      </Container>
    </Box>;
};

export default Section4;