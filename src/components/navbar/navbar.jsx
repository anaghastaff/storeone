import { usePathname } from "next/navigation";
import MenuItem from "@mui/material/MenuItem"; // MUI ICON COMPONENTS

import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"; // GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import { NavLink } from "components/nav-link";
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard"; // LOCAL CUSTOM COMPONENTS

import Categories from "./categories";
import { MegaMenu } from "./mega-menu";
import { CategoryBasedMenu } from "./category-based-menu"; // GLOBAL CUSTOM HOOK

import useSettings from "hooks/useSettings"; // NAVIGATION DATA LIST

import navigation from "data/navbarNavigation"; // STYLED COMPONENTS

import { ParentNav, ParentNavItem, StyledNavLink, NavBarWrapper, InnerContainer, NAV_LINK_STYLES, ChildNavListWrapper } from "./styles"; // DATA TYPES

// ==========================================================
const Navbar = ({
  border,
  elevation = 2,
  navListOpen = false,
  hideCategories = false
}) => {
  const {
    settings
  } = useSettings();
  const pathname = usePathname();

  const renderNestedNav = (list = [], isRoot = false) => {
    return list.map(nav => {
      if (isRoot) {
        // SHOW MEGA MENU
        if (nav.megaMenu) {
          return <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />;
        } // SHOW MEGA MENU WITH SUB ITEMS


        if (nav.megaMenuWithSub) {
          return <CategoryBasedMenu key={nav.title} title={nav.title} menuList={nav.child} />;
        }

        if (nav.url) {
          return <StyledNavLink href={nav.url} key={nav.title}>
              {nav.title}
            </StyledNavLink>;
        }

        if (nav.child) {
          return <FlexBox key={nav.title} alignItems="center" position="relative" flexDirection="column" sx={{
            "&:hover": {
              "& > .child-nav-item": {
                display: "block"
              }
            }
          }}>
              <FlexBox alignItems="flex-end" gap={0.3} sx={NAV_LINK_STYLES}>
                {nav.title}{" "}
                <KeyboardArrowDown sx={{
                color: "grey.500",
                fontSize: "1.1rem"
              }} />
              </FlexBox>

              <ChildNavListWrapper className="child-nav-item">
                <BazaarCard elevation={3} sx={{
                mt: 2.5,
                py: 1,
                minWidth: 200
              }}>
                  {renderNestedNav(nav.child)}
                </BazaarCard>
              </ChildNavListWrapper>
            </FlexBox>;
        }
      } else {
        if (nav.url) {
          return <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>;
        }

        if (nav.child) {
          const isActive = nav.child.flat().find(item => item.url === pathname);
          return <ParentNav key={nav.title} minWidth={230} active={isActive ? 1 : 0}>
              <MenuItem color="grey.700">
                <Span flex="1 1 0">{nav.title}</Span>

                {settings.direction === "ltr" ? <ArrowRight fontSize="small" /> : <ArrowLeft fontSize="small" />}
              </MenuItem>

              <ParentNavItem className="parent-nav-item">
                <BazaarCard sx={{
                py: "0.5rem",
                minWidth: "230px"
              }} elevation={3}>
                  {renderNestedNav(nav.child)}
                </BazaarCard>
              </ParentNavItem>
            </ParentNav>;
        }
      }
    });
  };

  const CONTENT = <FlexBox gap={4}>{renderNestedNav(navigation, true)}</FlexBox>;
  return <NavBarWrapper hoverEffect={false} elevation={elevation} border={border}>
      {hideCategories ? <InnerContainer sx={{
      justifyContent: "center"
    }}>
          {CONTENT}
        </InnerContainer> : <InnerContainer>
          {
        /* CATEGORY MEGA MENU */
      }
          <Categories open={navListOpen} />

          {
        /* HORIZONTAL MENU */
      }
          {CONTENT}
        </InnerContainer>}
    </NavBarWrapper>;
};

export default Navbar;