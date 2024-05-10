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

import useMuiTable from "hooks/useMuiTable"; // LOCAL CUSTOM COMPONENT

import ReviewRow from "../review-row";
import { tableHeading } from "../table-heading"; // CUSTOM DATA MODEL

// =============================================================================
const ReviewsPageView = ({
  reviews
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
    listData: reviews
  });
  return <Box py={4}>
      <H3 mb={2}>Product Reviews</H3>

      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 1000
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={reviews.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((review, index) => <ReviewRow review={review} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(reviews.length / rowsPerPage)} />
        </Stack>
      </Card>
    </Box>;
};

export default ReviewsPageView;