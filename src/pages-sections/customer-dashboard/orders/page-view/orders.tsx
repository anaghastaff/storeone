"use client";

import { Fragment } from "react";
import ShoppingBag from "@mui/icons-material/ShoppingBag"; // Local CUSTOM COMPONENTS
import OrderRow from "../order-row";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import type { Customer, Order } from "@medusajs/medusa";
import Container from "@mui/material/Container";
import { Button, Box, TableRow, TableCell, TableContainer } from "@mui/material";
import { H4, H3, H5 } from "components/Typography";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";

// ====================================================
const OrdersPageView = ({
  orders,
  customer,
}: {
  orders: Order[] | null;
  customer: Omit<Customer, "password-hash"> | null;
}) => {
  const [rowPerPage, rowPerPageChange] = useState(5);
  const [rows, rowsChange] = useState([]);
  const [page, pageChange] = useState(0);

  useEffect(() => {
    if (!orders) {
      return null;
    }
    rowsChange(orders);
  }, [orders]);
  const count = rows.length;

  const handlePageChange = (event, newPage) => {
    pageChange(newPage);
  };

  const handleRowsPerPage = (event) => {
    rowPerPageChange(+event.target.value);
    pageChange(0);
  };

  return (
    <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        orders={orders}
        customer={customer}
        Icon={ShoppingBag}
        title="Orders"
        href="/products"
        buttonText="Browse Products"
      />

      {/* ORDER LIST AREA */}
      <TableContainer>
        <Table>
          {rows?.length && (
            rows
              .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
              .map((row) => <OrderRow order={row} key={row?.id} />)
          ) 
            
          }
        </Table>

        {/* ORDERS PAGINATION */}

        
      </TableContainer>
      
      <TablePagination
          rowsPerPageOptions={[5, 10]}
          page={page}
          count={count}
          rowsPerPage={rowPerPage}
          component="div"
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPage}
        />

        {!orders && <Container
          sx={{
            height: "100%",
            display: "flex",
            gap: 3,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          maxWidth="md"
        >
          <Box>
            <H3>You have not ordered anything!</H3>
          </Box>
          <Box>
            <Button
              href="/furniture-shop"
              sx={{ width: "fit-content" }}
              size="large"
              variant="contained"
            >
              Browse-Products
            </Button>
          </Box>
        </Container>}
    </Fragment>
  );
};

export default OrdersPageView;
