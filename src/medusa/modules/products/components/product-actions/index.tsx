"use client"
import { Region, type LineItem } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { isEqual } from "lodash";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState, Dispatch, SetStateAction } from "react";
import { useIntersection } from "medusa/lib/hooks/use-in-view";
import { addToCart, updateLineItem, addToCheckout } from "medusa/modules/cart/actions";
import Divider from "@mui/material/Divider";
import OptionSelect from "medusa/modules/products/components/option-select";
import MobileActions from "../mobile-actions";
import ProductPrice from "../product-price";
import type { CartWithCheckoutStep } from "medusa/types/global";
import QuantityButtons from "components/product-cards/product-card-7/quantity-buttons"; 
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { Typography } from "@mui/material";

type ProductActionsProps = {
  product: PricedProduct;
  region: Region;
  cart: CartWithCheckoutStep | null;
  
};

export type PriceType = {
  calculated_price: string;
  original_price?: string;
  price_type?: "sale" | "default";
  percentage_diff?: string;
};

export default function ProductActions({
  product,
  region,
  cart,   
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [toCheckout, addItemtoCheckout] = useState(false);
  const [reduce, addReduce] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inCart, setInCart] = useState<number>(0);
  const [lineitem, setLineItem] = useState<LineItem | null>(null)
  const {enqueueSnackbar} = useSnackbar()

  const countryCode = useParams().countryCode as string;
  const variants = product?.variants

  // initialize the option state
  useEffect(() => {
    const optionObj: Record<string, string> = {};
    for (const option of product.options || []) {
      Object.assign(optionObj, { [option.id]: undefined });
    }
    setOptions(optionObj);
  }, [product]);

  // memoized record of the product's variants
 
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {};
    for (const variant of variants) {
      if (!variant.options || !variant.id) continue;
      const temp: Record<string, string> = {};
      for (const option of variant.options) {
        temp[option.option_id] = option.value;
      }      
      map[variant.id] = temp;      
    }
    return map;
  }, [variants]);

  // memoized function to check if the current options are a valid variant

  const variant = useMemo(() => {
    let variantId: string | undefined = undefined;
    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key;
      }
    }
    return variants.find((v) => v.id === variantId);
  }, [options, variantRecord, variants, product]);

  // if product only has one variant, then select it
  // useEffect(() => {
  //   if (variants.length === 1 && variants[0].id) {
  //     setOptions(variantRecord[variants[0].id]);
  //   }
  // }, [variants, variantRecord]);

  // update the options when a variant is selected
  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update });
  };

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    if (variant && !variant.inventory_quantity) {
      return false;
    }
    if (variant && variant.allow_backorder === false) {      
      return true;
    }
  }, [variant]);

  //Store the current selected color to match with available sizes inside the optionSelect Component

  const colorOption = product?.options?.find(o => o.title === 'Color');
  const colorOptionId = colorOption?.id;
  const currentColor = colorOptionId ? options[colorOptionId] : undefined;
  const actionsRef = useRef<HTMLDivElement>(null);
  const inView = useIntersection(actionsRef, "0px");

  

  // increase quantity
  const handleIncrementQuantity = async (quantity: number) => {
    const itemInCart = cart?.items?.find((i)=>i.id === variant.id)
    if (itemInCart) {
      setError(null);
      setUpdating(true);

      const message = await updateLineItem({
        lineId: itemInCart?.id,
        quantity,
      })
        .catch((err) => {
          return err.message;
        })
        .finally(() => {          
          
          setUpdating(false);
        });
        const qty = cart?.items?.find((i)=>i.id===variant.id)
        setLineItem(qty)
      message && setError(message);
     
    } else {
      if (!variant?.id) return null;
      setIsAdding(true);
      await addToCart({
        variantId: variant.id,
        quantity: 1,
        countryCode,
      });     
      setIsAdding(false);
    }
    // handleCartAmountChange(product);
  };

  const handleDecrementQuantity = async (quantity: number) => {
    const itemInCart = cart?.items?.find((i)=>i.id === variant.id)
    if (itemInCart && itemInCart?.quantity > 0) {
      setError(null);
      addReduce(true);
      const message = await updateLineItem({
        lineId: itemInCart?.id,
        quantity,
      })
        .catch((err) => {
          return err.message;
        })
        .finally(() => {          
         
          addReduce(false);
        });     
        const qty = cart?.items?.find((i)=>i.id===variant.id)
        setLineItem(qty)
        console.log(qty)
      message && setError(message);
     
    }
    // handleCartAmountChange(product, "remove");
  };

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!variant?.id) return null;
    setIsAdding(true);
   await addToCart({
      variantId: variant.id,
      quantity: 1,
      countryCode,
    });
   
    setIsAdding(false);
    const qty = cart?.items?.find((i)=>i.id===variant.id)
    setLineItem(qty)
  };
  const router = useRouter()

  const handleAddToCheckout = async () => {
    if (!variant?.id) return null;

    addItemtoCheckout(true);
    try{
      await addToCheckout({
        variantId: variant.id,
        quantity: 1,
        countryCode,
      })
      .then((res)=>{
        console.log("result",res)
        if(res !== "Error adding item to cart" ){
          addItemtoCheckout(false);
          
          router.push("/checkout?step=address");
        }       
      })
      
    }catch(err){
      setError(err.toString())
    }
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}
        ref={actionsRef}
      >
        <Box>
          {product.variants.length > 1 && (
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: '0.5rem' }}>
             
              <Typography variant="caption" color={variant ? "primary.dark": "transparent"}>Selected: {variant?.title}</Typography>
              {(product.options || []).map((option) => {
                return (
                  <Box key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                      currentColor={currentColor} 
                      data-testid="product-options"
                      variants={product.variants}
                      variant={variant}
                    />
                  </Box>
                );
              })}
              
            </Box>
          )}
        </Box>

        <ProductPrice product={product} variant={variant} region={region} />

        {/* <Button
          onClick={handleAddToCart}
          disabled={!inStock || !variant}
          variant="contained"
          fullWidth
          size="large"
          
          data-testid="add-product-button"
        >
          {!variant
            ? "Select variant"
            : !inStock
            ? "Out of stock"
            : "Add to cart"}
        </Button> */}

        <QuantityButtons
          inStock={inStock}
          variant={variant}
          disabled={!inStock || !variant}
          quantity={lineitem?.quantity ? lineitem?.quantity : 0}
          handleIncrement={handleIncrementQuantity}
          handleDecrement={handleDecrementQuantity}
          handleAddToCart={handleAddToCart}
          handleAddToCheckout={handleAddToCheckout}
          isAdding={isAdding}
          updating={updating}
          toCheckout={toCheckout}
          reduce={reduce}
        />

        {/* <MobileActions
          product={product}
          variant={variant}
          region={region}
          options={options}
          updateOptions={updateOptions}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
        /> */}
      </Box>
    </>
  );
}
