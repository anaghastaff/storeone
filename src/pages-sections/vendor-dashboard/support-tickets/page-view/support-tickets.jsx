"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer"; // GLOBAL CUSTOM COMPONENTS

import Scrollbar from "components/Scrollbar";
import SearchInput from "components/SearchInput";
import { TableHeader, TablePagination } from "components/data-table"; // GLOBAL CUSTOM HOOK

import useMuiTable from "hooks/useMuiTable"; // Local CUSTOM COMPONENTS

import TicketRow from "../ticket-row";
import { tableHeading } from "../table-heading"; // CUSTOM DATA MODEL

// =============================================================================
const SupportTicketsPageView = ({
  tickets
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
    listData: tickets,
    defaultSort: "date"
  });
  return <Box py={4}>
      <SearchInput placeholder="Search Ticket.." sx={{
      mb: 4
    }} />

      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 800
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={tickets.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((ticket, index) => <TicketRow ticket={ticket} key={index} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(tickets.length / rowsPerPage)} />
        </Stack>
      </Card>
    </Box>;
};

export default SupportTicketsPageView;