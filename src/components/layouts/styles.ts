'use client'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import Container from "@mui/material/Container";
import { layoutConstant } from "utils/constants";
import { BoxProps } from "@mui/material/Box";

/** USED IN PAGE-VIEW FILE */

interface CardProps extends BoxProps { 
  imgUrl?: string
}

export const StyledContainer = styled(Container)(({ 
  theme
}) => ({
  gap: "1.75rem",
  display: "flex",
  padding: "0 !important",
  
  ".sidenav": {
    backgroundColor:'lightgreen',
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth, 
    minWidth: layoutConstant.grocerySidenavWidth,
     height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    "& .MuiPaper-root": {
      borderRadius: 0
    },
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  ".pageContent": {
    left: "unset",
    position: "relative",
    width: `calc(100% - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: 0
    }
  }
}));
/** USED IN SECTION-1 FILE */

export const Wrapper = styled("div")({
  marginBottom: 60,
  overflow: "hidden",
  ".carousel-content": {
    maxWidth: 600
  }
});
export const ContentWrapper = styled("div")(({
  theme
}) => ({
  minHeight: 650,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url('/assets/images/Furniture Shop/Furniture Shop Header.jpg')",
  [theme.breakpoints.down("md")]: {
    h1: {
      fontSize: 50
    },
    paddingInline: 16
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    h1: {
      fontSize: 40
    }
  }
}));
export const StyledButton = styled(Button)({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  padding: "8px 30px"
});
/** USED IN SECTION-2 FILE */

const BOX_STYLE = {
  height: 230,
  display: "flex",
  borderRadius: 0,
  boxShadow: "none",
  alignItems: "center"
};
export const LeftContentBox = styled(Box, {
  shouldForwardProp: props => props !== "imgUrl"
})<CardProps>(({
  theme,
  imgUrl
}) => ({ ...BOX_STYLE,
  background: theme.palette.primary[50],
  backgroundImage: `url('${imgUrl}')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundOrigin: "content-box",
  backgroundPosition: "right bottom"
}));
export const RightContentBox = styled(Box, {
  shouldForwardProp: props => props !== "imgUrl"
})<CardProps>(({
  theme,
  imgUrl
}) => ({ ...BOX_STYLE,
  display: "block",
  background: theme.palette.primary[50],
  backgroundImage: `url('${imgUrl}')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "bottom",
  backgroundOrigin: "content-box"
}));
export const CustomButton = styled(Button)({
  fontSize: 12,
  marginTop: 5,
  fontWeight: 600,
  padding: "4px 12px",
  textDecoration: "underline"
});