import Link from "next/link";
import styled from "@mui/material/styles/styled";
export const StyledLink = styled(Link)(({
  theme
}) => ({
  borderRadius: 4,
  display: "block",
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100]
  }
}));
export const StyledFooter = styled("footer")(({
  theme
}) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: "4rem"
  }
}));
export const StyledRoot = styled("footer", {
  shouldForwardProp: prop => prop !== "bgcolor"
})(({
  theme,
  bgcolor
}) => ({
  color: "white",
  padding: "40px",
  background: bgcolor ? bgcolor : theme.palette.secondary.main,
  [theme.breakpoints.down("md")]: {
    marginBottom: "6rem !important"
  }
}));