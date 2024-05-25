import { Order } from "@medusajs/medusa"

import { Paragraph, H2, H1 } from "components/Typography"
import Stack from "@mui/material/Stack"
import { formatAmount } from "medusa/lib/util/prices"
import Card from '@mui/material/Card'
import Grid from "@mui/material/Unstable_Grid2"
import Divider from "@mui/material/Divider"

type ShippingDetailsProps = {
  order: Order
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  return (
    
    <Stack width="100%">
      <H1 
        sx={{display:'flex', mt:4, mb:2}}>
        Delivery
      </H1>
      
      {/* <Stack sx={{flexDirection:{xs:'column', md:'row'}}} columnGap={8} alignItems="flex-start"> */}
      <Grid container spacing={2} >
        <Grid xs={12} sm={4} sx={{bgcolor:'grey.200'}}>
        <Stack  data-testid="shipping-address-summary" minHeight="7rem">
          <Paragraph fontWeight="600" >
            Shipping Address
          </Paragraph>
          <Divider variant="fullWidth" sx={{borderBottom: '1px solid lightgrey', height:'1px', my:1 }} />
          <Paragraph fontWeight="500" color="grey.800">
            {order.shipping_address.first_name}{" "}
            {order.shipping_address.last_name}
          </Paragraph>
          <Paragraph fontWeight="500" color="grey.800">
            {order.shipping_address.address_1}{" "}
            {order.shipping_address.address_2}
          </Paragraph>
          <Paragraph fontWeight="500" color="grey.800">
            {order.shipping_address.postal_code}, {order.shipping_address.city}
          </Paragraph>
          <Paragraph fontWeight="500" color="grey.800">
            {order.shipping_address.country_code?.toUpperCase()}
          </Paragraph>
        </Stack>
        
        </Grid>
        <Grid xs={12} sm={4} sx={{bgcolor:'grey.200'}}>
        <Stack  data-testid="shipping-contact-summary" minHeight="7rem">
          <Paragraph fontWeight="600" >Contact</Paragraph>
          <Divider variant="fullWidth" sx={{borderBottom: '1px solid lightgrey', height:'1px', my:1 }} />
          <Paragraph fontWeight="500" color="grey.800">
            {order.shipping_address.phone}
          </Paragraph>
          <Paragraph fontWeight="500" color="grey.800">{order.email}</Paragraph>
        </Stack>
        </Grid>
        <Grid xs={12} sm={4} sx={{bgcolor:'grey.200'}}>
        <Stack  data-testid="shipping-method-summary" minHeight="7rem">
          <Paragraph fontWeight="600" >Method</Paragraph>
          <Divider variant="fullWidth" sx={{borderBottom: '1px solid lightgrey', height:'1px', my:1 }} />
          <Paragraph fontWeight="500" color="grey.800">
            {order.shipping_methods[0].shipping_option?.name} (
            {formatAmount({
              amount: order.shipping_methods[0].price,
              region: order.region,
              includeTaxes: false,
            })
              .replace(/,/g, "")
              .replace(/\./g, ",")}
            )
          </Paragraph>
        </Stack>
        </Grid>
        </Grid>
      {/* </Stack> */}
      <Divider sx={{mt:2}} />
    </Stack>
    
  )
}

export default ShippingDetails
