'use client'
import Chip from "@mui/material/Chip";
import {styled} from "@mui/material/styles"; // STYLED COMPONENT

const StyledChip = styled(Chip)(({
  theme
}) => ({
  zIndex: 1,
  top: "5px",
  left: "0",
  paddingLeft: 0,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "12px",
  position: "absolute",
  color: theme.palette.common.white,
  background: theme.palette.info.main
})); // ==============================================================

// ==============================================================
const DiscountChip = ({
  discount = 0,
  ...props
}) => {
  return discount > 0 ? <StyledChip size="small" label={`upto ${discount}% off`} {...props} /> : null;
};

export default DiscountChip;