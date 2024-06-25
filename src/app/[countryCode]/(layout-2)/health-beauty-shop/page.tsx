import { HealthBeautyPageView } from "pages-sections/health-beauty-shop/page-view"; // API FUNCTIONS

import api from "utils/__api__/healthbeauty-shop";
export const metadata = {
  title: "Health & Beauty",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function HealthBeauty() {
  const serviceList = await api.getServices();
  const allProducts = await api.getProducts();
  const navigationList = await api.getNavigation();
  const topNewProducts = await api.getTopNewProducts();
  const mainCarouselData = await api.getMainCarousel();
  return <HealthBeautyPageView serviceList={serviceList} allProducts={allProducts} navigationList={navigationList} topNewProducts={topNewProducts} mainCarouselData={mainCarouselData} />;
}