"use client";

import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENT

import { H3 } from "components/Typography"; // Local CUSTOM COMPONENT

import ProductForm from "../product-form";

const ProductCreatePageView = () => {
  const INITIAL_VALUES = {
    name: "",
    tags: "",
    stock: "",
    price: "",
    category: [],
    sale_price: "",
    description: ""
  };

  const handleFormSubmit = values => {
    console.log(values);
  };

  return <Box py={4}>
      <H3 mb={2}>Add New Product</H3>

      <ProductForm initialValues={INITIAL_VALUES} handleFormSubmit={handleFormSubmit} />
    </Box>;
};

export default ProductCreatePageView;