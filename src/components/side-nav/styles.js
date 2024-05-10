import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";
import { layoutConstant } from "utils/constants";
export const Wrapper = styled("div")({
  "& .handle": {
    cursor: "pointer"
  }
});
export const StyledContainer = styled(Container)(({
  theme
}) => ({
  paddingTop: 24,
  display: "flex",
  position: "relative",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    "& .MuiPaper-root": {
      borderRadius: 5
    }
  },
  ".fixed": {
    marginTop: 16,
    position: "fixed",
    scrollBehavior: "unset",
    top: layoutConstant.headerHeight
  },
  ".pageContent": {
    left: "unset",
    marginLeft: "2rem",
    position: "relative",
    width: `calc(100% - 2rem - ${layoutConstant.grocerySidenavWidth}px)`
  },
  ".pageContentLeft": {
    left: layoutConstant.grocerySidenavWidth
  },
  "@keyframes slideDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(0)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  [theme.breakpoints.down("md")]: {
    ".sidenav": {
      display: "none"
    },
    ".pageContent": {
      left: "0px !important",
      width: "100% !important",
      marginLeft: "auto !important",
      marginRight: "auto !important"
    }
  }
}));