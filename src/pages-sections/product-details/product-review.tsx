"use client";


import ProductComment from "./product-comment";

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { H2 } from "components/Typography";
import { FlexBox } from "components/flex-box";
import SubmitProductReview from "./submit-review";

export interface Review {
  product_id: string;
  title: string;
  user_name: string;
  rating: number;
  content: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse {
  status: string;
  data: Review[];
  message: string;
}


const ProductReview = ({ product, response }: { product: PricedProduct, response:ApiResponse }) => {
  
  return (
    <FlexBox flexDirection="column">
       <FlexBox flexDirection="column" marginBottom="1rem">    

     <SubmitProductReview productId={product.id}>
      Write a Review
     </SubmitProductReview>
     </FlexBox>
      {response ? (
        response?.data?.map((item: Review) => (
          <ProductComment {...item} key={item.id} />
        ))
      ) : (
        <H2 fontWeight="600" mx={3} mb={2.5}>
          There are no reviews for this product
        </H2>
      )}
     
    </FlexBox>
  );
};

export default ProductReview;
