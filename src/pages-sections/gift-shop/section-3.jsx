"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";
import { H3, H6, Paragraph } from "components/Typography"; // STYLED COMPONENTS

import { LeftContentBox, RightContent, RightContentBox, StyledButton } from "./styles";

const Section3 = () => {
  const {
    breakpoints
  } = useTheme();
  return <Grid container spacing={3}>
      <Grid item xs={12} sm={7} md={7}>
        <Link href="/sales-1">
          <LeftContentBox>
            <RightContent px="20px">
              <H6>Holiday’s Offer!</H6>
              <H3>Sale 50% Off</H3>
              <Paragraph sx={{
              mt: 1
            }}>Use Code : Holi50</Paragraph>

              <div>
                <StyledButton>Shop Now</StyledButton>
              </div>
            </RightContent>
          </LeftContentBox>
        </Link>
      </Grid>

      <Grid item xs={12} sm={5} md={5}>
        <Link href="/sales-1">
          <RightContentBox sx={{
          p: "20px"
        }}>
            <Box textAlign="center">
              <H6>Shop Online Gift Under</H6>
              <H3>$20.00</H3>
              <StyledButton>Shop Now</StyledButton>
            </Box>

            <div className="content" />
          </RightContentBox>
        </Link>
      </Grid>
    </Grid>;
};

export default Section3;