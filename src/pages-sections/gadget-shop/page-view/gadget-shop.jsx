import { Fragment } from "react"; // GLOBAL CUSTOM COMPONENTS

import { Setting } from "components/settings";
import { Newsletter } from "components/newsletter"; // LOCAL CUSTOM COMPONENTS

import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section6 from "../section-6";
import Section7 from "../section-7"; // API FUNCTIONS

import api from "utils/__api__/gadget-shop";

const GadgetShopPageView = async () => {
  const blogs = await api.getBlogLists();
  const twoBanner = await api.getTwoBanner();
  const topPickList = await api.getTopPicksList();
  const newArrivalsData = await api.getNewArrival();
  const mostViewedList = await api.getMostViewedList();
  const mainCarouselData = await api.getMainCarousel();
  const featuredCategories = await api.getFeaturedCategories();
  return <Fragment>
      {
      /* MAIN PRODUCT CAROUSEL AND TOP PICK PRODUCTS AREA */
    }
      <Section1 mainCarousel={mainCarouselData} topPickList={topPickList} />

      {
      /* FEATURED CATEGORIES AREA */
    }
      <Section2 featuredCategories={featuredCategories} />

      {
      /* DISCOUNT BANNER AREA */
    }
      <Section3 bannerData={twoBanner} />

      {
      /* MOST VIEWED PRODUCTS AREA */
    }
      <Section4 mostViewedList={mostViewedList} />

      {
      /* MAKEUP AND SUNGLASSES PRODUCT */
    }
      <Section3 bannerData={newArrivalsData} />

      {
      /* YOUTUBE BANNER AREA */
    }
      <Section6 />

      {
      /* OUR BLOG AREA */
    }
      <Section7 blogs={blogs} />

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

export default GadgetShopPageView;