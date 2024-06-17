import { WishListPageView } from "pages-sections/customer-dashboard/wish-list"; // API FUNCTIONS
import { getCustomer } from "medusa/lib/data";
import { redirect } from "next/navigation";
import { getWishListProducts } from "utils/__api__/wish-list";
import NotFound from "app/not-found";
export const metadata = {
  title: "Wish List - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function WishList({
  searchParams
}) {
  const {
    products,
    totalProducts
  } = await getWishListProducts(searchParams.page);
  const customer = await getCustomer();
  if(!customer){
    redirect('/login')
  }
  return customer ? <WishListPageView products={products} totalProducts={totalProducts} /> : <NotFound />;
}