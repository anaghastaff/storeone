"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik, FormikErrors } from "formik";
import axios from "axios";

import ProductComment from "./product-comment";

import { FlexBox } from "components/flex-box";
import { H2, H5, H6 } from "components/Typography";
import { useEffect, useState } from "react";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { FetchReviews } from "./fetch-review";
import { useSnackbar } from "notistack";
import { SubmitButton } from "medusa/modules/common/components/submit-button";
import SubmitProductReview from "./submit-review";

export interface Review {
  product_id: string;
  title: string;
  user_name: string;
  rating: number;
  content: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse {
  status: string;
  data: Review[];
  message: string;
}

const initialValues = {
  title: "",
  user_name: "",
  rating: 1,
  content: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  user_name: yup.string().required("User name is required"),
  rating: yup.number().min(1).max(5).required("Rating is required"),
  content: yup.string().required("Content is required"),
});

const ProductReview = ({ product, response }: { product: PricedProduct, response:ApiResponse }) => {
  const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
  const [fetchReviews, setFetchReviews] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("values entered by user", values);
      try {
        setPending(true);
        const response = await fetch(
          `/api/reviews/${product.id}`,
          {
            method:'POST',
            body: JSON.stringify(values),
          }
        );

        resetForm();
        setPending(true);
        if (!response.ok) {
          console.log("Failed to submit review", response.statusText);
          enqueueSnackbar("Failed to submit review", { variant: "error" });
        }
        if (response.ok) {
          enqueueSnackbar("your review has been submitted", {
            variant: "success",
          });
        }
      } catch (error) {
        console.error("Error submitting review", error);
      }
    },
  });

  return (
    <FlexBox flexDirection="column">
       <FlexBox flexDirection="column" gap={1}>
      <H6 fontWeight="600" mx={3}>
        Write a Review for this product
      </H6>

     <SubmitProductReview product={product} response={response}/>
     </FlexBox>
      {response ? (
        response?.data?.map((item: Review) => (
          <ProductComment {...item} key={item.id} />
        ))
      ) : (
        <H2 fontWeight="600" mx={3} mb={2.5}>
          There are no reviews for this product
        </H2>
      )}
     
    </FlexBox>
  );
};

export default ProductReview;
