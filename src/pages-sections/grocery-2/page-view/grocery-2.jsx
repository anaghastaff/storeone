"use client";

import { Fragment, useCallback } from "react";
import Stack from "@mui/material/Stack"; // GLOBAL CUSTOM COMPONENTS

import { Setting } from "components/settings";
import { Footer2 } from "components/footer";
import Scrollbar from "components/Scrollbar";
import { Newsletter } from "components/newsletter";
import { SideNavContainer } from "components/side-nav";
import { GrocerySideNav } from "components/page-sidenav";
import { MobileNavigationBar2 } from "components/mobile-navigation"; // Local CUSTOM COMPONENTS

import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import ProductCarousel from "../product-carousel"; // CUSTOM DATA MODELS

// ========================================================
const GroceryTwoPageView = props => {
  // SIDE NAVBAR COMPONENT
  const SideNav = useCallback(() => <GrocerySideNav navigation={props.navigationList} />, [props.navigationList]);
  return <Fragment>
      <div id="grocerySection" />

      <SideNavContainer navFixedComponentID="grocerySection" SideNav={SideNav}>
        <Stack spacing={6}>
          {
          /* TOP HERO AREA */
        }
          <Section1 carouselData={props.mainCarouselData} />

          {
          /* SERVICE LIST AREA */
        }
          <Section2 services={props.serviceList} />

          {
          /* SHOP BY CATEGORY LIST AREA */
        }
          <Section3 categories={props.categories} />

          {
          /* FEATURED ITEMS AREA */
        }
          <ProductCarousel title="Featured Items" products={props.featuredProducts} />

          {
          /* BEST SELLER IN YOUR AREA */
        }
          <ProductCarousel title="Best Seller in Your Area" products={props.bestSellProducts} />

          {
          /* DISCOUNT BANNER AREA */
        }
          <Section4 cardList={props.discountBanners} />

          {
          /* BEST OF HOME ESSENTIALS PRODUCTS AREA  */
        }
          <ProductCarousel title="Best of Home Essentials" products={props.bestHomeProducts} />

          {
          /* SNACKS-DRINKS-DAIRY PRODUCTS AREA */
        }
          <ProductCarousel title="Snacks, Drinks, Dairy & More" products={props.dairyProducts} />

          {
          /* CLIENT TESTIMONIALS AREA */
        }
          <Section5 testimonials={props.testimonials} />

          {
          /* FOOTER AREA */
        }
          <Footer2 />
        </Stack>
      </SideNavContainer>

      {
      /* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */
    }
      <Setting />

      {
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter image="/assets/images/newsletter/bg-2.png" />

      {
      /* SMALL DEVICE BOTTOM NAVIGATION */
    }
      <MobileNavigationBar2>
        <Scrollbar>
          <SideNav />
        </Scrollbar>
      </MobileNavigationBar2>
    </Fragment>;
};

export default GroceryTwoPageView;