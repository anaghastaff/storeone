import { Viewport } from "next";
import { FurnitureShopPageView } from "pages-sections/furniture-shop/page-view";
import { getRegion } from "medusa/lib/data";
import { retrievePricedProductById, getProductsList } from "medusa/lib/data";
import { Suspense } from "react";
import { medusaClient } from "medusa/lib/config";
import Loading from "./loading";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { getCustomer } from "medusa/lib/data";
import { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

export const metadata = {
  title: "Furniture Shop - Bazaar Next.js E-commerce Template",
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
const limit = 11;
async function ProductWithContext({ region }) {
  const { products, count } = await medusaClient.products
    .list({
      expand: "categories",
      region_id: region.id,      
      limit:limit,
    })
    .then(({ products, limit, offset, count }) => {
      return { products, count };
    });

  return { products, count };
}

export default async function FurnitureShop({ searchParams, params }: Params) {
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
      const data:PricedProduct = await retrievePricedProductById({
        id: product.id,
        regionId: region.id,
      });
      return data;
    })
  );
  

  return (
    <FurnitureShopPageView
      count={count}
      region={region}
      cart={cart}
      customer={customer}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      products={pricedProducts}
      limit={limit}
    
    />
  );
}
