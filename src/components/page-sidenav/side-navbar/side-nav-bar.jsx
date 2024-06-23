"use client";

import { memo } from "react";
import Box from "@mui/material/Box"; // CUSTOM ICON COMPONENTS

import appIcons from "icons"; // GLOBAL CUSTOM COMPONENTS

import Scrollbar from "components/Scrollbar";
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box"; // LOCAL CUSTOM COMPONENTS

import Accordion from "./nav-accordion";
import CategoryTitle from "./category-title"; // STYLED COMPONENTS

import { NavbarRoot } from "./styles"; // CUSTOM DATA MODEL
import Link from '@mui/material/Link'

// ==================================================================
const SideNavbar = props => {
  const {
    isFixed,
    navList,
    lineStyle = "solid",
    sidebarHeight = "auto",
    sidebarStyle = "style1",
    handleSelect = () => {}
  } = props;
  return <Scrollbar autoHide={false} sx={{ 
    maxHeight: sidebarHeight
  }}>
      <NavbarRoot fixed={isFixed} sidebar={sidebarStyle}>
        {navList.map((item, ind) => {
        return <div key={ind}>
              <CategoryTitle title={item.category} line={lineStyle} />

              {item.categoryItem.map((item, ind) => {
            const Icon = appIcons[item.icon];
            return <Box mb="2px" color="grey.700" key={ind}>
                    {item.child ? <Accordion Icon={Icon} child={item.child} title={item.title} handleSelect={handleSelect} /> : <Box key={item.title} onClick={() => handleSelect(item.title)} sx={{
                color: "grey.700",
                cursor: "pointer"
              }}>
                        <FlexBox gap={1.5} className="linkList" py={0.75}>
                          <Icon fontSize="small" />
                          <Link color="inherit" underline="hover" href={item.href} >
                          <Span fontWeight="600">{item.title}</Span>
                          </Link>
                        </FlexBox>
                      </Box>}
                  </Box>;
          })}
            </div>;
      })}
      </NavbarRoot>
    </Scrollbar>;
};

export default memo(SideNavbar);