import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { SectionHeader } from "components/section-header";
import { ProductCard5 } from "components/product-cards/product-card-5"; // CUSTOM DATA MODEL

// STYLED COMPONENT
import { SubTitle } from "./styles"; // ================================================================

// ================================================================
const Section3 = ({
  products
}) => {
  const responsive = [{
    breakpoint: 950,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 500,
    settings: {
      slidesToShow: 1
    }
  }];
  return <div>
      <SectionHeader title="Top New Products" seeMoreLink="#" />
      <SubTitle>Best deal with medical and beauty items</SubTitle>

      <Carousel slidesToShow={3} responsive={responsive} arrowStyles={{
      color: "primary.main",
      backgroundColor: "primary.100",
      "&:hover": {
        backgroundColor: "primary.200"
      }
    }}>
        {products.map(item => <Box pt={0.5} pb={2} key={item.id}>
            <ProductCard5 id={item.id} slug={item.slug} title={item.title} price={item.price} off={item.discount} rating={item.rating} imgUrl={item.thumbnail} />
          </Box>)}
      </Carousel>
    </div>;
};

export default Section3;