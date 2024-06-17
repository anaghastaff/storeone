import { notFound, redirect } from "next/navigation";
import { OrderDetailsPageView } from "pages-sections/customer-dashboard/orders/page-view"; // API FUNCTIONS
import { listCustomerOrders, getProductsList } from "medusa/lib/data";
import { medusaClient } from "medusa/lib/config";
import { getCustomer } from "medusa/lib/data";

export const metadata = {
  title: "Order Details - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};


async function ProductWithContext({regionId, cartId}){
  
    const customer = await getCustomer();
     
  
  if(!customer){
    redirect("/login");
  }
  const {products, count} = await medusaClient.products.list({
   expand: "categories",
   region_id:regionId,
   cart_id:cartId,
   })
   .then(({ products, limit, offset, count }) => {
    return {products, count}
 })
 
 return {products, count}
 }
export default async function OrderDetails({params}:{
  params:{countryCode:string, id:string}

}) {
        
        const orders= await listCustomerOrders()
      if(!orders){
        notFound()
      }
      const order = orders.find((o)=> o?.id === params.id)
      const regionId = order?.region_id;
      const cartId = order?.cart_id;
       const {products, count} = await ProductWithContext({regionId,cartId })
    return <OrderDetailsPageView order={order} products={products}/>;
  
}