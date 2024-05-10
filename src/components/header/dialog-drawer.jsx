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

// ==============================================================
const DialogDrawer = props => {
  const {
    dialogOpen,
    sidenavOpen,
    toggleDialog,
    toggleSidenav,
    cart
  } = props;
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("xs"));
  return <Fragment>
      <Dialog scroll="body" open={dialogOpen} fullWidth={isMobile} onClose={toggleDialog} sx={{
      zIndex: 9999
    }}>
        <Wrapper>
          <LogoWithTitle />
          <LoginPageView />
          <SocialButtons />
          <LoginBottom />
        </Wrapper>
      </Dialog>

      <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} sx={{
      zIndex: 9999
    }}>
        <MiniCart toggleSidenav={toggleSidenav} cart={cart} />
      </Drawer>
    </Fragment>;
};

export default DialogDrawer;