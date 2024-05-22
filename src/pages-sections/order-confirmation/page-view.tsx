import Link from "next/link";
import Image from "next/image";
import Container from "@mui/material/Container";
import { Order } from "@medusajs/medusa";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { H1, H3, H6, Paragraph } from "components/Typography"; // STYLED COMPONENT
import { formatAmount } from "medusa/lib/util/prices";
import { Wrapper, StyledButton } from "./styles";
import Box from "@mui/material/Box";
type OrderCompletedTemplateProps = {
  order: Order;
};

const OrderConfirmationPageView = ({ order }: OrderCompletedTemplateProps) => {
  return (
    <Container
      sx={{
        mt: 4,
        mb: 20,
      }}
    >
      <Wrapper>
        <Image
          width={116}
          height={116}
          alt="complete"
          src="/assets/images/illustrations/party-popper.svg"
        />
        <H1 lineHeight={1.1} mt="1.5rem">
          Your order is completed! -
        </H1>
        <H6>Order ID: {order?.id}</H6>
        <H6>
          Total Amount Paid:{" "}
          {formatAmount({
            amount: order?.total,
            region: order?.region,
            includeTaxes: true,
          })
            .replace(/,/g, "")
            .replace(/\./g, ",")}
        </H6>
        <Stack sx={{ mt: 1, mb: 1, p: 2 }}>
          <H3>Summary of Items Ordered</H3>
          <Card sx={{ bgcolor: "lightgrey", p: 1, width: "100%" }}>
            {order?.items?.map((item, ind) => (
              <Stack sx={{display:'flex', flexDirection:{md:'row'}}} columnGap="1rem">
                <Box sx={{ position: "relative", p: 1 }}>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Paragraph key={ind}>
                  {item.title}, qty x {item.quantity}, price -{" "}
                  {formatAmount({
                    amount: item.total,
                    region: order?.region,
                    includeTaxes: true,
                  })
                    .replace(/,/g, "")
                    .replace(/\./g, ",")}
                </Paragraph>
              </Stack>
            ))}
          </Card>
        </Stack>

        <Paragraph color="grey.800" mt="0.3rem">
          A confirmation email has been sent to {order?.email} with order
          details.
        </Paragraph>

        <StyledButton
          color="primary"
          disableElevation
          variant="contained"
          className="button-link"
          LinkComponent={Link}
          href="/furniture-shop"
        >
          Browse products
        </StyledButton>
      </Wrapper>
    </Container>
  );
};

export default OrderConfirmationPageView;
