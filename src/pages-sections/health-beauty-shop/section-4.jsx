import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS

import { FlexRowCenter } from "components/flex-box";
import { SectionHeader } from "components/section-header";
import { ProductCard5 } from "components/product-cards/product-card-5"; // CUSTOM DATA MODEL
import { retrievePricedProductById } from "medusa/lib/data";
// STYLED COMPONENT
import { SubTitle } from "./styles"; // ===========================================================

// ===========================================================
const Section4 = async ({
  products,
  ratings,
  cart,
  region,
}) => {
  return <div>
      <SectionHeader title="All Products" seeMoreLink="#" />
      <SubTitle>Best deal with medical and beauty items</SubTitle>

      <Grid container mb={-0.5} spacing={3}>
        {products.slice(0,6).map(async (item) => 
        {
          const rating = ratings.find((r) => r.id === item?.id);
          const pricedProduct = await retrievePricedProductById({
            id: item?.id,
            regionId: region.id,
          })
          return (
            <Grid key={item.id} item md={4} sm={6} xs={12}>
           <ProductCard5
              cart={cart}
              product={pricedProduct}
                id={item.id}
                slug={item.id}
                title={item.title}
                price={pricedProduct.variants[0].calculated_price}
                off={15}
                rating={rating ?? 0}
                imgUrl={item.thumbnail}
                region={region}
                hoverEffect={true}
              />
          </Grid>
          )
        })}
      </Grid>

      <FlexRowCenter mt={6}>
        <Button color="primary" variant="contained" href="/health-beauty-shop/categories/all-products">
          View All...
        </Button>
      </FlexRowCenter>
    </div>;
};

export default Section4;