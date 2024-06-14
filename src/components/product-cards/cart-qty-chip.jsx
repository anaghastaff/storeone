'use client'
import Chip from "@mui/material/Chip";
import {styled} from "@mui/material/styles"; // STYLED COMPONENT
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
const StyledChip = styled(Chip)(({
  theme
}) => ({
  zIndex: 1,
  top: "30px",
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

 const CartQTYChip = ({
  qty = 0,
  ...props
}) => {
  return  <StyledChip icon={<ShoppingCartOutlinedIcon />} size="small" label={`qty - ${qty}`} {...props} /> ;
};

export default CartQTYChip;