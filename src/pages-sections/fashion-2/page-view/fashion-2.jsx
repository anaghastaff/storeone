import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import { Setting } from "components/settings";
import { Newsletter } from "components/newsletter"; // LOCAL CUSTOM COMPONENTS

import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";
import Section9 from "../section-9";
import Section10 from "../section-10"; // API FUNCTIONS

import api from "utils/__api__/fashion-2";

const FashionTwoPageView = async () => {
  const blogs = await api.getBlogs();
  const brands = await api.getBrands();
  const products = await api.getProducts();
  const serviceList = await api.getServices();
  const categories = await api.getCategories();
  const saleProducts = await api.getSaleProducts();
  const latestProducts = await api.getLatestProducts();
  const popularProducts = await api.getPopularProducts();
  const featureProducts = await api.getFeatureProducts();
  const bestWeekProducts = await api.getBestWeekProducts();
  const mainCarouselData = await api.getMainCarouselData();
  return <Box bgcolor="white">
      {
      /* HERO SECTION CAROUSEL */
    }
      <Section1 carouselData={mainCarouselData} />

      {
      /* SERVICE CARDS */
    }
      <Section2 serviceList={serviceList} />

      {
      /* BEST SELLING CATEGORIES */
    }
      <Section3 categories={categories} />

      {
      /* BEST SELLING PRODUCTS */
    }
      <Section4 products={products} />

      {
      /* OFFER BANNERS */
    }
      <Section5 />

      {
      /* FEATURED PRODUCTS */
    }
      <Section6 products={featureProducts} />

      {
      /* SUMMER SALE OFFER AREA */
    }
      <Section7 />

      {
      /* BLOG LIST AREA */
    }
      <Section8 blogs={blogs} />

      {
      /* BRAND LIST CAROUSEL AREA */
    }
      <Section9 brands={brands} />

      {
      /* PRODUCT LIST COLUMN */
    }
      <Section10 saleProducts={saleProducts} latestProducts={latestProducts} popularProducts={popularProducts} bestWeekProducts={bestWeekProducts} />

      {
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter />

      {
      /* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */
    }
      <Setting />
    </Box>;
};

export default FashionTwoPageView;