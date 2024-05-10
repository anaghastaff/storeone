import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import SearchOutlined from "@mui/icons-material/SearchOutlined"; // GLOBAL CUSTOM COMPONENT

import { FlexBox } from "components/flex-box";
export const SearchOutlinedIcon = styled(SearchOutlined)(({
  theme
}) => ({
  color: theme.palette.grey[600],
  marginRight: 6
}));
export const SearchResultCard = styled(Card)({
  zIndex: 99,
  top: "100%",
  width: "100%",
  position: "absolute",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem"
});
export const DropDownHandler = styled(FlexBox)(({
  theme
}) => ({
  whiteSpace: "pre",
  borderTopRightRadius: 300,
  borderBottomRightRadius: 300,
  borderLeft: `1px solid ${theme.palette.text.disabled}`,
  [theme.breakpoints.down("xs")]: {
    display: "none"
  }
}));