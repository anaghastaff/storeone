import type { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { ProductDetailsPageView } from "pages-sections/product-details/page-view"; // API FUNCTIONS

import {
  getFrequentlyBought,
  getRelatedProducts,
} from "utils/__api__/related-products";
import {
  getRegion,
  retrievePricedProductById
} from "medusa/lib/data";

import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { FetchReviews } from "pages-sections/product-details/fetch-review";

type Props = {
  params: { slug: string; countryCode: string }; 
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.slug;
  const countryCode = params.countryCode;
  const region = await getRegion(countryCode);
  const pricedProduct = await retrievePricedProductById({
    id: id,
    regionId: region.id,
  });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: {
      absolute: `${pricedProduct?.title}`,
      default: "Product Details",
      template: `%s | ${pricedProduct?.title}`,
    },
    description: "some random description",
    openGraph: {
      images: [`${pricedProduct?.thumbnail}`, ...previousImages],
    },
    authors: [
      {
        name: "BSK",
        url: "https://ui-lib.com",
      },
    ],
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
  };
}

export default async function ProductDetails({ params }: Props) {
  const countryCode = params.countryCode;
  // const handle = params.slug;
  const region = await getRegion(countryCode);
  const cart = await fetchCart();

  if (!region) {
    return null;
  }

  const pricedProduct = await retrievePricedProductById({
    id: params.slug,
    regionId: region.id,
  });

  if (!pricedProduct) return null;
  const response = await FetchReviews({ id: pricedProduct.id });
  const relatedProducts = await getRelatedProducts();
  const frequentlyBought = await getFrequentlyBought();

  return (
    <Suspense fallback={<Loading pagename={`${pricedProduct.title}`} />}>
    <ProductDetailsPageView
      relatedProducts={relatedProducts}
      frequentlyBought={frequentlyBought}
      countryCode={countryCode}
      product={pricedProduct}
      region={region}
      cart={cart}
      response={response}
    />
    </Suspense>
  );
}
