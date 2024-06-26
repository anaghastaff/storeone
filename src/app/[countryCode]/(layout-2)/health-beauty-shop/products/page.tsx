import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Container } from "@mui/material";
import { medusaClient } from "medusa/lib/config";
import {
  getProductByHandle,
  getRegion,
  retrievePricedProductById,
} from "medusa/lib/data";
import { FetchAllReviews } from "medusa/lib/util/fetch-all-reviews";
import { calculateAverageRating } from "medusa/lib/util/get-average-rating";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import type { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products";
import Section4 from "pages-sections/furniture-shop/section-4";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "All Products",
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
    slug: string;
  };
};

const product_limit = parseInt(process.env.PRODUCT_LIMIT)

// async function ProductWithContext({ region }) {
//   const { products, count } = await medusaClient.products
//     .list({
//       expand: "categories",
//       region_id: region.id,
//       limit:product_limit,
//     })
//     .then(({ products, limit, offset, count }) => {
//       return { products, count };
//     });

//   return { products, count };
// }

//  MAIN FUNCTION

export default async function AllProducts({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams;
  const region = await getRegion(params.countryCode);
  if (!region) {
    return null;
  }
  const cart = await fetchCart();
  const { allReviews } = await FetchAllReviews();
  const ratings = await calculateAverageRating({ allReviews });
  // const { products, count } = await ProductWithContext({ region });
  // const pricedProducts = await Promise.all(
  //   products.map(async (product) => {
  //     if (!product.id) return null;
  //     const data: PricedProduct = await retrievePricedProductById({
  //       id: product.id,
  //       regionId: region.id,
  //     });
  //     return data;
  //   })
  // );
  const pageNumber = page ? parseInt(page) : 1;
  return (
    <Container>
      <Suspense fallback={<Loading pagename="products" />}>
        <Section4
          countryCode={params.countryCode}
          cart={cart}
          // products={pricedProducts}
          region={region}
          heading="All Products"
          description="Summer Collection"
          page={pageNumber}
          // count={count}
          sortBy={sortBy}
          ratings={ratings}
        />
      </Suspense>
    </Container>
  );
}
