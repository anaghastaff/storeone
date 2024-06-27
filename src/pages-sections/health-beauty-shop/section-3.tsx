import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { SectionHeader } from "components/section-header";
import { ProductCard5 } from "components/product-cards/product-card-5"; // CUSTOM DATA MODEL

// STYLED COMPONENT
import { SubTitle } from "./styles"; // ================================================================
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import type { AverageRatings, CartWithCheckoutStep } from "medusa/types/global";
import type { Region } from "@medusajs/medusa";
import { retrievePricedProductById } from "medusa/lib/data";

// ================================================================
const Section3 = async ({
  products,
  ratings,
  cart,
  region,
}: {
  products: PricedProduct[];
  ratings: AverageRatings;
  cart: CartWithCheckoutStep | null;
  region: Region;
}) => {
  const responsive = [
   
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ];
 
  return (<div>
      <SectionHeader title="Top New Products" seeMoreLink="#" />
      <SubTitle>Best deal with medical and beauty items</SubTitle>

      <Carousel
        dotColor="info.dark"
        slidesToShow={3}
        responsive={responsive}
        arrowStyles={{
          color: "primary.main",
          backgroundColor: "primary.100",
          "&:hover": {
            backgroundColor: "primary.200",
          },
        }}
      >
        {products.map(async (item) => {
          const rating = ratings.find((r) => r.id === item?.id);
          const pricedProduct:PricedProduct = await retrievePricedProductById({
            id: item?.id,
            regionId: region.id,
          });
          return (
            <Box pt={0.5} pb={2} key={item.id}>
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
            </Box>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Section3;
