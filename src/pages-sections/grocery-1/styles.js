import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import { Paragraph } from "components/Typography";
const LEFT_IMG = "/assets/images/headers/Header BG1.png";
const RIGHT_IMG = "/assets/images/headers/Header BG2.png"; // USED IN SECTION 1

export const SectionContainer = styled("div")(({
  theme
}) => ({
  height: 650,
  padding: 20,
  width: "100%",
  paddingTop: 160,
  backgroundSize: "40%, 40%",
  backgroundColor: theme.palette.grey[100],
  backgroundPosition: "left bottom, right bottom",
  backgroundRepeat: "no-repeat, no-repeat",
  transition: "all .3s",
  backgroundImage: theme.direction === "ltr" ? `url('${LEFT_IMG}'), url('${RIGHT_IMG}')` : `url('${RIGHT_IMG}'), url('${LEFT_IMG}')`,
  "& h1": {
    fontSize: 42,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 1.3
  },
  "& .searchBox": {
    margin: "auto",
    maxWidth: "600px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: theme.shadows[2]
  },
  [theme.breakpoints.up("md")]: {
    backgroundSize: "450px, 450px"
  },
  [theme.breakpoints.down("md")]: {
    height: 550,
    paddingTop: 130,
    "& h1": {
      fontSize: 38,
      textAlign: "center"
    }
  },
  [theme.breakpoints.down("sm")]: {
    height: 480,
    paddingTop: 100,
    "& h1": {
      fontSize: 30
    },
    "& .searchBox": {
      margin: 0
    }
  }
})); // USED IN SECTION 2

export const ServiceCard = styled("div")(({
  theme
}) => ({
  gap: 16,
  display: "flex",
  flexWrap: "wrap",
  padding: "1.5rem",
  background: "#fff",
  borderRadius: "8px",
  alignItems: "center",
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column"
  }
})); // USED IN ALL PRODUCTS & CAROUSELS COMPONENT

export const SubTitle = styled(Paragraph)(({
  theme
}) => ({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.palette.grey[600]
})); // USED IN DISCOUNT COMPONENT

export const DiscountWrapper = styled(Card)(({
  theme
}) => ({
  padding: "50px",
  background: "#efefef",
  transition: "all 0.3s",
  [theme.breakpoints.down("sm")]: {
    margin: "auto",
    padding: "30px 20px",
    "& .content": {
      marginBottom: 30,
      textAlign: "center",
      "& h1": {
        fontSize: 25
      }
    }
  }
}));