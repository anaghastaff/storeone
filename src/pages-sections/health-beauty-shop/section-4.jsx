import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS

import { FlexRowCenter } from "components/flex-box";
import { SectionHeader } from "components/section-header";
import { ProductCard5 } from "components/product-cards/product-card-5"; // CUSTOM DATA MODEL

// STYLED COMPONENT
import { SubTitle } from "./styles"; // ===========================================================

// ===========================================================
const Section4 = ({
  products
}) => {
  return <div>
      <SectionHeader title="All Products" seeMoreLink="#" />
      <SubTitle>Best deal with medical and beauty items</SubTitle>

      <Grid container mb={-0.5} spacing={3}>
        {products.map(item => <Grid key={item.id} item md={4} sm={6} xs={12}>
            <ProductCard5 id={item.id} slug={item.slug} title={item.title} price={item.price} off={item.discount} rating={item.rating} imgUrl={item.thumbnail} />
          </Grid>)}
      </Grid>

      <FlexRowCenter mt={6}>
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </FlexRowCenter>
    </div>;
};

export default Section4;