"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; // CUSTOM GLOBAL COMPONENTS

import { FlexBox, FlexRowCenter } from "components/flex-box";
import { H4 } from "components/Typography";

const NotFound = () => {
  const router = useRouter();
  return <FlexRowCenter px={2} minHeight="100vh" flexDirection="column">
      <Box maxWidth={320} width="100%" mb={3}>
        <Image alt="Not Found!" src={require("../../../public/assets/images/illustrations/404.svg")} style={{
        width: "100%",
        height: "auto"
      }} />
      </Box>

      <H4 >Unauthorized Access</H4>

      <FlexBox flexWrap="wrap" gap={2}>
        
        <Button variant="outlined" color="primary" onClick={() => router.back()}>
          Go Back
        </Button>

        <Button variant="contained" color="primary" onClick={() => router.push("/")}>
          Go to Home
        </Button>
        <Button variant="contained" color="primary" onClick={() => router.push("/login")}>
         Login
        </Button>
      </FlexBox>
    </FlexRowCenter>;
};

export default NotFound;