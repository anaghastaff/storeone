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
import Loading from "app/[countryCode]/(layout-1)/furniture-shop/order-confirmation/loading";
import { Suspense } from "react";

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
           {/* <H2>
            {order?.id}
          
            </H2>   */}
        
        <Divider />

        {/*Order details - date, order number, pass status-prop (optional) to display current order status */}
            <Suspense fallback={<Loading />}>
        <OrderDetails order={order} />
        </Suspense>
        <Divider />

        <H1 sx={{mb:1}}>
          Summary
        </H1>

        {/*Purchased Item List - thumbnail, qty, amount, variant */}
        <Suspense fallback={<Loading />}>
        <Items items={order.items} region={order.region} />
        </Suspense>
        <Divider />
        <Suspense fallback={<Loading />}>
        <CartTotals data={order} />
        </Suspense>
        <Suspense fallback={<Loading />}>
        <ShippingDetails order={order} />
        </Suspense>
        <Suspense fallback={<Loading />}>
        <PaymentDetails order={order} />
        </Suspense>

        <StyledButton
          color="primary"
          disableElevation
          variant="contained"
          className="button-link"
          LinkComponent={Link}
          href="/furniture-shop/categories/all-products"
        >
          Browse products
        </StyledButton>
      </Wrapper>
   
  );
};

export default OrderConfirmationPageView;
