import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import BazaarCard from "components/BazaarCard";
import { FlexBetween, FlexBox } from "components/flex-box";
export const NavbarRoot = styled(BazaarCard, {
  shouldForwardProp: prop => prop !== "fixed" && prop !== "sidebar"
})(({
  fixed,
  theme,
  sidebar
}) => ({
  height: "100%",
  boxShadow: "none",
  borderRadius: "8px",
  position: "relative",
  overflow: fixed ? "auto" : "unset",
  "& .linkList": {
    padding: "8px 20px",
    transition: "all 0.2s"
  },
  ...(sidebar === "style2" && {
    // height: "100%",
    paddingBottom: 10,
    backgroundColor: theme.palette.primary[50]
  })
}));
export const StyledList = styled(FlexBox)(({
  theme
}) => ({
  transition: "all 0.2s",
  padding: "4px 20px",
  alignItems: "center",
  "& .listCircle": {
    background: theme.palette.grey[600]
  },
  "&:hover": {
    "& .listCircle": {
      background: theme.palette.primary[300]
    }
  }
}));
export const BorderBox = styled(FlexBetween, {
  shouldForwardProp: prop => prop !== "line"
})(({
  theme,
  line
}) => ({
  marginTop: 5,
  marginBottom: 15,
  "& span": {
    width: "100%"
  },
  ...(line === "dash" && {
    borderBottom: "2px",
    borderStyle: "none none dashed none",
    borderColor: theme.palette.primary.main,
    "& span": {
      display: "none"
    }
  })
}));
export const ColorBorder = styled(Span, {
  shouldForwardProp: prop => prop !== "grey"
})(({
  grey,
  theme
}) => ({
  borderRadius: "2px 0 0 2px",
  height: grey ? "2px" : "3px",
  background: grey ? theme.palette.grey[400] : theme.palette.primary[200]
}));
export const Circle = styled("span")({
  width: "4px",
  height: "4px",
  marginLeft: "2rem",
  marginRight: "8px",
  borderRadius: "3px"
});