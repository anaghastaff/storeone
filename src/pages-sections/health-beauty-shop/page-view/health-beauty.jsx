"use client";

import { Fragment, useCallback } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack"; // GLOBAL CUSTOM COMPONENTS
import Container from "@mui/material/Container";

import { Setting } from "components/settings";
import { Footer3 } from "components/footer";
import { Newsletter } from "components/newsletter";
import { SideNavContainer } from "components/side-nav";
import { HealthBeautySideNav } from "components/page-sidenav";
import { MobileNavigationBar2 } from "components/mobile-navigation"; // Local CUSTOM COMPONENTS

import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5"; // CUSTOM DATA MODELS

// ===============================================
const HealthBeautyPageView = (props) => {
  // SIDE NAVBAR COMPONENT
  const SideNav = useCallback(
    () => <HealthBeautySideNav navigation={props.navigationList} />,
    [props.navigationList]
  );
  return (
    <Fragment>
      <Container maxWidth="xl" disableGutters component="div">
        {/* TOP HERO CAROUSEL AREA */}
        <Box id="healthBeautySection1" mb={2}>
            <Section1 carouselData={props.mainCarouselData} />
          </Box>
        <Container disableGutters  component="div">
          
          <SideNavContainer
            navFixedComponentID="healthBeautySection1"
            SideNav={SideNav}
          />

          <Stack spacing={6}>
            {/* BANNER AREA */}
            {/* <Section2 /> */}

            {/* TOP NEW PRODUCTS AREA */}
            <Section3 products={props.topNewProducts} />

            {/* ALL PRODUCTS AREA */}
            <Section4 products={props.allProducts} />

            {/* SERVICE LIST AREA */}
            <Section5 services={props.serviceList} />

            {/* FOOTER AREA */}
            
          </Stack>
        </Container>
        {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
        {/* <Setting /> */}

        {/* POPUP NEWSLETTER FORM */}
        <Newsletter image="/assets/images/newsletter/bg-4.png" />

        {/* SMALL DEVICE BOTTOM NAVIGATION */}
        <MobileNavigationBar2>
          <SideNav />
        </MobileNavigationBar2>
        <Footer3
              id="footer"
              sx={{
                borderRadius: "8px",
                backgroundColor: "primary.800",
              }}
            />
      </Container>
    </Fragment>
  );
};

export default HealthBeautyPageView;
