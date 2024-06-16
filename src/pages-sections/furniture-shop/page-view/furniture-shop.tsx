
import { Fragment } from "react";
import { Suspense } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS
import CircularProgress from "@mui/material/CircularProgress"

import { Setting } from "components/settings";
import { Newsletter } from "components/newsletter"; // LOCAL CUSTOM COMPONENTS

import Sidebar from "../sidebar";
import Section1 from "../section-1";
import Section3 from "../section-3";
import Section4 from "../section-4"; // API FUNCTIONS

import api from "utils/__api__/furniture-shop";
import Testing from "../testing";
import type { PricedProduct, PricedVariant } from "@medusajs/medusa/dist/types/pricing";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { ProductVariant, Region, Customer } from "@medusajs/medusa";

const FurnitureShopPageView = async ({
  
   region,
   pricedProducts,
   cart,
   customer,
   count,
 
}:{
  region:Region,
  pricedProducts,
  cart:CartWithCheckoutStep,
  customer?:Omit<Customer, 'password-hash'> | null,
  count?:number,
}) => {
  const topNewProducts = await api.getTopNewProducts();
  const mainCarouselData = await api.getMainCarouselData();
  const furnitureProducts = await api.getFurnitureProducts();
  const sidebarNavList = await api.getFurnitureShopNavList();
  const topSellingProducts = await api.getTopSellingProducts();
 
  

  return <Container maxWidth={false} disableGutters component="div">
      {
      /* HERO SECTION */
    }
      <Suspense fallback={<div>
        <p>Loading...</p> <CircularProgress />
      </div>}>
       <Section1 mainCarouselData={mainCarouselData} customer={customer}/> 
       </Suspense>
      <Container>
        {
        /* LEFT SIDEBAR & OFFER BANNERS AREA */
      }
        <Sidebar navList={sidebarNavList} products={pricedProducts} region={region}/>
        
        <Stack spacing={6} my={6}>
          {
          /* TOP NEW PRODUCTS AREA */
        }
          <Section3 heading="Top New Product" cart={cart} products={pricedProducts} region={region} description="Tall blind but were, been folks not the expand" />

          {
          /* TOP SELLING PRODUCT AREA */
        }
          {/* <Section3 heading="Top Selling Product" cart={cart}  products={pricedProducts} region={region} description="Tall blind but were, been folks not the expand" /> */}

          {
          /* ALL PRODUCTS AREA */
          
        }
         <Section4 count={count} cart={cart}  products={pricedProducts} region={region} heading="All Products" description="Summer Collection"/>
        
        </Stack>
      </Container>

      { 
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter image="/assets/images/newsletter/bg-3.png" />

      {
      /* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */
    }
      <Setting />
    </Container>;
};

export default FurnitureShopPageView;