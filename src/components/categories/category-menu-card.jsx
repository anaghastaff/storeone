import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled"; // LOCAL CUSTOM COMPONENTS

import MegaMenu1 from "./mega-menu/mega-menu-1";
import MegaMenu2 from "./mega-menu/mega-menu-2";
import CategoryMenuItem from "./category-menu-item"; // NAVIGATION DATA

import navigation from "data/navigations"; // styled component

const Wrapper = styled(Box, {
  shouldForwardProp: prop => prop !== "position" && prop !== "open"
})(({
  theme,
  position,
  open
}) => ({
  left: 0,
  zIndex: 98,
  right: "auto",
  borderRadius: 4,
  padding: "0.5rem 0px",
  transformOrigin: "top",
  boxShadow: theme.shadows[2],
  position: position || "unset",
  transition: "all 250ms ease-in-out",
  transform: open ? "scaleY(1)" : "scaleY(0)",
  backgroundColor: theme.palette.background.paper,
  top: position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem"
})); // ===============================================================

// ===============================================================
const CategoryMenuCard = props => {
  const {
    open,
    position = "absolute"
  } = props;
  const megaMenu = {
    MegaMenu1,
    MegaMenu2
  };
  return <Wrapper open={open} position={position}>
      {navigation.map(item => {
      let MegaMenu = megaMenu[item.menuComponent];
      return <CategoryMenuItem key={item.title} href={item.href} icon={item.icon} title={item.title} caret={!!item.menuData}>
            <MegaMenu data={item.menuData || {}} />
          </CategoryMenuItem>;
    })}
    </Wrapper>;
};

export default CategoryMenuCard;