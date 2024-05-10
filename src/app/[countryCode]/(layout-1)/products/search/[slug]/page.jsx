// PAGE VIEW COMPONENT
import { ProductSearchPageView } from "pages-sections/product-details/page-view";
export const metadata = {
  title: "Product Search - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function ProductSearch({
  params
}) {
  return <ProductSearchPageView />;
}