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

import useMuiTable from "hooks/useMuiTable"; // Local CUSTOM COMPONENTS

import PayoutRow from "../payout-row"; // TABLE HEAD COLUMN DATA

import { tableHeading } from "../table-heading"; // DATA TYPES

// =============================================================================
const PayoutsPageView = ({
  payouts
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
    listData: payouts,
    defaultSort: "no"
  });
  return <Box py={4}>
      <H3 mb={2}>Payouts</H3>

      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 800
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={payouts.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((payout, index) => <PayoutRow payout={payout} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(payouts.length / rowsPerPage)} />
        </Stack>
      </Card>
    </Box>;
};

export default PayoutsPageView;