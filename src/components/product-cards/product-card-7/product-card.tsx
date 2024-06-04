
import Link from "next/link";
import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography"; // LOCAL CUSTOM HOOK
import useProduct from "../use-product"; // LOCAL CUSTOM COMPONENTS
import ProductPrice from "../product-price";
import DiscountChip from "../discount-chip";
import ProductStatus from "./product-status";
import ProductRating from "../product-rating";
import QuantityButtons from "./quantity-buttons"; // STYLED COMPONENTS
import { Suspense } from "react";
 
import { StyledCard, ContentWrapper, ColorBox, ImgBox, SizeBox } from "./styles"; // =======================================================
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress"
import PreviewPrice from "medusa/modules/products/product-preview-price/price";
import ProductActions from "medusa/modules/products/components/product-actions";
// =======================================================
const ProductCard17 = props => {
  const {
    sx,
    off,
    status,
    id,
    title,
    price,
    imgUrl,
    rating,
    hideRating,
    productColors,
    productSizes,
    slug,
    region,
    cart,
    product
  } = props;
  
  // const {
  //   cartItem,
  //   handleCartAmountChange
  // } = useProduct(slug); 

  // const handleIncrementQuantity =  () => { 
  //   const product = {
  //     id,
  //     slug,
  //     price,
  //     imgUrl,
  //     name: title,
  //     qty: (cartItem?.qty || 0) + 1
  //   };
  //   handleCartAmountChange(product); 
  // };

  // const handleDecrementQuantity = () => {
  //   const product = {
  //     id,
  //     slug,
  //     price,
  //     imgUrl,
  //     name: title,
  //     qty: (cartItem?.qty || 0) - 1
  //   };
  //   handleCartAmountChange(product, "remove");
  // };
const discount = 15;
  return <StyledCard sx={sx}>
      <Link href={`/products/${slug}`}> 
        <ImgBox id="imgBox">
          {
          /* PRODUCT BADGE STATUS IF STATUS AVAILABLE */
        }
          <ProductStatus status={status} />

          {
          /* DISCOUNT PERCENT CHIP IF AVAILABLE */
        }
          <DiscountChip discount={discount} sx={{
          borderRadius: 0
        }} />

          {
          /* PRODUCT IMAGE / THUMBNAIL */
        }
          <LazyImage alt={title} fill src={imgUrl} 
          sx={{objectFit:'fill',left:0, top:0, position:'absolute'}} id="productImg" />
        </ImgBox>
      </Link>

      <ContentWrapper>
        <Box flex="1 1 0" width="100%" >
          {
          /* PRODUCT TITLE / NAME */
        }
          <Link href={`/products/${slug}`}>
            <H3 mb={1} title={title} fontSize="24px" fontWeight="700" className="title" color="text.secondary">
              {title}
            </H3>
          </Link>

          {
          /* PRODUCT RATING / REVIEW  */
        }
          <ProductRating showRating={!hideRating} rating={rating} />

          {
          /* PRODUCT COLORS */
        }
          {/* <ColorBox>
            {productColors.map((color, ind) => <Span key={ind} sx={{
            background: `${color}`,
          }} />)}
          </ColorBox>

          <SizeBox>
            {productSizes?.map((sizes, ind) => <Typography key={ind} variant="body2">{sizes}</Typography>)}
          </SizeBox> */}

          {
          /* PRODUCT PRICE WITH DISCOUNT */
        }
         {/* {price && <PreviewPrice price={price} />} */}
          {/* <ProductPrice discount={off} price={price} /> */} 
          <div style={{display:'flex', flexDirection:'column', gap:"14px", width:'100%', backgroundColor:'#fafafa'}}>
          
          <ProductActions product={product} region={region} cart={cart}/>
         
        </div>
        </Box>

        {
        /* PRODUCT QUANTITY HANDLER BUTTONS */
      }
        {/* <QuantityButtons quantity={cartItem?.qty || 0} handleIncrement={handleIncrementQuantity} handleDecrement={handleDecrementQuantity} /> */}
      </ContentWrapper>
    </StyledCard>;
};

export default ProductCard17;