import Image from "next/image"
import paypal from "../../../../../public/assets/images/logos/paypal.png"
const PayPal = () => {
  return (
    <Image src={paypal} alt="paypal logo" fill quality={100} style={{objectFit:"contain"}} />
  )
}

export default PayPal
