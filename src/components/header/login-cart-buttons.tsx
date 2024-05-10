import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENT

import PersonOutline from "@mui/icons-material/PersonOutline"; // GLOBAL CUSTOM COMPONENT

import { FlexBox } from "components/flex-box"; // CUSTOM ICON COMPONENT

import ShoppingBagOutlined from "icons/ShoppingBagOutlined"; // GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; // ==============================================================
import { CartWithCheckoutStep } from "medusa/types/global";

// ==============================================================
const LoginCartButtons = ({ 
  toggleDialog,
  toggleSidenav,
  cart
}:{
  toggleDialog:()=>void,
  toggleSidenav:()=>void,
  cart?:CartWithCheckoutStep

}) => {
  // const {
  //   state
  // } = useCart();
  
  
  return <FlexBox gap={1.5} alignItems="center">
      <Box component={IconButton} p={1.25} bgcolor="grey.200" onClick={toggleDialog}>
        <PersonOutline />
      </Box>

      <Badge badgeContent={cart ? cart?.items?.length : null} color="primary">
        <Box p={1.25} bgcolor="grey.200" component={IconButton} onClick={toggleSidenav}>
          <ShoppingBagOutlined />
        </Box>
      </Badge>
    </FlexBox>;
};

export default LoginCartButtons;