"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack"; // GLOBAL CUSTOM COMPONENTS

import { Setting } from "components/settings";
import { Footer2 } from "components/footer";
import { Newsletter } from "components/newsletter";
import { SideNavbar } from "components/page-sidenav";
import { SideNavContainer } from "components/side-nav";
import { MobileNavigationBar2 } from "components/mobile-navigation"; // Local CUSTOM COMPONENTS

import Section1 from "../section-1";
import Section2 from "../section-2";
import AllProducts from "../all-products";
import DiscountSection from "../discount";
import ProductCarousel from "../product-carousel"; // CUSTOM DATA MODELS

// =====================================================
const GroceryOnePageView = props => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterProducts, setFilterProducts] = useState([]); // FETCH PRODUCTS BASED ON THE SELECTED CATEGORY

  useEffect(() => {
    axios.get("/api/grocery-1/category-based-products", {
      params: {
        category: selectedCategory
      }
    }).then(({
      data
    }) => setFilterProducts(data));
  }, [selectedCategory]); // HANDLE CHANGE CATEGORY

  const handleSelectCategory = category => setSelectedCategory(category); // SIDE NAVBAR COMPONENT


  const SideNav = useCallback(() => <SideNavbar navList={props.grocery1NavList} handleSelect={handleSelectCategory} />, [props.grocery1NavList]);
  return <Fragment>
      {
      /* TOP HERO AREA */
    }
      <Section1 />

      {
      /* SERVICE AREA */
    }
      <Section2 id="grocery1Services" services={props.serviceList} />

      {
      /* SIDEBAR WITH OTHER CONTENTS */
    }
      <SideNavContainer navFixedComponentID="grocery1Services" SideNav={SideNav}>
        <Stack spacing={6}>
          {selectedCategory ? // FILTERED PRODUCT LIST
        <AllProducts products={filterProducts} title={selectedCategory} /> : <Fragment>
              {
            /* POPULAR PRODUCTS AREA */
          }
              <ProductCarousel title="Popular Products" products={props.popularProducts} />

              {
            /* TRENDING PRODUCTS AREA */
          }
              <ProductCarousel title="Trending Products" products={props.trendingProducts} />

              {
            /* ALL PRODUCTS AREA */
          }
              <AllProducts products={props.products} />
            </Fragment>}

          {
          /* DISCOUNT BANNER AREA */
        }
          <DiscountSection />

          {
          /* FOOTER AREA */
        }
          <Footer2 />
        </Stack>
      </SideNavContainer>

      {
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter image="/assets/images/newsletter/bg-2.png" />

      {
      /* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */
    }
      <Setting />

      {
      /* MOBILE NAVIGATION WITH SIDE NAVBAR */
    }
      <MobileNavigationBar2>
        <SideNav />
      </MobileNavigationBar2>
    </Fragment>;
};

export default GroceryOnePageView;