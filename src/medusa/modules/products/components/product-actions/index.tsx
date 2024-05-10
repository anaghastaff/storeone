"use client";

import { Region, type LineItem } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { isEqual } from "lodash";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useIntersection } from "medusa/lib/hooks/use-in-view";
import { addToCart, updateLineItem } from "medusa/modules/cart/actions";
import Divider from "@mui/material/Divider";
import OptionSelect from "medusa/modules/products/components/option-select";
import MobileActions from "../mobile-actions";
import ProductPrice from "../product-price";
import type { CartWithCheckoutStep } from "medusa/types/global";
import QuantityButtons from "components/product-cards/product-card-7/quantity-buttons";

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
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cartItemExist, setcartItemExist] = useState<LineItem | null>(null);
  const [inCart, setInCart] = useState<LineItem | null>(null);

  const countryCode = useParams().countryCode as string;

  const variants = product.variants;

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
  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id]);
    }
  }, [variants, variantRecord]);

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

  useEffect(() => {
    const temp = cart?.items?.find((item) => item?.variant.id === variant?.id);
    setInCart(temp || null);
  }, [options, variant]);

  const actionsRef = useRef<HTMLDivElement>(null);

  const inView = useIntersection(actionsRef, "0px");

  useEffect(() => {
    const data = cart?.items?.find((item) => {
      const variantIds = variants.map((variant) => variant.id);
      return variantIds.includes(item?.variant.id);
    });
    data && setcartItemExist(data);
  }, [options, variant, inStock]);

  const handleIncrementQuantity = async (quantity: number) => {
    if (inCart) {
      setError(null);
      setUpdating(true);

      const message = await updateLineItem({
        lineId: inCart?.id,
        quantity,
      })
        .catch((err) => {
          return err.message;
        })
        .finally(() => {
          setUpdating(false);
        });

      message && setError(message);
    } else {
      if (!variant?.id) return null;

      setIsAdding(true);

      const res = await addToCart({
        variantId: variant.id,
        quantity: 1,
        countryCode,
      });

      setIsAdding(false);
    }

    // handleCartAmountChange(product);
  };

  const handleDecrementQuantity = async (quantity: number) => {
    if (inCart) {
      setError(null);
      setUpdating(true);

      const message = await updateLineItem({
        lineId: inCart?.id,
        quantity,
      })
        .catch((err) => {
          return err.message;
        })
        .finally(() => {
          setUpdating(false);
        });
      const res = await message.json();
      if (res) {
        console.log("Item update success");
      }
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
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
        ref={actionsRef}
      >
        <Box>
          {product.variants.length > 1 && (
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 4 }}>
              {(product.options || []).map((option) => {
                return (
                  <Box key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={updateOptions}
                      title={option.title}
                      data-testid="product-options"
                    />
                  </Box>
                );
              })}
              <Divider />
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
          quantity={inCart?.quantity || 0}
          handleIncrement={handleIncrementQuantity}
          handleDecrement={handleDecrementQuantity}
          handleAddToCart={handleAddToCart}
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
