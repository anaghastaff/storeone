import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box"; // FOR SECTION - 2

export const ContentBox = styled(Card)({
  height: 220,
  display: "flex",
  alignItems: "center",
  "& .content": {
    width: "50%"
  }
});
export const RightContent = styled(FlexRowCenter)(({
  theme
}) => ({
  width: "50%",
  height: "100%",
  flexDirection: "column",
  borderRadius: "0px 50% 50% 0px",
  background: theme.palette.primary[200],
  "& p": {
    fontSize: 13,
    lineHeight: 1.4
  }
}));
export const LeftContent = styled(Box)(({
  theme
}) => ({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  "& img": {
    width: "90%"
  },
  [theme.breakpoints.down("sm")]: {
    "& img": {
      width: "100%"
    }
  }
}));
export const StyledButton = styled(Button)(({
  theme
}) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "12px",
  marginTop: "16px",
  padding: "4px 12px",
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary[400]
  }
})); // FOR SECTION - 3 & 4

export const SubTitle = styled(Paragraph)(({
  theme
}) => ({
  fontSize: 13,
  marginTop: -18,
  marginBottom: "20px",
  color: theme.palette.grey[600]
})); // FOR SECTION - 5

export const Container = styled("div")({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem"
});
export const StyledFlexBox = styled(FlexBox)(({
  theme
}) => ({
  borderRadius: "8px",
  padding: "1.5rem",
  flexWrap: "wrap",
  background: "#fff",
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "1rem 0.5rem",
    textAlign: "center"
  }
}));
export const IconBox = styled(FlexBox)(({
  theme
}) => ({
  padding: "15px",
  fontSize: "25px",
  borderRadius: "50%",
  marginRight: "16px",
  alignItems: "center",
  background: theme.palette.primary[50]
}));