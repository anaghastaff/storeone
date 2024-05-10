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

import SellerRow from "../seller-row";
import SearchArea from "../../search-box"; // TABLE HEAD COLUMN DATA

import { tableHeading } from "../table-heading"; // DATA TYPES

// =============================================================================
const SellersPageView = ({
  sellers
}) => {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: sellers
  });
  return <Box py={4}>
      <H3 mb={2}>Sellers</H3>

      <SearchArea handleSearch={() => {}} buttonText="Add New Seller" url="/admin/sellers" searchPlaceholder="Search Seller..." />

      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 1100
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={sellers.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((seller, index) => <SellerRow seller={seller} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(sellers.length / rowsPerPage)} />
        </Stack>
      </Card>
    </Box>;
};

export default SellersPageView;