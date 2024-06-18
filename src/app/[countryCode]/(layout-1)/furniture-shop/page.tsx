import { Viewport } from "next";
import { FurnitureShopPageView } from "pages-sections/furniture-shop/page-view";
import { getRegion } from "medusa/lib/data";
import { retrievePricedProductById, getProductsList } from "medusa/lib/data";
import { Suspense } from "react";
import { medusaClient } from "medusa/lib/config";
import Loading from "./loading";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { getCustomer } from "medusa/lib/data";

export const metadata = {
  title: "Furniture Shop - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};


async function ProductWithContext({region, cart}){
  const {products, count} = await medusaClient.products.list({
   expand: "categories",
   region_id:region.id,
   cart_id:cart?.id,
   
   })
   .then(({ products, limit, offset, count }) => {
    return {products, count}
 })
 
 return {products, count}
 }

export default async function FurnitureShop(
  {
    params:{countryCode}
}:{
  params:{
    countryCode:string
  }
}) {
  const customer = await getCustomer()
  const region = await getRegion(countryCode);
  if (!region){
    return null
  }
  const cart = await fetchCart();
  console.log("cart type", cart?.type)
  const {products, count} = await ProductWithContext({region, cart});
  const pricedProducts = await Promise.all( products.map( async (product) => {
    if (!product.id) return null;
     const data = await retrievePricedProductById({
        id:product.id,
        regionId:region.id
      })
      return data
  }))
  
  return  <FurnitureShopPageView count={count} region={region} pricedProducts={pricedProducts} cart={cart} customer={customer}/>; 
   
  
}