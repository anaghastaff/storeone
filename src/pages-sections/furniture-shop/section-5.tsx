import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS
import { H1, Paragraph, Span } from "components/Typography";
import { CircularProgress, Skeleton } from "@mui/material";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Region } from "@medusajs/medusa";
import { getProductPrice } from "medusa/lib/util/get-product-price";
import { CartWithCheckoutStep, type AverageRatings, type ProductCategoryWithChildren } from "medusa/types/global";
import ProductCard17 from "components/product-cards/product-card-7/product-card";
import { useState } from "react";
import type { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products";
import {
  getProductsListWithSort,
  getProductsById,
  retrievePricedProductById,
} from "medusa/lib/data";
import { PaginationMedusa } from "medusa/modules/store/components/pagination";
import { FlexBox } from "components/flex-box";

// ===================================================================
const PRODUCT_LIMIT = 6;
type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  id?: string[];
  
};
const Section5 = async ({
categories,
  heading,
  region,
  description,
  cart,
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
  ratings,
}: {
  sortBy?: SortOptions;
  page?: number;
  heading?: string;
  region?: Region;
  description?: string;
  cart: CartWithCheckoutStep | null;
  count?: number;
  countryCode: string;
  collectionId?: string;
  categoryId?: string;
  productsIds?: string[];
  ratings?: AverageRatings;
  products?: PricedProduct[];
  pricedProducts?:PricedProduct[];
  categories:ProductCategoryWithChildren[] 
}) => {
  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  };

  if (collectionId) {
    queryParams["collection_id"] = [collectionId];
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId];
  }

  if (productsIds) {
    queryParams["id"] = productsIds;
  }

  const {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  });

  const totalPages = Math.ceil(count / PRODUCT_LIMIT);

  return (
    <div>
      <Box>
        <H1 mb="4px">{heading}</H1>
        <Paragraph color="grey.600">{description}</Paragraph>
      </Box>
      <Grid container mb={-0.5} spacing={2} rowSpacing={2} columns={16}>
        {products.map(async (data) => {
          if (!data.id) {
            return null;
          }
          const pricedProduct = await retrievePricedProductById({
            id: data.id,
            regionId: region.id,
          });
          // return data;

          return (
            <Grid xl={4} lg={5} sm={8} xs={16}>
              
              <ProductCard17             
                countryCode={countryCode}
                hideRating
                id={data.id}
                slug={data.id}
                title={data.title}
                price={data.price.calculated_price}
                region={region}
                cart={cart}
                off="15"
                
                status={
                  pricedProduct?.tags?.find((i) => i?.value === "sale")
                    ? "Sale"
                    : pricedProduct.variants?.find(
                          (v) => v?.inventory_quantity < 95
                        )
                      ? "Top"
                      : ""
                }
                imgUrl={data.thumbnail}
                ratings={ratings}
                product={pricedProduct}
              />
             
            </Grid>
          );
        })}
      </Grid>
      <Box display="flex" justifyContent="center">
        {/* <Button color="primary" variant="contained" size="large" sx={{borderRadius:0, mb:2}}
          onClick={handleCount} disabled={pageEnd}
        >
          Load More...
        </Button> */}
        {totalPages > 1 && (
          <PaginationMedusa
            data-testid="product-pagination"
            page={page}
            totalPages={totalPages}
          />
        )}
      </Box>
    </div>
  );
};

export default Section5;
