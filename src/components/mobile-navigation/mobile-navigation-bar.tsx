import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery"; // CUSTOM ICON COMPONENTS

import Home from "icons/Home";
import User2 from "icons/User2";
import CategoryOutlined from "icons/CategoryOutline";
import ShoppingBagOutlined from "icons/ShoppingBagOutlined"; // GLOBAL CUSTOM HOOK
import { Avatar, Box, IconButton, Theme, Typography } from "@mui/material";


import { iconStyle, StyledNavLink, Wrapper } from "./styles";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { Customer } from "@medusajs/medusa";
import useHeader from "components/header/use-header";
import DialogDrawer from "components/header/dialog-drawer";

const MobileNavigationBar = ({
  cart,
  customer,
  countryCode,
}: {
  cart: CartWithCheckoutStep;
  customer: Omit<Customer, "password-hash"> | null;
  countryCode: string;
}) => {
  // const {
  //   state
  // } = useCart();
  
  const {
    dialogOpen,
    sidenavOpen,
    loginMenuOpen,
    searchBarOpen,
    toggleSearchBar,
    toggleDialog,
    toggleSidenav,
    toggleLoginMenu
  } = useHeader();
  const DOWN_900 = useMediaQuery((theme: Theme) => theme.breakpoints.down(900));

  if (DOWN_900) {
    return (
      <Wrapper>
        {list.map(({ Icon, href, title }) => (
          <StyledNavLink
            href={
              customer && title === "Account"
                ? `/${countryCode}/profile`
                : !customer && title === "Account"
                  ? `/${countryCode}/login`
                  : cart?.items?.length > 0 && title === "Cart"
                    ? `/${countryCode}/cart`
                    : title === "Category"
                      ? href
                      : title === "Home"
                        ? '/furniture-shop'
                        : href
            }
            key={title}
            style={{}}
            className={""}
          >
            
              <Badge badgeContent={title === 'Cart' ? cart?.items?.length  :  null} color="primary">
                <Icon fontSize="small" sx={iconStyle} />
              </Badge>
           

            {title}
          </StyledNavLink>
        ))}
        <DialogDrawer countryCode={countryCode} customer={customer} toggleLoginMenu={toggleLoginMenu} loginMenuOpen={loginMenuOpen} dialogOpen={dialogOpen} sidenavOpen={sidenavOpen} toggleDialog={toggleDialog} toggleSidenav={toggleSidenav} cart={cart}/>
      </Wrapper>
    );
  }

  return null;
};

const list = [
  {
    title: "Home",
    Icon: Home,
    href: "/",
  },
  {
    title: "Category",
    Icon: CategoryOutlined,
    href: "/",
  },
  {
    title: "Cart",
    Icon: ShoppingBagOutlined,
    href: "/cart",
  },
  {
    title: "Account",
    Icon: User2,
    href: "/profile",
  },
];
export default MobileNavigationBar;
