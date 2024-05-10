import { memo } from "react";
import Box from "@mui/material/Box"; // CUSTOM ICON COMPONENTS

import appIcons from "icons"; // GLOBAL CUSTOM COMPONENTS

import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
import { NavLink } from "components/nav-link";
// GLOBAL CUSTOM HOOK
import useScroll from "./use-scroll"; // STYLED COMPONENTS

import { StyledCard, StyledScrollbar } from "./styles"; // CUSTOM DATA MODEL

import NavAccordion from "./nav-accordion"; // ===========================================================

// ===========================================================
const GrocerySideNav = ({
  navigation
}) => {
  const {
    scrolled
  } = useScroll();
  return <StyledScrollbar scrolled={scrolled ? 1 : 0}>
      <StyledCard elevation={3}>
        {navigation.map((item, ind) => {
        const Icon = appIcons[item.icon];
        return <Box mb={1} color="grey.700" key={ind}>
              {item.child ? <NavAccordion Icon={Icon} title={item.title} child={item.child} /> : <NavLink key={item.title} href={item.href} color="grey.700">
                  <FlexBox py={0.75} gap={1.5}>
                    <Icon fontSize="small" />
                    <Span fontWeight={600}>{item.title}</Span>
                  </FlexBox>
                </NavLink>}
            </Box>;
      })}
      </StyledCard>
    </StyledScrollbar>;
};

export default memo(GrocerySideNav);