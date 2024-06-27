import { Fragment, Suspense, useCallback } from "react";
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
import type { Customer, Region } from "@medusajs/medusa";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import type { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products";
import Loading from "app/loading";

// ===============================================
type Props = {
  region: Region;
  cart: CartWithCheckoutStep;
  customer?: Omit<Customer, "password-hash"> | null;
  count?: number;
  sortBy?: SortOptions;
  page?: string;
  countryCode: string;
  limit: number;
  products: PricedProduct[];
  serviceList: any;
  allProducts: any;
  navigationList: any;
  topNewProducts: any;
  mainCarouselData: any;
};

const HealthBeautyPageView = (props) => {
  // SIDE NAVBAR COMPONENT
  const {
    region,
    cart,
    customer,
    count,
    sortBy,
    page,
    countryCode,
    products,
    limit,
    ratings,
  } = props;

  const SideNav = () => (
    <HealthBeautySideNav navigation={props.navigationList} />
  );

  return (
    <Fragment>
      <Container maxWidth="xl" disableGutters component="div">
        {/* TOP HERO CAROUSEL AREA */}
        {/* <Box id="healthBeautySection1" mb={2}>
          <Section1 carouselData={props.mainCarouselData} />
        </Box> */}
        <Container disableGutters component="div">
          {/* <SideNavContainer
            navFixedComponentID="healthBeautySection1"
            navigationList={props.navigationList}
            products={products}
            ratings={ratings}
            cart={cart}
            region={region}            
          /> */}

          <Stack spacing={6}>
            {/* BANNER AREA */}
            <Section2 />

            {/* TOP NEW PRODUCTS AREA */}
            <Suspense fallback={<Loading />}>
              <Section3
                products={products}
                ratings={ratings}
                cart={cart}
                region={region}
              />
            </Suspense>
            {/* ALL PRODUCTS AREA */}
            <Suspense fallback={<Loading />}>
              <Section4
                products={products}
                ratings={ratings}
                cart={cart}
                region={region}
              />
           </Suspense>

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
          bgcolor="theme.palette.secondary.main"
        />
      </Container>
    </Fragment>
  );
};

export default HealthBeautyPageView;
