import { Order } from "@medusajs/medusa"
import { Span, Paragraph } from "components/Typography"
import Box from "@mui/material/Box"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <Box>
      <Paragraph sx={{mt:1}}>
        We have sent the order confirmation details to{" "}
        <Span fontWeight={500} color="info.dark" data-testid="order-email">
          {order.email}
        </Span>
        .
      </Paragraph>
      <Paragraph sx={{mt:2}}>
        Order date: <Span fontWeight="medium" data-testid="order-date">{new Date(order.created_at).toDateString()}</Span>
      </Paragraph>
      <Paragraph color="info" sx={{mt:2}}>
        Order number: <Span fontWeight="medium" data-testid="order-id">{order.display_id}</Span>
      </Paragraph>

      <Box sx={{display:'flex', flexDirection:'column', mt:4, columnGap:4}}>
        {showStatus && (
          <>
            <Paragraph>
              Order status:{" "}
              <Span sx={{color:"grey.600"}} data-testid="order-status">
                {formatStatus(order.fulfillment_status)}
              </Span>
            </Paragraph>
            <Paragraph>
              Payment status:{" "}
              <Span sx={{color:"grey.600"}} sata-testid="order-payment-status">
                {formatStatus(order.payment_status)}
              </Span>
            </Paragraph>
          </>
        )}
      </Box>
    </Box>
  )
}

export default OrderDetails
