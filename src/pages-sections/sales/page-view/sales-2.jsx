"use client";

import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENTS

import SaleNavbar from "../sales-navbar";
import ProductList from "../product-list";
import ProductPagination from "../product-pagination"; // GLOBAL CUSTOM COMPONENTS

import { Sticky } from "components/sticky";
import { SalesLayout } from "components/layouts/sales-layout"; // LOCAL CUSTOM HOOK

import useSales from "../use-sales"; // PRODUCT DATA LIST

import productDatabase from "data/product-database";

const SalesTwoPageView = () => {
  const {
    page,
    categories,
    productList,
    selectedCategory,
    PRODUCT_PER_PAGE,
    handlePageChange,
    handleCategoryChange
  } = useSales("men", 1); // CATEGORY NAV LIST

  const categoryNav = <Sticky fixedOn={0} scrollDistance={200}>
      <SaleNavbar categories={categories} selected={selectedCategory} onChangeCategory={handleCategoryChange} />
    </Sticky>;
  return <SalesLayout type="two" categoryNav={categoryNav}>
      <Container sx={{
      mt: 4
    }}>
        {
        /* PRODUCT LIST AREA */
      }
        <ProductList products={productList} />

        {
        /* PAGINATION AREA */
      }
        <ProductPagination page={page} perPage={PRODUCT_PER_PAGE} handlePageChange={handlePageChange} totalProducts={productDatabase.length} />
      </Container>
    </SalesLayout>;
};

export default SalesTwoPageView;