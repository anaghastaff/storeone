import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENT

import PersonOutline from "@mui/icons-material/PersonOutline"; // GLOBAL CUSTOM COMPONENT

import { FlexBox } from "components/flex-box"; // CUSTOM ICON COMPONENT

import ShoppingBagOutlined from "icons/ShoppingBagOutlined"; // GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart"; // ==============================================================
import { CartWithCheckoutStep } from "medusa/types/global";
import type { Customer } from "@medusajs/medusa";
import Avatar from "@mui/material/Avatar"
import { Typography } from "@mui/material";

// ==============================================================
const LoginCartButtons = ({ 
  toggleDialog,
  toggleSidenav,
  toggleLoginMenu,
  cart,
  customer
}:{
  toggleDialog:()=>void,
  toggleSidenav:()=>void,
  toggleLoginMenu:()=>void,
  cart?:CartWithCheckoutStep,
  customer?:Omit<Customer, 'password-hash'> | null

}) => {
  // const {
  //   state
  // } = useCart();
  
  
  return <FlexBox gap={1.5} alignItems="center">
      <Box component={IconButton} p={customer ? 0 : 1.25} bgcolor="grey.200" onClick={customer ? toggleLoginMenu : toggleDialog}>
      {customer ? <Avatar sx={{width:32, height:32, bgcolor:'forestgreen', p:1}}>
        <Typography variant="caption" color="common.white" letterSpacing="0.1em" textAlign="center" align="center">
      {customer?.first_name.charAt(0).toUpperCase()}
      {customer?.last_name.charAt(0).toUpperCase()}
        {/* {customer?.orders?.length === null && "O"} */}

        </Typography> </Avatar> : <PersonOutline /> } 
      </Box>

      <Badge badgeContent={cart ? cart?.items?.length : null} color="primary">
        <Box p={1.25} bgcolor="grey.200" component={IconButton} onClick={toggleSidenav}>
          <ShoppingBagOutlined />
        </Box>
      </Badge>
    </FlexBox>;
};

export default LoginCartButtons;