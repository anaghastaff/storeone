"use client";
import type { CartWithCheckoutStep } from "medusa/types/global";
import { StorePostCartsCartReq } from "@medusajs/medusa";
import { ClickButton } from "./button";
import { cartUpdate } from "medusa/modules/checkout/actions";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function CheckoutView({ cart }: { cart: CartWithCheckoutStep }) {
  const [updating, setUpdating] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleUpdateAddress = async () => {
    const cartId = cart?.id;
    setResponse(null);
    setUpdating(true);

    const data = {
      shipping_address: {
        first_name: "amazing",
        last_name: "zoe",
        address_1: "",
        address_2: "",
        company: "",
        postal_code: "",
        city: "",
        country_code: "us",
        province: "",
        phone: "",
      },
      email: "anaghastaff@gmail.com",
    } as StorePostCartsCartReq;
    data.billing_address = data.shipping_address;

    const message = await cartUpdate(data)
      .catch((err) => {
        return err.message;
      })
      .finally(() => {
        setUpdating(false);
      });
    message && setResponse(message);
    
    };
    

  return (
    <>      
        <Typography color="success" align="center" variant="h3" sx={{p:2, m:2, bgolor:'#eee'}}>{response}</Typography>
        <ClickButton handleUpdateAddress={handleUpdateAddress} loading={updating} />
    </>
    
  );
}
