import { getRegion } from "lib/data";
import IndexPageView from "../../pages-sections/landing/page-view"
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { Viewport } from "next";
import {notFound}  from "next/navigation"
export const metadata = {
    title: "Bazaar - Next.js E-commerce Template",
    description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
    authors: [{
      name: "UI-LIB",
      url: "https://ui-lib.com"
    }],
   
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
  };

  export const viewport: Viewport = {
    width:"device-width",
    initialScale:1,
  }


  
  export default async function IndexPage({
    params: { countryCode },
  }: {
    params: { countryCode: string }
  }) {
   
    // const region = await getRegion(countryCode)
  
    // if (!region) {
    //   return null
    // }
    
    const cart = await fetchCart();
    console.log("cart type", cart?.type)
    if(!cart){
      notFound()
    }
    return (
      <>        
        <div className="py-12">
          <ul className="flex flex-col gap-x-6">
            <IndexPageView countryCode={countryCode} cart={cart}/>
          </ul>
        </div>
      </>
    )
  }

