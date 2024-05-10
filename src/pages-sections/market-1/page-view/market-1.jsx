import { Fragment } from "react"; // GLOBAL COMPONENTS

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
import Section10 from "../section-10";
import Section11 from "../section-11";
import Section12 from "../section-12"; // API FUNCTIONS

import api from "utils/__api__/market-1";

const MarketOnePageView = async () => {
  const carList = await api.getCarList();
  const carBrands = await api.getCarBrands();
  const moreItems = await api.getMoreItems();
  const mobileList = await api.getMobileList();
  const opticsList = await api.getOpticsList();
  const mobileShops = await api.getMobileShops();
  const opticsShops = await api.getOpticsShops();
  const serviceList = await api.getServiceList();
  const mobileBrands = await api.getMobileBrands();
  const flashDealsData = await api.getFlashDeals();
  const opticsBrands = await api.getOpticsBrands();
  const bottomCategories = await api.getCategories();
  const topCategories = await api.getTopCategories();
  const topRatedBrands = await api.getTopRatedBrand();
  const mainCarouselData = await api.getMainCarousel();
  const newArrivalsList = await api.getNewArrivalList();
  const bigDiscountList = await api.getBigDiscountList();
  const topRatedProducts = await api.getTopRatedProduct();
  return <Fragment>
      {
      /* HERO SLIDER SECTION */
    }
      <Section1 carouselData={mainCarouselData} />

      {
      /* FLASH DEALS SECTION */
    }
      <Section2 flashDeals={flashDealsData} />

      {
      /* TOP CATEGORIES */
    }
      <Section3 categoryList={topCategories} />

      {
      /* TOP RATED PRODUCTS */
    }
      <Section4 topRatedList={topRatedProducts} topRatedBrands={topRatedBrands} />

      {
      /* NEW ARRIVAL LIST */
    }
      <Section5 newArrivalsList={newArrivalsList} />

      {
      /* BIG DISCOUNTS */
    }
      <Section12 bigDiscountList={bigDiscountList} />

      {
      /* CAR LIST */
    }
      <Section6 carBrands={carBrands} carList={carList} />

      {
      /* MOBILE PHONES */
    }
      <Section7 title="Mobile Phones" shops={mobileShops} brands={mobileBrands} productList={mobileList} />

      {
      /* PROMO BANNERS */
    }
      <Section8 />

      {
      /* OPTICS / WATCH */
    }
      <Section7 title="Optics / Watch" shops={opticsShops} brands={opticsBrands} productList={opticsList} />

      {
      /* CATEGORIES */
    }
      <Section9 categories={bottomCategories} />

      {
      /* MORE FOR YOU */
    }
      <Section10 moreItems={moreItems} />

      {
      /* SERVICE CARDS */
    }
      <Section11 serviceList={serviceList} />

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

export default MarketOnePageView;