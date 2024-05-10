import { Fragment } from "react";
import Box from "@mui/material/Box"; //GLOBAL CUSTOM COMPONENTS

import { Setting } from "components/settings";
import { Newsletter } from "components/newsletter"; //LOCAL CUSTOM COMPONENTS

import Offers from "../offers";
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";
import Section9 from "../section-9"; // API FUNCTIONS

import api from "utils/__api__/market-2";

const MarketTwoPageView = async () => {
  const brands = await api.getBrands();
  const products = await api.getProducts();
  const serviceList = await api.getServices();
  const categories = await api.getCategories();
  const mainCarouselData = await api.getMainCarouselData();
  const menFashionProducts = await api.getMenFashionProducts();
  const electronicsProducts = await api.getElectronicsProducts();
  const womenFashionProducts = await api.getWomenFashionProducts();
  return <Fragment>
      <Box bgcolor="#F6F6F6">
        {
        /* HERO SLIDER AND GRID */
      }
        <Section1 carouselData={mainCarouselData} />

        {
        /* SERVICE CARDS */
      }
        <Section2 serviceList={serviceList} />

        {
        /* CATEGORIES AND ANIMATED OFFER BANNER */
      }
        <Section3 categories={categories} />

        {
        /* DEALS OF THE DAY AND OFFER BANNERS */
      }
        <Section4 products={products} />

        {
        /* TOP OFFER BANNERS */
      }
        <Offers />

        {
        /* PRODUCT ROW WITH ELECTRONICS CATEGORY LIST */
      }
        <Section5 data={electronicsProducts} />

        {
        /* OFFER BANNER */
      }
        <Section6 />

        {
        /* PRODUCT ROW WITH MEN'S FASHION CATEGORY LIST */
      }
        <Section5 data={menFashionProducts} />

        {
        /* OFFER BANNER */
      }
        <Section7 />

        {
        /* PRODUCT ROW WITH WOMEN'S FASHION CATEGORY LIST */
      }
        <Section5 data={womenFashionProducts} />

        {
        /*  FEATURED BRANDS */
      }
        <Section8 brands={brands} />

        {
        /* SELECTED PRODUCTS */
      }
        <Section9 />
      </Box>

      {
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter />

      {
      /* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */
    }
      <Setting />
    </Fragment>;
};

export default MarketTwoPageView;