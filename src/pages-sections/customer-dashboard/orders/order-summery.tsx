import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider"; // GLOBAL CUSTOM COMPONENTS
import Image from "next/image";
import { Box, Icon } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import { H5, H6, Paragraph, Span } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL
import type { Order } from "@medusajs/medusa";
import { formatAmount } from "medusa/lib/util/prices";
import { paymentInfoMap } from "medusa/lib/constants";

// ==============================================================
function ListItem({ title, value }) {
  return (
    <FlexBetween mb={1}>
      <Paragraph color="grey.600">{title}</Paragraph>
      <H6>{value}</H6>
    </FlexBetween>
  );
}

const OrderSummery = ({
  order,
}: {
  order: Omit<Order, "password-hash"> | null;
}) => {
  return (
    <Grid container spacing={3}>
      {/* SHIPMENT ADDRESS SECTION */}
      <Grid item lg={6} md={6} xs={12}>
        <Card
          sx={{
            p: 3,
          }}
        >
          <H5 mt={0} mb={2}>
            Shipping Address
          </H5>

          <Paragraph fontSize={12} my={0}>
            {order?.shipping_address?.address_1}
          </Paragraph>
          <Paragraph fontSize={12} my={0}>
            {order?.shipping_address.address_2}
          </Paragraph>
          <Paragraph fontSize={12} my={0}>
            {order?.shipping_address.city}
          </Paragraph>
          <Paragraph fontSize={12} my={0}>
            {order?.shipping_address.country_code},
          </Paragraph>
          <Paragraph>{order?.shipping_address.postal_code}</Paragraph>
        </Card>
      </Grid>

      {/* TOTAL SUMMERY SECTION */}
      <Grid item lg={6} md={6} xs={12}>
        <Card
          sx={{
            p: 3,
          }}
        >
          <H5 mt={0} mb={2}>
            Total Summary
          </H5>

          <ListItem
            title="Subtotal:"
            value={formatAmount({
              amount: order?.subtotal,
              region: order?.region,
              includeTaxes: false,
            })}
          />
          <ListItem
            title="Tax:"
            value={formatAmount({
              amount: order?.item_tax_total,
              region: order?.region,
              includeTaxes: false,
            })}
          />
          <ListItem
            title="Shipping fee:"
            value={formatAmount({
              amount: order?.shipping_total,
              region: order?.region,
              includeTaxes: false,
            })}
          />
          <ListItem
            title="Shipping Tax:"
            value={formatAmount({
              amount: order?.shipping_tax_total,
              region: order?.region,
              includeTaxes: false,
            })}
          />
          <ListItem
            title="Discount:"
            value={formatAmount({
              amount: order?.discount_total,
              region: order?.region,
              includeTaxes: false,
            })}
          />

          <Divider
            sx={{
              mb: 1,
            }}
          />

          <FlexBetween mb={2}>
            <H6>Total</H6>
            <H6>
              {formatAmount({
                amount: order?.paid_total,
                region: order?.region,
                includeTaxes: true,
              })}
            </H6>
          </FlexBetween>

          <Span>Paid by</Span>
          <Span color="info.dark">
            {" "}
            {paymentInfoMap[order?.payments[0].provider_id].title}
          </Span>
          <Box
            sx={{
              position: "relative",
              width: 85,
              height: 30,
              objectFit: "scale-down",
            }}
          >
            {paymentInfoMap[order?.payments[0].provider_id].icon}
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OrderSummery;
