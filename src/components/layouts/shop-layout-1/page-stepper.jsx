"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENT

import Stepper from "./stepper";

const STEPPER_LIST = [{
  title: "Cart",
  disabled: false
}, {
  title: "Address",
  disabled: false
},
{
  title: "Delivery",
  disabled: false
},
, {
  title: "Payment",
  disabled: false
}, {
  title: "Review",
  disabled: true
}];

const PageStepper = ({
  children,
  
}) => {
  const [selectedStep, setSelectedStep] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const handleStepChange = step => {
    switch (step) {
      case 0:
        router.push("/cart");
        break;

      case 1:
        router.push("/checkout?step=address");
        break;

      case 2:
        router.push("/checkout?step=delivery");
        break;

      case 3:
        router.push("/checkout?step=payment");
        break;

        case 4:
        router.push("/order-confirmation");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/cart":
        setSelectedStep(1);
        break;

      case "/checkout?step=address":
        setSelectedStep(2);
        break;

      case "/checkout?step=delivery":
        setSelectedStep(3);
        break;
        
        case "/checkout?step=payment":
        setSelectedStep(4);
        break;

      default:
        break;
    }
  }, [pathname]);
  return <Container sx={{
    my: 4
  }}>
      <Box mb={3} display={{
      sm: "block",
      xs: "none"
    }}>
        <Stepper  stepperList={STEPPER_LIST} selectedStep={selectedStep} onChange={handleStepChange} />
      </Box>

      {children}
    </Container>;
};

export default PageStepper;