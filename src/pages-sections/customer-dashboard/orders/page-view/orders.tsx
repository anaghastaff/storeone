"use client";

import { Fragment } from "react";
import ShoppingBag from "@mui/icons-material/ShoppingBag"; // Local CUSTOM COMPONENTS

import OrderRow from "../order-row";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import type { Customer, Order } from "@medusajs/medusa";
import Container from '@mui/material/Container'
import { Button, Box } from "@mui/material";
import { H4, H3, H5 } from "components/Typography";
// ====================================================
const OrdersPageView = ({
  orders,
  customer
}:{
  orders: Order[] | null,
  customer:Omit<Customer, 'password-hash'> | null
}) => {
 
  return <Fragment>
      { 
      /* TITLE HEADER AREA */
    }
      <DashboardHeader orders={orders} customer={customer} Icon={ShoppingBag} title="Orders" href="/products" buttonText="Browse Products" />

      {
      /* ORDER LIST AREA */
    }
      { orders?.length ? orders?.map(order => <OrderRow order={order} key={order?.id} />) : 
        <Container sx={{height:'100%', display:'flex', gap:3, flexDirection:'column', alignItems:'center', justifyContent:'center'}} maxWidth="md">
            <Box>
             <H3>You have not ordered anything!</H3>
            

            </Box>
            <Box>
              <Button href="/furniture-shop" sx={{width:'fit-content'}} size="large" variant="contained">
                Browse-Products
              </Button>
            </Box>
        </Container>
      }

      {
      /* ORDERS PAGINATION */
    }
      <Pagination count={5} onChange={data => console.log(data)} />
    </Fragment>;
};

export default OrdersPageView;