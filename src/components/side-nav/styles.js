'use client'
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import {styled} from "@mui/material/styles";
import { layoutConstant } from "utils/constants";
export const Wrapper = styled("div")({
  "& .handle": {
    cursor: "pointer"
  }
});
export const StyledContainer = styled(Box)(({
  theme
}) => ({
  // paddingTop: 24,
  display: "flex",
  position: "relative",
  justifyContent:'space-between',
  width:'100%',  
  ".sidenav": {       
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
     minHeight: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    "& .MuiPaper-root": {
      borderRadius: 5
    }
  },
  // ".fixed": {
  //   marginTop: 16,
  //   position: "relative",
  //   scrollBehavior: "unset",
  //   top: layoutConstant.headerHeight
  // },
  ".pageContent": {
    display:'flex',
    flexDirection:'column',
    gap:2,
    left: "unset",
    margin:"auto",
    position: "relative",
    width: `calc(100% - 1rem - ${layoutConstant.grocerySidenavWidth}px)`
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
      // left: "0px !important",
      width: "100% !important",
      marginLeft: "auto !important",
      marginRight: "auto !important"
    }
  }
}));