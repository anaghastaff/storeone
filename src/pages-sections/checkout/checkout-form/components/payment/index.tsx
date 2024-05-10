"use client"

import type { Cart } from "@medusajs/medusa";

import { Edit } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from "next/navigation"
import type { CartWithCheckoutStep } from "medusa/types/global";

const Testpayment = ({cart}:{
    cart:CartWithCheckoutStep | null
}) =>{

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const isOpen = searchParams.get("step") === "payment"

    const handleEdit = () =>{
        router.push(pathname + "?step=payment", {scroll:false})
    }

    const handleSubmit = () => {

        router.push( "/cart", {scroll:false})
 }
 
    return (
    <Box sx={{ width: "50%", display: "flex", height: "30vh" }}>
      {!isOpen && cart?.shipping_address && (
        <Stack direction="row">
          <div>payment details is submitted</div>
          <Button onClick={handleEdit} endIcon={<Edit />}>
            Edit
          </Button>
        </Stack>
      )}

      {isOpen && (
        <Stack>
          <Box>{cart?.shipping_address_id}</Box>
          <div>{pathname}</div>
          <div>Edit payment details</div>
          <div>checkout_step value - {cart?.checkout_step}</div>
          <Button onClick={handleSubmit}>pay for your order</Button>
        </Stack>
      )}
    </Box>
    )
}
export default Testpayment