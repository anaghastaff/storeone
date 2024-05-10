
import Container from "@mui/material/Container"; // Local CUSTOM COMPONENTS

import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
import AvailableShops from "../available-shops";
import RelatedProducts from "../related-products";
import FrequentlyBought from "../frequently-bought"; // CUSTOM DATA MODEL
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { Region } from "@medusajs/medusa";

// ==============================================================

type ProductDetailsPageViewProps = {
  relatedProducts: any,
  frequentlyBought:any,
  countryCode:string,
  product:PricedProduct,
  region:Region,
  cart: CartWithCheckoutStep

}
const ProductDetailsPageView:React.FC<ProductDetailsPageViewProps> = props => {
  
  
  return <Container sx={{
    my: 4
  }}>
  <div>{props.product.title}</div>
      {
      /* PRODUCT DETAILS INFO AREA */
    }
       <ProductIntro product={props.product} region={props.region} cart={props.cart}/> 

      {
      /* PRODUCT DESCRIPTION AND REVIEW */
    }
       <ProductTabs />

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