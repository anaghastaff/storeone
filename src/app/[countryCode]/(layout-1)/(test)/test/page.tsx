import {  getRegion } from "medusa/lib/data";
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import UpdateCartRegion from "medusa/lib/util/update-cart-region";
import { Box,  Container } from "@mui/material"
import CheckoutView from "components/test/sub";



const Checkout = async ({params}:{
    params:{
        countryCode:string
    }
}) =>{
    
  const cart = await fetchCart();
    
  if(!cart){
    return null
  }
   
  const region = await getRegion(params.countryCode); 

  if(!region) return null

  const updatedCart = await UpdateCartRegion({region, cart })

  return <Container maxWidth="xl">
        <Box sx={{display:"flex", minHeight:'70vh', width:'100%', justifyContent:'center', alignItems:'center', gap:'20px'}}>
            <CheckoutView cart={updatedCart}  />
        </Box>
    </Container> 
}

export default Checkout