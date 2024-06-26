"use client";

import { usePathname } from "next/navigation";
import { Fragment, useCallback, useState } from "react"; // GLOBAL CUSTOM COMPONENTS

import { Sticky } from "components/sticky";
import { Topbar } from "components/topbar";
import { Header } from "components/header";
import { Navbar } from "components/navbar";
import { SearchInput } from "components/search-box";
import Grid from "@mui/material/Unstable_Grid2";
import { SideNavContainer } from "components/side-nav";
import { categoryNavigation } from "__server__/__db__/health-beauty/data";
import { HealthBeautySideNav } from "components/page-sidenav";
import { Box, Container } from "@mui/material";
import Section1 from "pages-sections/health-beauty-shop/section-1";
import { mainCarouselData } from "__server__/__db__/health-beauty/data";
import { StyledContainer } from "components/side-nav/styles";
import {SideNavSticky} from "components/sticky";

/**
 *  USED IN:
 *  1. grocery-1, grocery-2, health-beauty-shop
 *  2. checkout-alternative
 */

const ShopLayout2 = ({ children, customer, cart, countryCode, region }) => {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []); // FOR HANDLE TOP BAR AREA

  let TOP_BAR_CONTENT = null;
  const SHOW_TOP_BAR = [
    "/grocery-2",
    "/health-beauty-shop",
    "/checkout-alternative",
  ];

  if (SHOW_TOP_BAR.includes(pathname)) {
    TOP_BAR_CONTENT = <Topbar />;
  } // FOR HANDLE NAV BAR AREA

  let NAV_BAR_CONTENT = null;
  const SHOW_NAV_BAR = ["/health-beauty-shop", "/checkout-alternative"];

  if (SHOW_NAV_BAR.includes(pathname)) {
    NAV_BAR_CONTENT = <Navbar elevation={0} customer={customer} />;
  }

  return (
    <Fragment>
      {/* TOP BAR AREA */}
      {TOP_BAR_CONTENT}

      {/* HEADER */}
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={70}>
        <Header
          cart={cart}
          customer={customer}
          countryCode={countryCode}
          isFixed={isFixed}
          searchInput={<SearchInput />}
        />
      </Sticky>

      {/* NAVIGATION BAR */}
      {NAV_BAR_CONTENT}

      {/* 
        Banner
      */}
      <Box id="healthBeautySection1" mb={2}>
        <Section1 carouselData={mainCarouselData} />
      </Box>

      {/* BODY CONTENT */}

      <StyledContainer>
        {/* LEFT SIDEBAR */}
        <div className="sidenav">
          <Box sx={{width:280}}>
        <SideNavSticky fixedOn={80} onSticky={toggleIsFixed} scrollDistance={405}>
            <HealthBeautySideNav navigation={categoryNavigation} />
         </SideNavSticky>
         </Box>
        </div>

        <div
          className="pageContent"
          //  ref={ref}
        >
          {children}
        </div>
      </StyledContainer>
    </Fragment>
  );
};

export default ShopLayout2;
