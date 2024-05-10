import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard";
export const NavbarRoot = styled(BazaarCard)(({
  theme
}) => ({
  height: "100%",
  borderRadius: "8px",
  position: "relative",
  "& .linkList": {
    padding: "8px 11px",
    transition: "all 0.2s",
    background: theme.palette.primary[50],
    "&:hover": {
      color: theme.palette.primary.main,
      background: theme.palette.primary[100]
    }
  }
}));
export const StyledList = styled(FlexBox)(({
  theme
}) => ({
  transition: "all 0.2s",
  padding: "4px 11px",
  alignItems: "center",
  "& .listCircle": {
    background: theme.palette.grey[600]
  },
  "&:hover": {
    color: theme.palette.primary.main,
    background: theme.palette.primary[100],
    "& .listCircle": {
      background: theme.palette.primary.main
    }
  }
}));
export const Circle = styled("span")({
  width: "4px",
  height: "4px",
  marginLeft: "2rem",
  marginRight: "8px",
  borderRadius: "3px"
});