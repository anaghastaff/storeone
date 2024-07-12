'use client'
import Link from "next/link";
import { Fragment } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx"; // LOCAL CUSTOM HOOKS

import useHeader from "./use-header"; // GLOBAL CUSTOM COMPONENTS

import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box"; // LOCAL CUSTOM COMPONENTS

import MobileHeader from "./mobile-header";
import DialogDrawer from "./dialog-drawer";
import CategoriesMenu from "./categories-menu";
import LoginCartButtons from "./login-cart-buttons"; // STYLED COMPONENTS

import { HeaderWrapper, StyledContainer } from "./styles";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { Customer } from "@medusajs/medusa";

const Header = ({
  isFixed,
  className,
  searchInput,
  cart,
  customer,
  countryCode,
}: {
  isFixed: any;
  className?: any;
  searchInput: any;
  cart: CartWithCheckoutStep;
  customer?: Omit<Customer, "password-hash"> | null;
  countryCode?: string;
}) => {
  console.log("cart with checkout", cart?.checkout_step);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down(1150));
  const {
    dialogOpen,
    sidenavOpen,
    loginMenuOpen,
    searchBarOpen,
    toggleSearchBar,
    toggleDialog,
    toggleSidenav,
    toggleLoginMenu,
  } = useHeader();
  const CONTENT_FOR_LARGE_DEVICE = (
    <Fragment>
      {/* LEFT CONTENT - LOGO AND CATEGORY */}
      <FlexBox mr={2} minWidth="170px" alignItems="center">
        <Link href="/">
          <Image height={44} src="/assets/images/logo2.svg" alt="logo" />
        </Link>

        {/* SHOW DROP DOWN CATEGORY BUTTON WHEN HEADER FIXED */}
        {/* {isFixed ? <CategoriesMenu /> : null} */}
      </FlexBox>

      {/* SEARCH FORM */}
      <FlexBox justifyContent="center" flex="1 1 0">
        {searchInput}
      </FlexBox>

      {/* LOGIN AND CART BUTTON */}
      <LoginCartButtons
        customer={customer}
        toggleLoginMenu={toggleLoginMenu}
        toggleDialog={toggleDialog}
        toggleSidenav={toggleSidenav}
        cart={cart}
      />

      {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
      <DialogDrawer
        countryCode={countryCode}
        customer={customer}
        toggleLoginMenu={toggleLoginMenu}
        loginMenuOpen={loginMenuOpen}
        dialogOpen={dialogOpen}
        sidenavOpen={sidenavOpen}
        toggleDialog={toggleDialog}
        toggleSidenav={toggleSidenav}
        cart={cart}
      />
    </Fragment>
  );
  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
        {downMd ? (
          <MobileHeader
            countryCode={countryCode}
            searchInput={searchInput}
            cart={cart}
            customer={customer}
          />
        ) : (
          CONTENT_FOR_LARGE_DEVICE
        )}
      </StyledContainer>
    </HeaderWrapper>
  );
};

export default Header;
