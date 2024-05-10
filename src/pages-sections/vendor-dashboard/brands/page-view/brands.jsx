"use client";

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

import BrandRow from "../brand-row";
import SearchArea from "../../search-box"; // CUSTOM DATA MODEL

// TABLE HEAD COLUMN DATA
import { tableHeading } from "../table-heading"; // =============================================================================

// =============================================================================
const BrandsPageView = ({
  brands
}) => {
  // RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID
  const filteredBrands = brands.map(item => ({
    id: item.id,
    slug: item.slug,
    name: item.name,
    logo: item.image,
    featured: item.featured
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
    listData: filteredBrands,
    defaultSort: "name"
  });
  return <Box py={4}>
      <H3 mb={2}>Product Brands</H3>

      <SearchArea handleSearch={() => {}} buttonText="Add Brand" url="/admin/brands/create" searchPlaceholder="Search Brand..." />

      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 600
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} numSelected={selected.length} rowCount={filteredList.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map(brand => <BrandRow key={brand.id} brand={brand} selected={selected} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(filteredList.length / rowsPerPage)} />
        </Stack>
      </Card>
    </Box>;
};

export default BrandsPageView;