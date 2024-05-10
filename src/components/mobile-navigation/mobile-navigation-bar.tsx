import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery"; // CUSTOM ICON COMPONENTS

import Home from "icons/Home";
import User2 from "icons/User2";
import CategoryOutlined from "icons/CategoryOutline";
import ShoppingBagOutlined from "icons/ShoppingBagOutlined"; // GLOBAL CUSTOM HOOK
import { Theme } from "@mui/material";
import useCart from "hooks/useCart"; // STYLED COMPONENTS

import { iconStyle, StyledNavLink, Wrapper } from "./styles";
import type { CartWithCheckoutStep } from "medusa/types/global";

const MobileNavigationBar = ({cart}:{cart:CartWithCheckoutStep}) => {
  // const {
  //   state
  // } = useCart();
  const DOWN_900 = useMediaQuery((theme:Theme) => theme.breakpoints.down(900));

  if (DOWN_900) {
    return <Wrapper>
        {list.map(({
        Icon,
        href,
        title
      }) => <StyledNavLink href={href} key={title} style={{}} className={""}>
            {title === "Cart" ? <Badge badgeContent={cart?.items?.length} color="primary">
                <Icon fontSize="small" sx={iconStyle} />
              </Badge> : <Icon sx={iconStyle} fontSize="small" />}

            {title}
          </StyledNavLink>)}
      </Wrapper>;
  }

  return null;
};

const list = [{
  title: "Home",
  Icon: Home,
  href: "/"
}, {
  title: "Category",
  Icon: CategoryOutlined,
  href: "/mobile-category-nav"
}, {
  title: "Cart",
  Icon: ShoppingBagOutlined,
  href: "/cart"
}, {
  title: "Account",
  Icon: User2,
  href: "/profile"
}];
export default MobileNavigationBar;