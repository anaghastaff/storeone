import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import { H1 } from "components/Typography";
import { Carousel } from "components/carousel";
import { ProductCard3 } from "components/product-cards/product-card-3"; // CUSTOM DATA MODEL

// STYLED COMPONENT
import { TitleBox } from "./styles"; // ===============================================================

// ===============================================================
const Section3 = ({
  products
}) => {
  const responsive = [{
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
      <TitleBox>
        <H1>Top Sales Products</H1>
        <div />
      </TitleBox>

      <Carousel responsive={responsive} slidesToShow={3} arrowStyles={{
      width: 40,
      height: 40,
      boxShadow: 2,
      borderRadius: 0,
      color: "primary.main",
      backgroundColor: "white"
    }}>
        {products.map(item => <Box py={0.5} key={item.id}>
            <ProductCard3 hideRating id={item.id} slug={item.slug} title={item.title} price={item.price} off={item.discount} rating={item.rating} imgUrl={item.thumbnail} />
          </Box>)}
      </Carousel>
    </div>;
};

export default Section3;