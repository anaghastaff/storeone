import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import { H1, Paragraph } from "components/Typography";
import { ProductCard7 } from "components/product-cards/product-card-7"; // CUSTOM DATA MODEL
import Typography from "@mui/material/Typography";
import { variantColors } from "lib/colors";
import { variantSizes } from "lib/sizes";

import { CircularProgress, Skeleton } from "@mui/material";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Product } from "@medusajs/medusa";
import type { Region } from "medusa/types/medusa";

import { getProductPrice } from "medusa/lib/util/get-product-price";
import { CartWithCheckoutStep } from "medusa/types/global";

export default function ProductInCarousel({
  products,
  region,
  cart,
}: {
  products;
  region: Region;
  cart: CartWithCheckoutStep | null;
}) {
  const responsive = [
    {
      breakpoint: 900,
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
  return (
    <>
      <Carousel
        responsive={responsive}
        dots={false}
        dotColor="#3399ff"
        
        slidesToShow={3}
        arrowStyles={{
          width: 40,
          height: 40,
          boxShadow: 2,
          borderRadius: 0,
          color: "common.white",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        {products.map((item: PricedProduct) => {
          const size = variantSizes(item); // Get the size for the current item
          const colors = variantColors(item);

          const { cheapestPrice } = getProductPrice({
            product: item,
            region,
          });
          return (
            <Box py={2} key={item.id}>
              <ProductCard7
                hideRating
                id={item.id}
                slug={item.id}
                title={item.title}
                price={cheapestPrice}
                region={region}
                cart={cart}
                product={item}
                off={"10"}
                // rating={5}
                status={
                  item?.tags?.find((i) => i?.value === "sale")
                    ? "Sale"
                    : item.variants.find((v) => v?.inventory_quantity < 95)
                      ? "Top"
                      : ""
                }
                imgUrl={item.thumbnail}
              />
            </Box>
          );
        })}
      </Carousel>
    </>
  );
}
