'use server'
import { cookies } from 'next/headers';

// Check if the cookie is set correctly
export const getCartID = () =>{
    
const id = cookies().get("_medusa_cart_id")?.value;


if (id === undefined) {
    // console.log("Cookie 'newcart_id' is not set or was set incorrectly.");
} else {
    // console.log("Cookie 'newcart_id' is set correctly.");
}
    return id;

}
