import styled from "@mui/material/styles/styled";
import { FlexBetween } from "components/flex-box";
export const ARROW_BUTTON_STYLE = {
  backgroundColor: "white",
  color: "#2B3445"
};
/** USED IN SECTION - 5 */

export const ContentWrapper = styled("div")(({
  theme
}) => ({
  borderRadius: "8px",
  position: "relative",
  backgroundColor: "#F3F6F9",
  boxShadow: theme.shadows[1]
}));
export const BadgeBox = styled("div")(({
  theme
}) => ({
  top: 0,
  right: "3rem",
  position: "absolute",
  [theme.breakpoints.down("sm")]: {
    "&": {
      width: 85,
      right: "1rem"
    }
  }
}));
/** USED IN SECTION - 7 */

export const StyledFlexBox = styled(FlexBetween)(({
  theme
}) => ({
  flexWrap: "wrap",
  borderRadius: "8px",
  padding: "1rem 2rem",
  border: `1px solid ${theme.palette.grey[400]}`,
  [theme.breakpoints.between("sm", "lg")]: {
    "&": {
      justifyContent: "space-evenly"
    }
  },
  [theme.breakpoints.down("sm")]: {
    "&": {
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }
}));