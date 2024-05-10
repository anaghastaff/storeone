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

import api from "utils/__api__/fashion-1";

const FashionOnePageView = async () => {
  const hotDealList = await api.getHotDealList();
  const serviceList = await api.getServiceList();
  const flashDealsData = await api.getFlashDeals();
  const trendingItems = await api.getTrendingItems();
  const newArrivalsData = await api.getNewArrivals();
  const dealOfTheWeek = await api.getDealOfTheWeekList();
  return <Box bgcolor="white">
      {
      /* HERO SECTION AND SERVICE CARDS */
    }
      <Section1 />

      {
      /* FLASH DEALS */
    }
      <Section2 flashDeals={flashDealsData} />

      {
      /* NEW ARRIVALS */
    }
      <Section3 newArrivals={newArrivalsData} />

      {
      /* DEALS OF THE WEEK GRID CAROUSEL */
    }
      <Section4 dealOfTheWeek={dealOfTheWeek} />

      {
      /* HOT DEALS CAROUSEL */
    }
      <Section5 hotDealList={hotDealList} />

      {
      /* TRENDING ITEMS */
    }
      <Section6 products={trendingItems} />

      {
      /* SERVICE ITEMS */
    }
      <Section7 serviceList={serviceList} />

      {
      /* SUBSCRIBE NEWSLETTER */
    }
      <Section8 />

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

export default FashionOnePageView;