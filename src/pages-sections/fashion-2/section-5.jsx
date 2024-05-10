"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme"; // LOCAL CUSTOM COMPONENT

import BannerCard from "./banner-card"; // GLOBAL CUSTOM COMPONENTS

import { BannerCard1 } from "components/banners";

const Section5 = () => {
  const {
    direction
  } = useTheme();
  return <Container sx={{
    mt: 8
  }}>
      <Grid container spacing={3}>
        {
        /* FOR MEN'S BANNER CARD */
      }
        <Grid item md={4} xs={12}>
          <BannerCard1 url="#" title="For Men's" subTitle="Starting At $29" img="/assets/images/banners/men's-fashion.jpg" contentPosition={direction === "rtl" ? "right" : "left"} />
        </Grid>

        {
        /* SALES BANNER CARD */
      }
        <Grid item md={4} xs={12}>
          <BannerCard url="#" text3="Sale" text2="Black Friday" text1="Up to 20% Off" img="/assets/images/banners/banner2.jpg" />
        </Grid>

        {
        /* FOR WOMEN'S BANNER CARD */
      }
        <Grid item md={4} xs={12}>
          <BannerCard1 url="#" subTitle="25% Off" title="For Women's" img="/assets/images/banners/womens-fashion.jpg" contentPosition={direction === "rtl" ? "left" : "right"} />
        </Grid>
      </Grid>
    </Container>;
};

export default Section5;