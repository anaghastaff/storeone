"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { keyframes, styled } from "@mui/material/styles"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import WhiteButton from "components/WhiteButton";
import { CategoryCard1 } from "components/category-cards";
import { H3, Paragraph, Span } from "components/Typography"; // CUSTOM DATA MODEL

// CSS ANIMATION NAME
const slideX = keyframes`
    from { left: 120% }
    to { left: -100% }
`; // STYLED COMPONENTS

const AdWrapper = styled(FlexBox)(({
  theme
}) => ({
  color: "#fff",
  marginTop: "3rem",
  overflow: "hidden",
  backgroundColor: "#434343",
  position: "relative",
  "::before": {
    inset: 5,
    zIndex: 3,
    content: "''",
    position: "absolute",
    border: "1px dashed #fff"
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  }
}));
const AdTitle1 = styled(H3)(({
  theme
}) => ({
  zIndex: 10,
  fontSize: 27,
  padding: "1.5rem",
  position: "relative",
  backgroundColor: "#e0e0e0",
  textTransform: "uppercase",
  color: theme.palette.dark.main,
  "::after": {
    top: -36,
    bottom: 0,
    zIndex: -1,
    right: -17,
    content: "''",
    position: "absolute",
    transform: "rotate(23deg)",
    border: "70px solid #e0e0e0"
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: 16,
    "::after": {
      display: "none"
    }
  }
})); // ===========================================================

// ===========================================================
const Section3 = ({
  categories
}) => {
  return <Container sx={{
    mt: 8
  }}>
      <Grid container spacing={3}>
        {
        /* CATEGORY LIST AREA */
      }
        {categories.map(item => <Grid item lg={2} md={3} sm={4} xs={6} key={item.id}>
            <CategoryCard1 image={item.image} title={item.name} />
          </Grid>)}

        {
        /* ANIMATED BANNER AREA */
      }
        <Grid item xs={12}>
          <AdWrapper alignItems="center">
            <AdTitle1>Black friday sale!</AdTitle1>

            <Paragraph fontSize={28} sx={{
            flex: 1,
            zIndex: 5,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "hidden"
          }}>
              <Span sx={{
              letterSpacing: 1.3,
              fontStyle: "italic",
              position: "relative",
              whiteSpace: "nowrap",
              textOverflow: "hidden",
              textTransform: "uppercase",
              animation: `${slideX} 30s infinite linear 1s`
            }}>
                Pay only for{" "}
                <Span fontWeight={700} textTransform="uppercase" sx={{
                textOverflow: "hidden",
                whiteSpace: "nowrap"
              }}>
                  your loving electronics
                </Span>
              </Span>
            </Paragraph>

            <Box sx={{
            padding: 3,
            flexShrink: 0,
            zIndex: 5
          }}>
              <WhiteButton>Shop Now</WhiteButton>
            </Box>
          </AdWrapper>
        </Grid>
      </Grid>
    </Container>;
};

export default Section3;