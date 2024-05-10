import { GroceryTwoPageView } from "pages-sections/grocery-2/page-view"; // API FUNCTIONS

import api from "utils/__api__/grocery-2";
export const metadata = {
  title: "Grocery 2 - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function GroceryTwo() {
  const serviceList = await api.getServices();
  const categories = await api.getCategories();
  const testimonials = await api.getTestimonials();
  const dairyProducts = await api.getDairyProducts();
  const navigationList = await api.getNavigationList();
  const mainCarouselData = await api.getMainCarousel();
  const featuredProducts = await api.getFeaturedProducts();
  const bestHomeProducts = await api.getBestHomeProducts();
  const bestSellProducts = await api.getBestSellProducts();
  const discountBanners = await api.getDiscountBannerList();
  return <GroceryTwoPageView categories={categories} serviceList={serviceList} testimonials={testimonials} dairyProducts={dairyProducts} navigationList={navigationList} discountBanners={discountBanners} bestHomeProducts={bestHomeProducts} bestSellProducts={bestSellProducts} mainCarouselData={mainCarouselData} featuredProducts={featuredProducts} />;
}