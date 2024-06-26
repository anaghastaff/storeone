import { HealthBeautyPageView } from "pages-sections/health-beauty-shop/page-view"; // API FUNCTIONS
import api from "utils/__api__/healthbeauty-shop";

import { getRegion } from "medusa/lib/data";
import { retrievePricedProductById, getProductsList } from "medusa/lib/data";
import { Suspense } from "react";
import { medusaClient } from "medusa/lib/config";
import Loading from "../loading";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { getCustomer } from "medusa/lib/data";
import { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { FetchAllReviews } from "medusa/lib/util/fetch-all-reviews";
import { calculateAverageRating } from "medusa/lib/util/get-average-rating";

export const metadata = {
  title: "Health & Beauty",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],

  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

type Params = {
  searchParams: {
    sortBy?: SortOptions;
    page?: string;
  };
  params: {
    countryCode: string;
  };
};
const limit = 12;
async function ProductWithContext({ region }) {
  const { products, count } = await medusaClient.products
    .list({
      expand: "categories",
      region_id: region.id,
      limit: limit,
    })
    .then(({ products, limit, offset, count }) => {
      return { products, count };
    });

  return { products, count };
}

export default async function HealthBeauty({ searchParams, params }: Params) {
  const { allReviews } = await FetchAllReviews();
  const ratings = await calculateAverageRating({ allReviews });
  const { sortBy, page } = searchParams;
  const customer = await getCustomer();
  const region = await getRegion(params.countryCode);
  if (!region) {
    return null;
  }
  const cart = await fetchCart();

  const { products, count } = await ProductWithContext({ region });
  const pricedProducts = await Promise.all(
    products.map(async (product) => {
      if (!product.id) return null;
      const data: PricedProduct = await retrievePricedProductById({
        id: product.id,
        regionId: region.id,
      });
      return data;
    })
  );

  //----------------------------------------------
  const serviceList = await api.getServices();
  const allProducts = await api.getProducts();
  const navigationList = await api.getNavigation();
  const topNewProducts = await api.getTopNewProducts();
  const mainCarouselData = await api.getMainCarousel();
  return (
    
    <HealthBeautyPageView
      serviceList={serviceList}
      allProducts={allProducts}
      navigationList={navigationList}
      topNewProducts={topNewProducts}
      mainCarouselData={mainCarouselData}
      count={count}
      region={region}
      cart={cart}
      customer={customer}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      products={pricedProducts}
      limit={limit}
      ratings={ratings}
    />
  );
}
