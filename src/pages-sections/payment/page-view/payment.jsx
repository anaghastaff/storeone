"use client";

import Grid from "@mui/material/Grid"; // Local CUSTOM COMPONENTS

import PaymentForm from "../payment-form";
import PaymentSummary from "../payment-summery";

const PaymentPageView = () => {
  return <Grid container flexWrap="wrap-reverse" spacing={3}>
      <Grid item lg={8} md={8} xs={12}>
        <PaymentForm />
      </Grid>

     
    </Grid>;
};

export default PaymentPageView;