"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // Local CUSTOM COMPONENT

import Card3 from "./common/card-3"; // ===================================================

// ===================================================
const Section3 = ({
  bannerData
}) => {
  const firstItem = bannerData[0];
  const secondItem = bannerData[1];
  return <Container sx={{
    mb: 8
  }}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Card3 title={firstItem.title} imgUrl={firstItem.thumbnail} body={firstItem.description} />
        </Grid>

        <Grid item md={6} xs={12}>
          <Card3 color="white" bgColor="grey.600" title={secondItem.title} body={secondItem.description} imgUrl={secondItem.thumbnail} />
        </Grid>
      </Grid>
    </Container>;
};

export default Section3;