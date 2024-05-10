"use client";

import Drawer from "@mui/material/Drawer";
import styled from "@mui/material/styles/styled";
import { NavLink } from "components/nav-link";
import { layoutConstant } from "utils/constants"; // STYLED COMPONENTS

interface StyledNavLinkProps {
  href: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  key?: React.Key;
}

const Wrapper = styled("div")(({
  theme
}) => ({
  left: 0,
  right: 0,
  bottom: 0,
  display: "none",
  position: "fixed",
  justifyContent: "space-around",
  zIndex: theme.zIndex.drawer + 1,
  height: layoutConstant.mobileNavHeight,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 1px 4px 3px rgba(0, 0, 0, 0.1)",
  "@media only screen and (max-width: 900px)": {
    display: "flex",
    width: "100vw"
  }
}));
const StyledNavLink = styled(NavLink)<StyledNavLinkProps>({
  flex: "1 1 0",
  display: "flex",
  fontSize: "13px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});
const StyledBox = styled("div")(({
  theme
}) => ({
  flex: "1 1 0",
  display: "flex",
  fontSize: "13px",
  cursor: "pointer",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: `${theme.palette.primary.main} !important`
  }
}));
const StyledDrawer = styled(Drawer)(({
  theme
}) => ({
  width: 250,
  zIndex: 1501,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 250,
    boxSizing: "border-box",
    boxShadow: theme.shadows[2]
  }
})); // common icon component style

const iconStyle = {
  display: "flex",
  marginBottom: "4px",
  alignItems: "center",
  justifyContent: "center"
};
export { Wrapper, StyledBox, StyledNavLink, StyledDrawer, iconStyle };