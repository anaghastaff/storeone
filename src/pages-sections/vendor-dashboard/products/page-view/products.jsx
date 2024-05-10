"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer"; // GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import Scrollbar from "components/Scrollbar";
import { TableHeader, TablePagination } from "components/data-table"; // GLOBAL CUSTOM HOOK

import useMuiTable from "hooks/useMuiTable"; // Local CUSTOM COMPONENT

import ProductRow from "../product-row";
import SearchArea from "../../search-box"; // CUSTOM DATA MODEL

// TABLE HEADING DATA LIST
const tableHeading = [{
  id: "name",
  label: "Name",
  align: "left"
}, {
  id: "category",
  label: "Category",
  align: "left"
}, {
  id: "brand",
  label: "Brand",
  align: "left"
}, {
  id: "price",
  label: "Price",
  align: "left"
}, {
  id: "published",
  label: "Published",
  align: "left"
}, {
  id: "action",
  label: "Action",
  align: "center"
}]; // =============================================================================

// =============================================================================
const ProductsPageView = ({
  products
}) => {
  const [productList, setProductList] = useState([...products]); // RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID

  const filteredProducts = productList.map(item => ({
    id: item.id,
    slug: item.slug,
    name: item.title,
    brand: item.brand,
    price: item.price,
    image: item.thumbnail,
    published: item.published,
    category: item.categories[0]
  }));
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: filteredProducts
  });
  return <Box py={4}>
      <H3 mb={2}>Product List</H3>

      <SearchArea handleSearch={() => {}} buttonText="Add Product" url="/admin/products/create" searchPlaceholder="Search Product..." />

      <Card>
        <Scrollbar autoHide={false}>
          <TableContainer sx={{
          minWidth: 900
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={products.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((product, index) => <ProductRow key={index} product={product} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(products.length / rowsPerPage)} />
        </Stack>
      </Card>
    </Box>;
};

export default ProductsPageView;