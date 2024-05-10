"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme"; // LOCAL CUSTOM COMPONENT

import BannerCard from "./banner-card"; // GLOBAL CUSTOM COMPONENTS

import { NavLink3 } from "components/nav-link";
import { Carousel } from "components/carousel";
import { H4, Paragraph } from "components/Typography";
import { CarouselCard4 } from "components/carousel-cards"; // CUSTOM DATA MODEL

import { COMMON_DOT_STYLES } from "components/carousel/styles"; // ======================================================

// ======================================================
const Section1 = ({
  carouselData
}) => {
  const {
    palette
  } = useTheme();
  return <Box pt={3}>
      <Container>
        <Grid container spacing={2}>
          {
          /* MAIN CAROUSEL AREA */
        }
          <Grid item md={9} xs={12}>
            <Carousel dots arrows={false} spaceBetween={0} slidesToShow={1} dotColor={palette.dark.main} dotStyles={COMMON_DOT_STYLES}>
              {carouselData.map((item, ind) => <CarouselCard4 key={ind} mode="light" title={item.title} bgImage={item.imgUrl} discount={item.discount} category={item.category} buttonLink={item.buttonLink} buttonText={item.buttonText} description={item.description} />)}
            </Carousel>
          </Grid>

          <Grid item md={3} xs={12}>
            <Stack height="100%" direction={{
            md: "column",
            sm: "row",
            xs: "column"
          }} spacing={2}>
              {
              /* SUMMER SALE BANNER */
            }
              <BannerCard imageFull flex={1} img="/assets/images/banners/banner-17.jpg">
                <Paragraph fontSize={13} letterSpacing={1.2}>
                  NEW ARRIVALS
                </Paragraph>

                <H4 fontSize={20} lineHeight={1.2} mb={2}>
                  SUMMER
                  <br />
                  SALE 20% OFF
                </H4>

                <NavLink3 href="/" text="Shop Now" color="dark.main" />
              </BannerCard>

              {
              /* DESKTOP & LAPTOP BANNER */
            }
              <BannerCard imageFull flex={1} img="/assets/images/banners/banner-16.jpg">
                <Paragraph fontSize={13} letterSpacing={1.2}>
                  GAMING 4K
                </Paragraph>

                <H4 fontSize={20} lineHeight={1.2} mb={2}>
                  DESKTOPS &
                  <br />
                  LAPTOPS
                </H4>

                <NavLink3 href="/" text="Shop Now" color="dark.main" />
              </BannerCard>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>;
};

export default Section1;