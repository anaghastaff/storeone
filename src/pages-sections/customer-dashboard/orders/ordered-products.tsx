import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import format from "date-fns/format"; // GLOBAL CUSTOM COMPONENTS

import { H6, Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // CUSTOM DATA MODEL
import type { Order } from "@medusajs/medusa";
import { formatAmount } from "medusa/lib/util/prices";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import SubmitProductReview from "pages-sections/product-details/submit-review";
// ==============================================================
const OrderedProducts = ({
  order,
  products,
}: {
  order: Omit<Order, "beforeInsert"> | null;
  products: PricedProduct[];
}) => {
  const { id, created_at, items } = order || {};
  return (
    <Card
      sx={{
        p: 0,
        mb: "30px",
      }}
    >
      <FlexBetween px={3} py={2} flexWrap="wrap" bgcolor="grey.200">
        <Item title="Order ID:" value={id} />
        <Item
          title="Placed on:"
          value={new Date(created_at).toLocaleDateString()}
        />
        <Item title="Delivered on:" value={order?.status} />
      </FlexBetween>

      {items?.map((item, ind) => {
        const product = products?.find(
          (p) => p?.id === item?.variant?.product_id
        );

        return (
          <FlexBetween px={2} py={1} flexWrap="wrap" key={ind}>
            <FlexBox gap={2.5} alignItems="center">
              <Avatar
                alt={item?.title}
                src={item?.thumbnail} 
                sx={{
                  height: 64,
                  width: 64,
                }}
              />

              <div>
                <H6>{item?.title}</H6>
                <Paragraph color="grey.600">
                  {formatAmount({
                    amount: item?.unit_price,
                    region: order?.region,
                    includeTaxes: false,
                  })}{" "}
                  x {item?.quantity}
                </Paragraph>
              </div>
            </FlexBox>

            <Paragraph color="grey.800" ellipsis>
              Product Variant: {item?.variant?.title}
            </Paragraph>
            {}
            <SubmitProductReview productId={product.id} variant="text">
      Write a Review
     </SubmitProductReview>
          </FlexBetween>
        );
      })}
    </Card> 
  );
};

function Item({ title, value }: { title: string; value: string }) {
  return (
    <FlexBox gap={1} alignItems="center">
      <Paragraph color="grey.600">{title}</Paragraph>
      <Paragraph>{value}</Paragraph>
    </FlexBox>
  );
}

export default OrderedProducts;
