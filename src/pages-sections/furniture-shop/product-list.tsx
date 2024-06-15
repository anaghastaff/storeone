import { Product } from "@medusajs/medusa";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useProducts } from "medusa-react";
import React from "react";
import { ProductCard7 } from "components/product-cards/product-card-7";
import Grid from "@mui/material/Grid";
import { variantColors } from "lib/colors";
import { variantSizes} from "lib/sizes";
import { Suspense } from "react";
import Skeleton from '@mui/material/Skeleton'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FetchProducts from "app/api/fetchProducts";

const ProductList: React.FC = async () => {
  // const { products, (products.length === 0), error } = useProducts();

  const  products  = await FetchProducts();
  
  return (products.length === 0) ? (
    <Box sx={{width:'100%'}}>
    <Skeleton  variant="rectangular"  width="100%" sx={{bgcolor:'#E9EBFF', height:'500px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Typography variant="h3" color="primary">Loading...</Typography> 
       <CircularProgress color="success" />
    </Skeleton>
    </Box>
  ) : products ? (
    <div>
      <Grid container mb={-0.5} spacing={3}>
  {products.map((item) => {
    const size = variantSizes(item); // Get the size for the current item
    const colors = variantColors(item);
    return (
      <Grid key={item.id} item md={4} sm={6} xs={12}>
        {(products.length === 0) ? (
          <Skeleton variant="rectangular" sx={{ bgcolor: 'red', height: 300, width: 500 }} />
        ) : (
          <ProductCard7
            hideRating
            id={item.id}
            slug={item.id}
            title={item.title}
            price={item.variants[0].prices[0].amount}
            off={"10"}
            status={item.tags[0]?.value || "star"}
            imgUrl={item.thumbnail}
            productColors={colors ? colors : <Skeleton variant="rectangular" sx={{ bgcolor: 'red', height: 12, width: 12 }} />}
            productSizes={size ? size : <Skeleton variant="rectangular" sx={{ bgcolor: 'red', height: 14, width: 14 }} />}
          />
        )}
      </Grid>
    );
  })}
</Grid>

    </div>
  ) : (
    <Skeleton  variant="rectangular"  sx={{bgcolor:'red', height:300, width:500}} />
  );
};

export default ProductList;
