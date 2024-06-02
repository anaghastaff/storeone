import { Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery"; // LOGIN FORM

import { LoginPageView } from "pages-sections/sessions/page-view"; // GLOBAL CUSTOM COMPONENTS

import { MiniCart } from "components/mini-cart"; // LOGIN PAGE SECTIONS

import { Wrapper } from "pages-sections/sessions/styles";
import LogoWithTitle from "pages-sections/sessions/logo-title";
import LoginBottom from "pages-sections/sessions/login-bottom";
import SocialButtons from "pages-sections/sessions/social-buttons"; // ==============================================================
import { Box, Divider, Link, Stack } from "@mui/material";
import { signOut } from "medusa/modules/account/actions";
import { H6, Paragraph, Span } from "components/Typography";
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton';
import { SideNav } from "components/side-nav";
import LogoutButton from "./logout-button";
// ==============================================================
const DialogDrawer = (props) => {
  const {
    dialogOpen,
    sidenavOpen,
    toggleDialog,
    toggleSidenav,
    toggleLoginMenu,
    loginMenuOpen,
    cart,
    countryCode,
    customer,
  } = props;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));

 
  return (
    <Fragment>
      {customer ? (
         <SideNav
         open={loginMenuOpen}
         position="right"
         onClose={toggleLoginMenu}
         sx={{
           zIndex: 9999,
           width: isMobile ? "100%" : "330px"
         }}
       >
        <Stack
          sx={{
            p: 2,
            px:3,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 2,
            width:'100%',
          }}
        > 
        <IconButton disableRipple  sx={{borderRadius:'50%', bgcolor:'grey.300'}}
          onClick={toggleLoginMenu}
        >
          <CloseIcon color="info" fontSize="small"/>
        </IconButton>
          
          <Box>
           
             <Paragraph style={{color:'blue', fontSize:'14px', textTransform:'capitalize'}}>{customer?.first_name}</Paragraph>
            
          </Box>
          <Divider variant="fullWidth" color="grey.800" sx={{width:'100%', borderBottom:'1px solid #eee', height:'1px'}} />
         
          <Link href="/orders" variant="body1" color="secondary" underline="none">
           Recent Orders
          </Link>
          <Link href="/wish-list" variant="body1" color="secondary" underline="none">
           Create a Wishlist
          </Link>
          <Link href="/profile" variant="body1" color="secondary" underline="none">
            My Profile
          </Link>
          <Divider variant="fullWidth" color="grey.800" sx={{width:'100%', borderBottom:'1px solid #eee', height:'1px'}} />
          <LogoutButton countryCode={countryCode} />
          {/* <Link
            component="button"
            onClick={handleLogout}
            variant="body1"
            color="secondary"
            underline="none"
          >
            Logout
          </Link> */}
        </Stack>
        </SideNav>
      ) : (
        <Dialog
          scroll="body"
          open={dialogOpen}
          fullWidth={isMobile}
          onClose={toggleDialog}
          sx={{
            zIndex: 9999,
          }}
        >
          <Wrapper>
            <LogoWithTitle />
            <LoginPageView />
            <SocialButtons />
            <LoginBottom />
          </Wrapper>
        </Dialog>
      )}

      <Drawer
        open={sidenavOpen}
        anchor="right"
        onClose={toggleSidenav}
        sx={{
          zIndex: 9999,
          minWidth:isMobile ? "100%" : "500px",
          p:2
        }}
      >
        <MiniCart toggleSidenav={toggleSidenav} cart={cart} />
      </Drawer>
    </Fragment>
  );
};

export default DialogDrawer;
