import ListItem from "@mui/material/ListItem";
import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import { NavLink } from "components/nav-link"; // STYLED COMPONENTS

export const Wrapper = styled("div")(({
  theme
}) => ({
  cursor: "pointer",
  position: "relative",
  transition: "color 150ms ease-in-out",
  ":hover": {
    color: theme.palette.primary.main,
    "& .menu-list": {
      display: "block"
    }
  }
}));
export const MenusContainer = styled(ListItem)(({
  theme
}) => ({
  zIndex: 2,
  top: "100%",
  minWidth: 1000,
  display: "none",
  position: "absolute",
  transform: `translate(-50%, 0%)`,
  [theme.breakpoints.down(1070)]: {
    minWidth: 800
  }
}));
export const MenuListItem = styled(ListItem)(({
  theme
}) => ({
  padding: ".5rem 2rem",
  ":hover": {
    backgroundColor: theme.palette.action.hover
  }
}));
export const StyledNavLink = styled(NavLink)({
  transition: "all 0.3s"
});