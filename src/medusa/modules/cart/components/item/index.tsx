"use client";

import { LineItem, Region } from "@medusajs/medusa";
import { Table, Text, clx } from "@medusajs/ui";

import CartItemSelect from "medusa/modules/cart/components/cart-item-select";
import DeleteButton from "medusa/modules/common/components/delete-button";
import LineItemOptions from "medusa/modules/common/components/line-item-options";
import LineItemPrice from "medusa/modules/common/components/line-item-price";
import LineItemUnitPrice from "medusa/modules/common/components/line-item-unit-price";

import { updateLineItem } from "medusa/modules/cart/actions";
import Spinner from "medusa/modules/common/icons/spinner";
import { useState } from "react";
import ErrorMessage from "medusa/modules/common/components/error-message";
import LocalizedClientLink from "medusa/modules/common/components/localized-client-link";
import { Box, Button, Input, Stack } from "@mui/material";
import Image from "next/image";


type ItemProps = {
  item: Omit<LineItem, "beforeInsert">;
  region: Region;
  type?: "full" | "preview";
};

const Item = ({ item, region, type = "full" }: ItemProps) => {
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handle } = item.variant.product;

  const changeQuantity = async (quantity: number) => {
    setError(null);
    setUpdating(true);

    const message = await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        return err.message;
      })
      .finally(() => {
        setUpdating(false);
      });

    message && setError(message);
  };

  return (
    <Table.Row className="w-full" data-testid="product-row">
      <Table.Cell className="!pl-0 p-4 w-24 relative">
        <LocalizedClientLink
          href={`/products/${handle}`}
          className={clx("flex", {
            "w-16": type === "preview",
            "small:w-24 w-12": type === "full",
             
          })}
        >
        {item.thumbnail && <Image src={item.thumbnail} alt={item.title} width={100} height={100} style={{objectFit:"contain"}} />}   
        </LocalizedClientLink>
      </Table.Cell>

      <Table.Cell className="text-left">
        <Text
          className="txt-medium-plus text-ui-fg-base"
          data-testid="product-title"
        >
          {item.title}
        </Text>
        <LineItemOptions variant={item.variant} data-testid="product-variant" />
      </Table.Cell>

      {type === "full" && (
        <Table.Cell>
          <div className="flex gap-2 items-center w-28">
            <DeleteButton id={item.id} data-testid="product-delete-button" />
            {/* <CartItemSelect
              value={item.quantity}
              onChange={(value) => changeQuantity(parseInt(value.target.value))}
              className="w-14 h-10 p-4"
              data-testid="product-select-button"
            >
              {Array.from(
                {
                  length: Math.min(
                    item.variant.inventory_quantity > 0
                      ? item.variant.inventory_quantity
                      : 10,
                    10
                  ),
                },
                (_, i) => (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                )
              )}
            </CartItemSelect> */}

            <Stack
              width={800}
              gap={2}
              sx={{ border: "1px solid blue" }}
              direction="row"
              key={item.id}
            >
              <Box sx={{ position: "relative" }}>
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    height={100}
                    width={100}
                    alt={item.title}
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <p>"Image could not be loaded"</p>
                )}
              </Box>
              <Box>{item.title}</Box>
              <Box>{item.variant.title}</Box>
              <Box>{item.quantity}</Box>
              
              <Button
                onClick={() => changeQuantity(item.quantity - 1)}
                disabled={item.quantity <= 1 || updating}
                sx={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  color: "text.disabled",
                  backgroundColor: "background.muted",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  borderColor: "border.default",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "background.hover",
                  },
                }}
              >
                -
              </Button>

              <Input
                type="text"
                value={item.quantity}
                onChange={(e) => changeQuantity(parseInt(e.target.value))}
                disabled={updating}
                sx={{
                  width: 60,
                  height: 60,
                  padding: "1rem",
                  border: "1px solid",
                  borderColor: "border.default",
                  borderRadius: "0.5rem",
                  textAlign: "center",
                }}
                data-testid="product-quantity-input"
              />

              <Button
                onClick={() => changeQuantity(item.quantity + 1)}
                disabled={
                  (item.variant.inventory_quantity > 0 &&
                    item.quantity >= item.variant.inventory_quantity) ||
                  updating
                }
                sx={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  color: "text.disabled",
                  backgroundColor: "background.muted",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  borderColor: "border.default",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "background.hover",
                  },
                }}
              >
                +
              </Button>
            </Stack>
            {updating && <Spinner />}
          </div>
          <ErrorMessage error={error} data-testid="product-error-message" />
        </Table.Cell>
      )}

      {type === "full" && (
        <Table.Cell className="hidden small:table-cell">
          <LineItemUnitPrice item={item} region={region} style="tight" />
        </Table.Cell>
      )}

      <Table.Cell className="!pr-0">
        <span
          className={clx("!pr-0", {
            "flex flex-col items-end h-full justify-center": type === "preview",
          })}
        >
          {type === "preview" && (
            <span className="flex gap-x-1 ">
              <Text className="text-ui-fg-muted">{item.quantity}x </Text>
              <LineItemUnitPrice item={item} region={region} style="tight" />
            </span>
          )}
          <LineItemPrice item={item} region={region} style="tight" />
        </span>
      </Table.Cell>
    </Table.Row>
  );
};

export default Item;
