
import { ProductDetailsPageView } from "pages-sections/product-details/page-view"; // API FUNCTIONS

import { getFrequentlyBought, getRelatedProducts } from "utils/__api__/related-products";
import FetchProducts from "app/api/fetchProducts";
import { getRegion, retrievePricedProductById, getProductByHandle } from "medusa/lib/data";

import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";


export const metadata = {
  title: "Product Details - Furniture", 
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};


export default async function ProductDetails({
  params
}) {
 
  const countryCode = params.countryCode;
  const handle = params.slug;
  const region = await getRegion(countryCode)
  const cart = await fetchCart();

  
  if (!region){
    return null
  }

  if(!handle) return null;
  const {product} = await getProductByHandle(handle)

  const pricedProduct = await retrievePricedProductById({
        id:product.id,
        regionId:region.id
      })
     
      if(!pricedProduct) return null;
 
  try {
    const relatedProducts = await getRelatedProducts();
    const frequentlyBought = await getFrequentlyBought();
    return (
      <ProductDetailsPageView
        relatedProducts={relatedProducts}
        frequentlyBought={frequentlyBought}
        countryCode={countryCode}
        product={pricedProduct}
        region={region}
        cart={cart}
      />
    ); 
  } catch (error) {
    console.log(error);
  }
}