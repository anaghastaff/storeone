import Link from "next/link";
import Image from "next/image";
import Container from "@mui/material/Container";
import { Order } from "@medusajs/medusa";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { H1, H3, H6, H2, Paragraph } from "components/Typography"; // STYLED COMPONENT
import { formatAmount } from "medusa/lib/util/prices";
import { Wrapper, StyledButton } from "./styles";
import Box from "@mui/material/Box";
import OrderDetails from "medusa/modules/order/components/order-details";
import Divider from "@mui/material/Divider";
import Items from "medusa/modules/order/components/items";
import CartTotals from "medusa/modules/common/components/cart-totals";
import ShippingDetails from "medusa/modules/order/components/shipping-details";
import PaymentDetails from "medusa/modules/order/components/payment-details";
import Typography from "@mui/material/Typography";

type OrderCompletedTemplateProps = {
  order: Order;
};

const OrderConfirmationPageView = ({ order }: OrderCompletedTemplateProps) => {
  return (
    
      <Wrapper >
        <Image
          width={116}
          height={116}
          alt="complete"
          src="/assets/images/illustrations/party-popper.svg"
        />
        
        <H1 lineHeight={1.1} mt="1.5rem" align="right" >
          Thank You!
        </H1 >
        
        <H2 lineHeight={1.1} mt="1.5rem" >
          Your order is complete! 
        </H2>
             
        
        <Divider />

        {/*Order details - date, order number, pass status-prop (optional) to display current order status */}
        <OrderDetails order={order} />

        <Divider />

        <H1 sx={{mb:1}}>
          Summary
        </H1>

        {/*Purchased Item List - thumbnail, qty, amount, variant */}

        <Items items={order.items} region={order.region} />
        <Divider />
        <CartTotals data={order} />
        <ShippingDetails order={order} />
        <PaymentDetails order={order} />

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
   
  );
};

export default OrderConfirmationPageView;
