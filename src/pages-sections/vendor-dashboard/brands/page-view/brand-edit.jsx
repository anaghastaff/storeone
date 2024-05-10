"use client";

import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENT

import { H3 } from "components/Typography"; // Local CUSTOM COMPONENT

import BrandForm from "../brand-form";

const EditBrandPageView = () => {
  const INITIAL_VALUES = {
    name: "",
    featured: false
  };

  const handleFormSubmit = () => {};

  return <Box py={4}>
      <H3 mb={2}>Edit Brand</H3>

      <BrandForm initialValues={INITIAL_VALUES} handleFormSubmit={handleFormSubmit} />
    </Box>;
};

export default EditBrandPageView;