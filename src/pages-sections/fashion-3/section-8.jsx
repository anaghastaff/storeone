"use client";

import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container"; // MUI ICON COMPONENTS

import Instagram from "@mui/icons-material/Instagram"; // GLOBAL CUSTOM COMPONENTS

import { H2 } from "components/Typography";
import LazyImage from "components/LazyImage"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
const ImageWrapper = styled("div")(({
  theme
}) => ({
  cursor: "pointer",
  position: "relative",
  display: "flex",
  ":hover": {
    "::before": {
      opacity: 0.6
    },
    "& .MuiSvgIcon-root": {
      opacity: 1,
      transform: "rotate(0deg) scale(1)"
    }
  },
  "::before": {
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "all 0.3s",
    backgroundColor: theme.palette.dark.main
  }
}));
const InstagramIcon = styled(Instagram)({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  opacity: 0,
  color: "#fff",
  margin: "auto",
  position: "absolute",
  transition: "all 0.3s",
  transform: "rotate(90deg) scale(2)"
}); // ===========================================================

// ===========================================================
const Section8 = ({
  blogs
}) => {
  return <Container sx={{
    mt: 8
  }}>
      <H2 textAlign="center" mb={4}>
        Our Instagram
      </H2>

      <Grid container spacing={2}>
        {blogs.map(({
        id,
        thumbnail
      }) => <Grid item md={2} sm={4} xs={6} key={id}>
            <ImageWrapper>
              <LazyImage alt="post" width={220} height={220} src={thumbnail} />
              <InstagramIcon />
            </ImageWrapper>
          </Grid>)}
      </Grid>
    </Container>;
};

export default Section8;