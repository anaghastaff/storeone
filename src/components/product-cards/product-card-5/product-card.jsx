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

import { ContentWrapper, ImageBox, ImageWrapper, StyledBazaarCard } from "./styles"; // =============================================================

// =============================================================
const ProductCard14 = props => {
  const {
    off,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,
    hoverEffect,
    slug
  } = props;
  const {
    cartItem,
    handleCartAmountChange,
    isFavorite,
    openModal,
    toggleDialog,
    toggleFavorite
  } = useProduct(slug);

  const handleIncrementQuantity = () => {
    const product = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: (cartItem?.qty || 0) + 1
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
      qty: (cartItem?.qty || 0) - 1
    };
    handleCartAmountChange(product, "remove");
  };

  return <StyledBazaarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {
        /* DISCOUNT PERCENT CHIP IF AVAILABLE */
      }
        <DiscountChip discount={off} sx={{
        left: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }} />

        <ImageBox>
          {
          /* PRODUCT IMAGE / THUMBNAIL */
        }
          <Link href={`/products/${slug}`}>
            <LazyImage alt={title} src={imgUrl} width={190} height={190} />
          </Link>

          {
          /* HOVER ACTION ICONS */
        }
          <HoverActions isFavorite={isFavorite} toggleView={toggleDialog} toggleFavorite={toggleFavorite} handleIncrementQuantity={handleIncrementQuantity} />
        </ImageBox>
      </ImageWrapper>

      {
      /* PRODUCT VIEW DIALOG BOX */
    }
      <ProductViewDialog openDialog={openModal} handleCloseDialog={toggleDialog} product={{
      title,
      price,
      id,
      slug,
      imgGroup: [imgUrl, imgUrl]
    }} />

      <ContentWrapper>
        {
        /* PRODUCT NAME / TITLE */
      }
        <ProductTitle slug={slug} title={title} />

        {
        /* PRODUCT RATINGS IF AVAILABLE */
      }
        <ProductRating rating={rating} showRating={!hideRating} />

        {
        /* PRODUCT PRICE WITH DISCOUNT */
      }
        <ProductPrice discount={off} price={price} />

        {
        /* PRODUCT QUANTITY HANDLER & FAVORITE BUTTONS */
      }
        <ButtonActions hasQty={cartItem?.qty ? true : false} handleIncrementQuantity={handleIncrementQuantity} handleDecrementQuantity={handleDecrementQuantity} />
      </ContentWrapper>
    </StyledBazaarCard>;
};

export default ProductCard14;