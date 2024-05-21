"use client";
import PaymentButton from "../payment-button";
import { useSearchParams } from "next/navigation";
import { Cart } from "@medusajs/medusa";
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Review = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
}) => {
  const searchParams = useSearchParams();

  const isOpen = searchParams.get("step") === "review";

  const previousStepsCompleted =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    cart.payment_session;

  return (
    <Box className="bg-white">
      <Box className="flex flex-row items-center justify-between mb-6">
        <Typography variant="h4" fontSize="3xl" gutterBottom>
          Review
        </Typography>
      </Box>
      {isOpen && previousStepsCompleted && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyCotent: "center",
              rowGap: 1,
              width: "100%",
              mb: 6,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{ md: 1 }}
                variant="caption"
                align="left"
                paragraph
              >
                By clicking the Place Order button, you confirm that you have
                read, understand and accept our Terms of Use, Terms of Sale and
                Returns Policy and acknowledge that you have read Medusa
                Store&apos;s Privacy Policy.
              </Typography>
            </Box>
          </Box>
          <PaymentButton cart={cart} data-testid="submit-order-button" />
        </>
      )}
    </Box>
  );
};

export default Review;
