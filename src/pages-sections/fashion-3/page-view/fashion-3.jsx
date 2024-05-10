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
import Section8 from "../section-8"; // API FUNCTIONS

import api from "utils/__api__/fashion-3";

const FashionThreePageView = async () => {
  const blogs = await api.getBlogs();
  const products = await api.getProducts();
  const services = await api.getServices();
  const featureProducts = await api.getFeatureProducts();
  const mainCarouselData = await api.getMainCarouselData();
  return <Box bgcolor="white" pb={8}>
      {
      /* HERO SECTION CAROUSEL AREA */
    }
      <Section1 carouselData={mainCarouselData} />

      {
      /* MEN AND WOMEN CATEGORY BANNER */
    }
      <Section2 />

      {
      /* BEST SELLING PRODUCTS */
    }
      <Section3 products={products} />

      {
      /* TOP CATEGORIES */
    }
      <Section4 />

      {
      /* OFFER BANNER */
    }
      <Section5 />

      {
      /* FEATURED PRODUCTS AREA */
    }
      <Section6 products={featureProducts} />

      {
      /* SERVICE LIST AREA */
    }
      <Section7 services={services} />

      {
      /* INSTAGRAM PHOTOS */
    }
      <Section8 blogs={blogs} />

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

export default FashionThreePageView;