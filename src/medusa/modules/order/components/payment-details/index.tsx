import { Order } from "@medusajs/medusa";
import { Container, Heading, Text } from "@medusajs/ui";
import { formatAmount } from "medusa/lib/util/prices";

import { paymentInfoMap } from "medusa/lib/constants";
import Divider from "@mui/material/Divider";
import { H1, Span, Paragraph } from "components/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
type PaymentDetailsProps = {
  order: Order;
};

const PaymentDetails = ({ order }: PaymentDetailsProps) => {
  const payment = order.payments[0];
  const date = payment.created_at.toString().split("T");
  return (
    
      
      <Box sx={{width:'100%'}}>
      <H1 sx={{ display: "flex", mt: 3, mb: 1 }}>Payment</H1>
        {payment && (
            <Grid container spacing={2} sx={{bgcolor:'#E0F4FF'}}>
              <Grid xs={12} sm={6}>
            <Stack justifyContent="flex-start" width="100%">
              <Typography variant="subtitle1">Payment method</Typography>
              <Divider
              variant="fullWidth"
                sx={{ height: 1, borderBottom: "1px solid lightgrey", mb:1 }}
              />
              <Paragraph data-testid="payment-method">
                {paymentInfoMap[payment.provider_id].title}
              </Paragraph>
            </Stack>
            </Grid>
            <Grid xs={12} sm={6}>
            <Stack>
              <Typography variant="subtitle1">Payment details</Typography>
              <Divider
                sx={{ height: 1, borderBottom: "1px solid lightgrey", mb:1 }}
              />
              <Stack >
                <Box
                  sx={{
                    objectFit: "cover",
                    position: "relative",
                    width: { xs: 180 },
                  }}
                >
                  {paymentInfoMap[payment.provider_id].icon}
                </Box>
                <Typography data-testid="payment-amount" sx={{ gap: 2 }}>
                  {payment.provider_id === "stripe" &&
                  payment.data.card_last4 ? (
                    `**** **** **** ${payment.data.card_last4}`
                  ) : (
                    <Span
                      color="info.dark"
                      fontWeight="bold"
                      data-testid="payment-amount"
                    >
                      {formatAmount({
                        amount: payment.amount,
                        region: order.region,
                        includeTaxes: false,
                      })}{" "}
                    </Span>
                  )}
                  paid on {new Date(payment.created_at).toString()}
                </Typography>
              </Stack>
            </Stack>
            </Grid>
            </Grid>
        )}
        <Divider sx={{ mt: 2 }} />
      </Box>
      
    
  );
};

export default PaymentDetails;
