"use client";
import Link from "next/link"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import ProductViewDialog from "components/products-view/product-view-dialog"; // LOCAL CUSTOM HOOKS

import useProduct from "../use-product"; // LOCAL CUSTOM COMPONENTS

import HoverActions from "./hover-actions";
import ProductPrice from "../product-price";
import ProductTitle from "../product-title";
import DiscountChip from "../discount-chip";
import ButtonActions from "./button-actions";
import ProductRating from "../product-rating"; // STYLED COMPONENTS
import Add from "@mui/icons-material/Add";
import {
  ContentWrapper,
  ImageBox,
  ImageWrapper,
  StyledBazaarCard,
} from "./styles"; // =============================================================
import ProductActionsHealth_Beauty from "medusa/modules/products/components/product-actions-handb";
import type { Region } from "@medusajs/medusa";
import type { AverageRatings, CartWithCheckoutStep } from "medusa/types/global";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Button } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { FlexBox } from "components/flex-box";
interface Props {
  sx?:any,
    off?:number,
    status?:string | "",
    id:string,
    title:string,
    price?:number,
    imgUrl:string,
    rating?:averagerating,
    hideRating?:boolean,    
    slug?:string,
    region?:Region,
    cart?:CartWithCheckoutStep | null,
    product:PricedProduct,
    ratings?:AverageRatings,
    countryCode?:string,
    hoverEffect?:boolean,
    handle?:string
}

type averagerating = {
  id:string
  averageRating:number
  count:number
}
// =============================================================
const ProductCard14:React.FC<Props> = (props) => {
  const {
    off,
    id,
    title,
    price,
    imgUrl,
    ratings,
    hideRating,
    hoverEffect,
    slug,
    cart,
    product,
    region,
  } = props;
  const {
    cartItem,
    isFavorite,
    openModal,
    handleCartAmountChange,
    toggleDialog,
    toggleFavorite,
  } = useProduct(slug);

  const handleIncrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: (cartItem?.qty || 0) + 1,
    };
    handleCartAmountChange(product);
  };

  const handleDecrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: (cartItem?.qty || 0) - 1,
    };
    handleCartAmountChange(product, "remove");
  };

  
  const rating = ratings.find((r) => r.id === product?.id);

  return (
    <StyledBazaarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {/* DISCOUNT PERCENT CHIP IF AVAILABLE */}
        <DiscountChip
          discount={off}
          sx={{
            left: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        />

        <ImageBox>
          {/* PRODUCT IMAGE / THUMBNAIL */}
          <Link href={`/health-beauty-shop/products/${id}`}>
            <LazyImage alt={title} src={imgUrl} width={190} height={190} sx={{objectFit:'contain', mx:'auto'}} />
          </Link>

          {/* HOVER ACTION ICONS */}
          <HoverActions
            isFavorite={isFavorite}
            toggleView={toggleDialog}
            toggleFavorite={toggleFavorite}            
            product={product}
            region={region}
            cart={cart}
          />
        </ImageBox>
      </ImageWrapper>

      {/* PRODUCT VIEW DIALOG BOX */}
      <ProductViewDialog
        openDialog={openModal}
        handleCloseDialog={toggleDialog}
        pricedProduct={product}
        region={region}
        cart={cart}
        rating={rating}
        product={{
          title,
          price,
          id,
          slug,
          imgGroup: [imgUrl, imgUrl],
        }}
      />

      <ContentWrapper>
        {/* PRODUCT NAME / TITLE */}
        <ProductTitle slug={id} title={title} />

        {/* PRODUCT RATINGS IF AVAILABLE */}
        <ProductRating rating={rating?.averageRating ?? 0} length={rating?.count ?? 0} showRating={true} />

        {/* PRODUCT PRICE WITH DISCOUNT */}
        <ProductPrice discount={off} price={price} />

        {/* PRODUCT QUANTITY HANDLER & FAVORITE BUTTONS */}
       
        <ProductActionsHealth_Beauty
          product={product}
          region={region}
          cart={cart}
        >
          <Add /> Add to Cart
        </ProductActionsHealth_Beauty>
        {/* <ButtonActions
          hasQty={cartItem?.qty ? true : false}
          handleIncrementQuantity={handleIncrementQuantity}
          handleDecrementQuantity={handleDecrementQuantity}
        /> */}
         {/* <Button
              variant="contained"
              color="primary"
              sx={{
                width:20, height:20,flexGrow:1
              }}
            >
              <FavoriteBorder
                sx={{
                  fontSize: 16,
                }}
              />
            </Button> */}
            
      </ContentWrapper>
    </StyledBazaarCard>
  );
};

export default ProductCard14;
