"use client";

import styled from "@mui/material/styles/styled";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { H4, Span } from "components/Typography";
import { FlexRowCenter } from "components/flex-box"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
const StyledFlexBox = styled("div")(({
  theme
}) => ({
  display: "grid",
  padding: "2rem 0",
  gridTemplateColumns: "repeat(4, 1fr)",
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  [theme.breakpoints.down("md")]: {
    gap: 30,
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  [theme.breakpoints.down("sm")]: {
    gap: 30,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    gridTemplateColumns: "1fr"
  }
})); // ==============================================================

// ==============================================================
const Section7 = ({
  services
}) => {
  return <Container sx={{
    mt: 8
  }}>
      <StyledFlexBox>
        {services.map((item, ind) => <FlexRowCenter flexDirection="column" key={ind}>
            <H4 lineHeight={1.3}>{item.title}</H4>
            <Span color="grey.600">{item.description}</Span>
          </FlexRowCenter>)}
      </StyledFlexBox>
    </Container>;
};

export default Section7;