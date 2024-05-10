"use client";

import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENT

import { H3 } from "components/Typography"; // Local CUSTOM COMPONENT

import ProductForm from "../product-form";

const EditProductPageView = () => {
  const INITIAL_VALUES = {
    name: "",
    tags: "",
    stock: "",
    price: 0,
    category: [],
    sale_price: "",
    description: ""
  };

  const handleFormSubmit = () => {};

  return <Box py={4}>
      <H3 mb={2}>Edit Product</H3>

      <ProductForm initialValues={INITIAL_VALUES} handleFormSubmit={handleFormSubmit} />
    </Box>;
};

export default EditProductPageView;