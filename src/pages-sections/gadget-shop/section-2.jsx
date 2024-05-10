"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENT

import { SectionHeader } from "components/section-header"; // Local CUSTOM COMPONENT

import Card2 from "./common/card-2"; // CUSTOM DATA MODEL

// =====================================================
const Section2 = ({
  featuredCategories
}) => {
  const firstItem = featuredCategories[0];
  const featured = featuredCategories.slice(1, featuredCategories.length);
  return <Container sx={{
    mb: 8
  }}>
      <SectionHeader title="Featured Categories" />

      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Card2 title={firstItem.name} imgUrl={firstItem.image} headingStyle={{
          pl: "1.5rem",
          pb: "1rem",
          pt: "1.5rem"
        }} />
        </Grid>

        <Grid container item md={6} xs={12} spacing={3}>
          {featured.map((category, ind) => <Grid item xs={6} key={ind}>
              <Card2 title={category.name} imgUrl={category.image} />
            </Grid>)}
        </Grid>
      </Grid>
    </Container>;
};

export default Section2;