"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENT

import BannerCard from "./banner-card"; // GLOBAL CUSTOM COMPONENTS

import { NavLink3 } from "components/nav-link";
import { H4, Paragraph, Span } from "components/Typography";

const Offers = () => {
  return <Container sx={{
    pb: 8
  }}>
      <Grid container spacing={3}>
        {
        /* NEW ARRIVALS */
      }
        <Grid item md={4} xs={12}>
          <BannerCard img="/assets/images/banners/banner-18.jpg">
            <Paragraph fontSize={13} letterSpacing={1.2}>
              NEW ARRIVALS
            </Paragraph>

            <H4 fontSize={20} lineHeight={1} my={2}>
              SKI CLOTHES SALE
              <br />
              <Span fontWeight={400} color="primary.main">
                Up to 35% Off
              </Span>
            </H4>

            <NavLink3 href="/" text="Shop Now" color="dark.main" hoverColor="dark.main" />
          </BannerCard>
        </Grid>

        {
        /* BEST SELLER */
      }
        <Grid item md={4} xs={12}>
          <BannerCard img="/assets/images/banners/banner-19.jpg">
            <Paragraph color="white" fontSize={13} letterSpacing={1.2}>
              BEST SELLER
            </Paragraph>

            <H4 color="white" fontSize={20} lineHeight={1} my={2}>
              TRENDING WOMEN
              <br />
              <Span fontWeight={400}>SUNGLASSES</Span>
            </H4>

            <NavLink3 href="/" text="Shop Now" color="white" hoverColor="white" />
          </BannerCard>
        </Grid>

        {
        /* NEW ARRIVALS */
      }
        <Grid item md={4} xs={12}>
          <BannerCard img="/assets/images/banners/banner-20.jpg">
            <Paragraph fontSize={13} letterSpacing={1.2}>
              NEW ARRIVALS
            </Paragraph>

            <H4 fontSize={20} lineHeight={1} my={2}>
              NEW LATEST BAG
              <br />
              <Span fontWeight={400}>COLLECTION</Span>
            </H4>

            <NavLink3 href="/" text="Shop Now" color="dark.main" hoverColor="dark.main" />
          </BannerCard>
        </Grid>
      </Grid>
    </Container>;
};

export default Offers;