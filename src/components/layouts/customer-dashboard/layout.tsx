"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // Local CUSTOM COMPONENTS
import React from 'react';
import Navigation from "./navigation";
import type { Customer, Order } from "@medusajs/medusa";
/**
 *  Used in:
 *  1. wish-list page
 *  2. address and address-details page
 *  3. orders and order-details page
 *  4. payment-methods and payment-method-details page
 *  5. profile and edit profile page
 *  6. support-tickets page
 */
type CustomerDashboardLayoutProps = {
  children: React.ReactNode,
  customer: Omit<Customer, 'password-hash'> | null,
  orders: Order[] | null
}
const CustomerDashboardLayout:React.FC<CustomerDashboardLayoutProps> = ({
  children,
  customer,
  orders
}) => <Container sx={{
  my: 4
}}>
    <Grid container spacing={3}>
      <Grid item lg={3} xs={12} sx={{
      display: {
        xs: "none",
        sm: "none",
        md: "block"
      }
    }}>
        <Navigation customer={customer} orders={orders} />
      </Grid>

      <Grid item lg={9} xs={12}>
        {children}
      </Grid>
    </Grid>
  </Container>;

export default CustomerDashboardLayout;