"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
import { H2, H3 } from "components/Typography";
import WhiteButton from "components/WhiteButton"; // STYLED COMPONENTS

const ContentBox = styled("div")({
  top: 30,
  left: 0,
  right: 0,
  textAlign: "center",
  position: "absolute"
});
const Category2Wrapper = styled("div")({
  width: "100%",
  height: "50%",
  position: "relative"
});
const Category2ButtonWrapper = styled("div")({
  left: 0,
  right: 0,
  bottom: 30,
  textAlign: "center",
  position: "absolute"
});

const Section4 = () => {
  return <Container sx={{
    mt: 8
  }}>
      <H2 textAlign="center" mb={4}>
        Top Categories
      </H2>

      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Box width="100%" height="100%" position="relative">
            <LazyImage width={580} height={580} alt="category" src="/assets/images/categories/1.jpg" />

            <ContentBox>
              <H2 fontSize={24}>PADDED CLOTHES</H2>
              <H3 fontSize={22} fontWeight={400}>
                Collection
              </H3>
            </ContentBox>

            <FlexBox gap={2} left={0} right={0} bottom={30} position="absolute" justifyContent="center">
              <WhiteButton size="large">Women&#39;s</WhiteButton>

              <WhiteButton size="large">Men&#39;s</WhiteButton>
            </FlexBox>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <Stack spacing={3}>
            <SingleCategory url="#" buttonText="Women's T-Shirt" img="/assets/images/categories/2.jpg" />

            <SingleCategory url="#" buttonText="Men's T-Shirt" img="/assets/images/categories/3.jpg" />
          </Stack>
        </Grid>
      </Grid>
    </Container>;
}; // ============================================================================


// ============================================================================
function SingleCategory({
  img,
  url,
  buttonText
}) {
  return <Category2Wrapper>
      <LazyImage width={580} height={280} alt="category" src={img} />

      <Category2ButtonWrapper>
        <WhiteButton size="large">{buttonText}</WhiteButton>
      </Category2ButtonWrapper>
    </Category2Wrapper>;
}

export default Section4;