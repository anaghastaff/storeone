import { GroceryThreePageView } from "pages-sections/grocery-3/page-view"; // API FUNCTIONS

import api from "utils/__api__/grocery-3";
export const metadata = {
  title: "Grocery 3 - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function GroceryThree() {
  const offerCards = await api.getOfferCards();
  const allProducts = await api.getAllProducts();
  const mainCarouselData = await api.getMainCarousel();
  const topSailedProducts = await api.getTopSailedProducts();
  return <GroceryThreePageView offerCards={offerCards} allProducts={allProducts} mainCarouselData={mainCarouselData} topSailedProducts={topSailedProducts} />;
}