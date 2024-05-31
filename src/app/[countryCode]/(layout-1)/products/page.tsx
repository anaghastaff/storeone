import { getRegion, retrievePricedProductById, getProductByHandle } from "medusa/lib/data";
import { medusaClient } from "medusa/lib/config";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { Container } from "@mui/material";
import Section4 from "pages-sections/furniture-shop/section-4";

export const metadata = {
  title: "Products", 
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

export default async function AllProducts(
{
   params
}:{
    params:{
        countryCode: string,
        slug: string
    }
}) { 
    const region = await getRegion(params.countryCode);
    if (!region){
      return null
    }
    const cart = await fetchCart();
  
    const {products, count} = await ProductWithContext({region, cart});
  
    const pricedProducts = await Promise.all( products.map( async (product) => {
  
      if (!product.id) return null;
  
       const data = await retrievePricedProductById({
          id:product.id,
          regionId:region.id
        })
        return data
    }))

    return (
        <Container>
        <Section4 cart={cart}  products={pricedProducts} region={region} heading="All Products" description="Summer Collection"/>
        </Container>
    ); 
  
}