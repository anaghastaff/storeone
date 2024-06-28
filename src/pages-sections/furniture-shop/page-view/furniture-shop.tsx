import { Suspense } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS
import CircularProgress from "@mui/material/CircularProgress";

import { Setting } from "components/settings";
import { Newsletter } from "components/newsletter"; // LOCAL CUSTOM COMPONENTS

import Sidebar from "../sidebar";
import Section1 from "../section-1";
import Section3 from "../section-3";
import Section4 from "../section-4"; // API FUNCTIONS
import {
  mainCarouselData,
  categoryNavigation as sidebarNavList,
} from "__server__/__db__/furniture/data";
import api from "utils/__api__/furniture-shop";

import type { CartWithCheckoutStep } from "medusa/types/global";
import type { Region, Customer } from "@medusajs/medusa";
import type { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Skeleton } from "@mui/material";
import { FetchAllReviews } from "medusa/lib/util/fetch-all-reviews";
import { calculateAverageRating } from "medusa/lib/util/get-average-rating";
import Loading from "./loading";

const FurnitureShopPageView = async ({ 
  region,
  cart,
  customer,
  count,
  sortBy,
  page,
  countryCode,
  products,
  limit,
}: {
  region: Region;
  cart: CartWithCheckoutStep;
  customer?: Omit<Customer, "password-hash"> | null;
  count?: number;
  sortBy?: SortOptions;
  page?: string;
  countryCode: string;
  limit: number;
  products: PricedProduct[];
}) => {
  const { allReviews } = await FetchAllReviews();
  const ratings = await calculateAverageRating({ allReviews });
  const pageNumber = page ? parseInt(page) : 1;

  return (
    <Container maxWidth={false} disableGutters component="div">
      {/* HERO SECTION */}
      
        <Section1 mainCarouselData={mainCarouselData} customer={customer} />
      
      <Container>
        {/* LEFT SIDEBAR & OFFER BANNERS AREA */}
        <Sidebar
          limit={limit}
          navList={sidebarNavList}
          products={products}
          region={region}
        />

        <Stack spacing={6} my={6}>
          {/* TOP NEW PRODUCTS AREA  */}
           <Section3
            ratings={ratings}
            heading="Top New Product"
            cart={cart}
            products={products}
            region={region}
            description="New products launched this month"
          />

          {/* TOP SELLING PRODUCT AREA */}
          <Section3
            ratings={ratings}
            heading="Top Selling Product"
            cart={cart}
            products={products}
            region={region}
            description="Top selling products of this month"
          />

          {/* ALL PRODUCTS AREA */}
         
            {/* <Suspense fallback={<Loading/>}>
            <Section4
              products={products}
              ratings={ratings}
              sortBy={sortBy}
              countryCode={countryCode}
              page={pageNumber}
              count={count}
              cart={cart}
              region={region}
              heading="All Products"
              description="Premium Collection"
            />
            </Suspense> */}
         
        </Stack>
      </Container>

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter image="/assets/images/newsletter/bg-3.png" />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </Container>
  );
};

export default FurnitureShopPageView;
