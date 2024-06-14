"use client";
import { H3 } from "components/Typography";
import { FlexBox } from "components/flex-box";
const ProductDescription = ({product}) => {
  return <div>
      <H3 mb={2}>Specification:</H3>
      <FlexBox sx={{flexDirection:'column'}}>
       <p>Brand: {product?.title}</p>  
       <p>Model: {product?.subtitle ?? "Premium Wear Collection" } </p> 
       <p>{product?.description}</p> 
        <p>Made in India</p> 
      </FlexBox>
    </div>;
};

export default ProductDescription;