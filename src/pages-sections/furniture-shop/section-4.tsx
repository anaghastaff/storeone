
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS

import { H1, Paragraph, Span } from "components/Typography";


import { CircularProgress, Skeleton } from "@mui/material";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

import type { Region } from "medusa/types/medusa";

import { getProductPrice } from "medusa/lib/util/get-product-price";
import {CartWithCheckoutStep} from "medusa/types/global"
import ProductCard17 from "../../components/product-cards/product-card-7/product-card";
import { variantSizes } from "lib/sizes";
import { variantColors } from "lib/colors";

// ===================================================================
const Section4 = ({
  products,
 heading,
 region,
 description,
 cart,
}:
{
 products,
 heading:string,
 region:Region,
 description:string,
 cart:CartWithCheckoutStep | null
}) => {
  return <div> 
      <Box >
        <H1 mb="4px">{heading}</H1>
        <Paragraph color="grey.600" >
          {description}
        </Paragraph>
      </Box>       
      <Grid container mb={-0.5} spacing={4}>
      {products.map((item:PricedProduct) => {
          const size = variantSizes(item); // Get the size for the current item
          const colors = variantColors(item);    
          const { cheapestPrice } = getProductPrice({
            product:item,
            region,
          })
          return (
            <Grid key={item.id} item md={4} sm={6} xs={12}>
              <ProductCard17
                hideRating
                id={item.id}
                slug={item.handle}
                title={item.title}
                price={cheapestPrice}
                region={region}
                cart={cart}
                product={item}
                off={"10"}
                // rating={5}
                status={item?.tags?.find((i)=>i?.value === 'sale') ? "Sale" : item.variants.find((v)=> v?.inventory_quantity < 95 ) ? 'Top' : ""}
                imgUrl={ item.thumbnail}
                productColors={colors  }
                productSizes={size}
              />
            </Grid> 
          );
        })}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center"> 
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </Box>
    </div>;
};

export default Section4;