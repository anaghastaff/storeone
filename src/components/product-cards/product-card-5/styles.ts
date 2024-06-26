import { Button } from "@mui/material";
import {styled, Theme} from "@mui/material/styles"; // GLOBAL CUSTOM COMPONENTS
import BazaarCard from "components/BazaarCard";
import { FlexBetween } from "components/flex-box";


interface StyledBazaarCardProps {
  hoverEffect: boolean;
  theme?: Theme;
}

export const StyledButton = styled(Button)(({
  theme

}) => ({
  padding: "4px",
  borderRadius: 0,
  transition: "all 0.3s",
  color: theme.palette.primary.main,
  "&:hover": {
    color: "#fff",
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`
  }
}));

export const StyledBazaarCard = styled(BazaarCard, {
  shouldForwardProp: prop => prop !== "hoverEffect"
})<StyledBazaarCardProps>(({
  theme 
}) => ({
  margin: "auto",
  height: "100%",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
  borderRadius: "0px 10px 10px 10px",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .controller": {
      right: 1
    }
  }
}));
export const ImageWrapper = styled("div")(({
  theme
}) => ({
  height: "100%",
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    display: "block"
  }
}));
export const ImageBox = styled("div")(({
  theme
}) => ({
  padding: 32,
  height: "100%",
  borderBottom: `1px solid ${theme.palette.grey[300]}`
}));
export const HoverWrapper = styled(FlexBetween)(({
  theme
}) => ({
  top: 0,
  bottom: 0,
  width: 25,
  right: -30,
  height: 120,
  margin: "auto",
  background: "#fff",
  overflow: "hidden",
  borderRadius: "5px",
  position: "absolute",
  flexDirection: "column",
  boxShadow: theme.shadows[2],
  transition: "right 0.3s ease-in-out",
  "& span": {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "10px 0px",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#f3f5f9"
    }
  },
  "& a": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#f3f5f9"
    }
  },
  "& svg": {
    fontSize: 18,
    color: theme.palette.grey[600]
  }
}));
export const ContentWrapper = styled("div")({
  padding: "1rem",
  display:'flex',
  flexDirection:'column',
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
});
export const ButtonBox = styled("div")(({
  theme
}) => ({
  gap: 10,
  display: "flex",
  marginTop: "15px",
  justifyContent: "space-between",
  width:'100%',
  
  "& button": {
    color: "#fff",
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary[400]
    }
  }
}));