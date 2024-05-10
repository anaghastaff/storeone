import Box from "@mui/material/Box"; // CUSTOM ICON COMPONENTS

import appIcons from "icons"; // GLOBAL CUSTOM COMPONENTS

import Scrollbar from "components/Scrollbar";
import { FlexBox } from "components/flex-box";
import { NavLink } from "components/nav-link";
import { H4, Span } from "components/Typography"; // LOCAL CUSTOM COMPONENT

import NavAccordion from "./nav-accordion"; // STYLED COMPONENT

import { NavbarRoot } from "./styles"; // CUSTOM DATA MODEL

// =================================================================
const HealthBeautySideNav = ({
  navigation
}) => {
  const STYLES = {
    backgroundColor: "primary.200",
    borderRadius: "5px 5px 0px 0px"
  };
  return <Scrollbar>
      <NavbarRoot>
        <FlexBox padding="10px 18px" sx={STYLES}>
          <H4>Categories</H4>
        </FlexBox>

        {navigation.map((item, ind) => {
        const Icon = appIcons[item.icon];
        return <Box mb="2px" color="grey.700" key={ind}>
              {item.child ? <NavAccordion title={item.title} Icon={Icon} child={item.child} /> : <NavLink key={item.title} href={item.href} color="grey.700">
                  <FlexBox className="linkList" py={0.75} gap={1.5}>
                    <Icon fontSize="small" />
                    <Span fontWeight={600}>{item.title}</Span>
                  </FlexBox>
                </NavLink>}
            </Box>;
      })}
      </NavbarRoot>
    </Scrollbar>;
};

export default HealthBeautySideNav;