
import Container from "@mui/material/Container"; // Local CUSTOM COMPONENTS

import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
import AvailableShops from "../available-shops";
import RelatedProducts from "../related-products";
import FrequentlyBought from "../frequently-bought"; // CUSTOM DATA MODEL
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { Region } from "@medusajs/medusa";
import ProductDescription from "../product-description";
import {ApiResponse} from '../product-review'
// ==============================================================

type ProductDetailsPageViewProps = {
  relatedProducts: any,
  frequentlyBought:any,
  countryCode:string,
  product:PricedProduct,
  region:Region,
  cart: CartWithCheckoutStep,
  response:ApiResponse

}
const ProductDetailsPageView:React.FC<ProductDetailsPageViewProps> = props => {
  
  
  return <Container sx={{
    my: 4
  }}>
  
      {
      /* PRODUCT DETAILS INFO AREA */
    }
       <ProductIntro product={props.product} region={props.region} cart={props.cart} response={props.response}/> 

      {
      /* PRODUCT DESCRIPTION AND REVIEW */
    }
       {/* <ProductTabs /> */}
       <ProductTabs product={props.product} response={props.response}/>

      {
      /* FREQUENTLY BOUGHT PRODUCTS AREA */
    }
      {/* <FrequentlyBought products={props.frequentlyBought} /> */}

      {
      /* AVAILABLE SHOPS AREA */
    }
      {/* <AvailableShops /> */}

      {
      /* RELATED PRODUCTS AREA */
    }
      {/* <RelatedProducts products={props.relatedProducts} /> */}
    </Container>;
};

export default ProductDetailsPageView;