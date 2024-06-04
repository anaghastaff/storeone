
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
import type { ProductVariant, Region } from "@medusajs/medusa";
// import { getRegion } from "medusa/lib/data";
// import { retrievePricedProductById, getProductsList } from "medusa/lib/data";

// import { medusaClient } from "medusa/lib/config";

// import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";

//  async function ProductWithContext({region, cart}){
//  const {products, count} = await medusaClient.products.list({
//   expand: "categories",
//   region_id:region.id,
//   cart_id:cart?.id,
//   })
//   .then(({ products, limit, offset, count }) => {
//    return {products, count}
// })

// return {products, count}
// }



const FurnitureShopPageView = async ({
  
   region,
   pricedProducts,
   cart
 
}:{
  region:Region,
  pricedProducts,
  cart:CartWithCheckoutStep
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
       <Section1 mainCarouselData={mainCarouselData} /> 
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
         <Section4 cart={cart}  products={pricedProducts} region={region} heading="All Products" description="Summer Collection"/>
        
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