import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar"; // GLOBAL CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flex-box";
import { H3, H5, Paragraph, Small } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL
import type { Order,Customer } from "@medusajs/medusa";

// ==============================================================
const UserAnalytics = ({
  orders,
  customer
}:{
  orders: Order[],
  customer: Omit<Customer, 'password-hash'> | null
}) => {
  const INFO_LIST = [{
    title: "order",
    subtitle: "All Orders"
  }, {
    title: "payment",
    subtitle: "Awaiting Payments"
  }, {
    title: "fulfillment",
    subtitle: "Delivered"
  }, {
    title: "status",
    subtitle: "Awaiting Delivery"
  }];

  let paymentCount = 0;
  let shipmentCount = 0;
  const orderCount = orders?.length;
  let statusCount = 0;

  orders.forEach(order => {
    if(order?.payment_status === 'awaiting'){
      paymentCount++
    }
    if(order?.status === 'completed'){
      statusCount++
    }
    if(order?.fulfillment_status !== 'fulfilled'){
      shipmentCount++
    }
  })
  

  return <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Card sx={{
        gap: 2,
        height: "100%",
        display: "flex",
        p: "1rem 1.5rem",
        alignItems: "center"
      }}>
          <Avatar alt={orders[0]?.customer?.first_name}  sx={{
          height: 64,
          width: 64,
          letterSpacing:'0.2rem'
        }} >
          {orders[0]?.customer?.first_name}{orders[0]?.customer?.last_name}
          </Avatar>

          <FlexBetween flexWrap="wrap" flex={1}>
            <div>
              <H5>{`${orders[0]?.customer?.first_name} ${orders[0]?.customer?.last_name}`}</H5>

              <FlexBox alignItems="center" gap={1}>
                <Paragraph color="grey.600">Balance:</Paragraph>
                <Paragraph color="primary.main">{currency(500)}</Paragraph>
              </FlexBox>
            </div>

            <Paragraph color="grey.600" letterSpacing={3}>
              {customer?.has_account ? "Member" : "Guest"}
            </Paragraph>
          </FlexBetween>
        </Card>
      </Grid>

      <Grid item container spacing={3} md={6} xs={12}>
        {INFO_LIST.map(item => <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
            <Card sx={{
          height: "100%",
          display: "flex",
          p: "1rem 1.25rem",
          alignItems: "center",
          flexDirection: "column"
        }}>
              <H3 color="primary.main" my={0} fontWeight={600}>
                {
                item.title === "order" ? orderCount :
                item.title === 'payment' ? paymentCount :
                item.title === 'fulfillment' ? shipmentCount :
                item.title === 'status' ? statusCount : null
                }
              </H3>

              <Small color="grey.600" textAlign="center">
                {item.subtitle}
              </Small>
            </Card>
          </Grid>)}
      </Grid>
    </Grid>;
};

export default UserAnalytics;