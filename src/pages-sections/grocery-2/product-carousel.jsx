import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import { Carousel } from "components/carousel";
import ProductCard1 from "components/product-cards/product-card-1"; // CUSTOM DATA MODEL

// =======================================================
const ProductCarousel = ({
  products,
  title
}) => {
  const responsive = [{
    breakpoint: 950,
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
      <H3 fontSize={25} mb={3}>
        {title}
      </H3>

      <Carousel slidesToShow={3} responsive={responsive}>
        {products.map(item => <Box py={0.5} key={item.id}>
            <ProductCard1 hideRating id={item.id} slug={item.slug} price={item.price} title={item.title} rating={item.rating} imgUrl={item.thumbnail} discount={item.discount} />
          </Box>)}
      </Carousel>
    </div>;
};

export default ProductCarousel;