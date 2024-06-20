"use client";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS
import React from 'react'
import { H1 } from "components/Typography";
import { FlexRowCenter } from "components/flex-box";
import { useRouter } from "next/navigation";
// ==============================================================

// ==============================================================
export default function Error({
  error,
  reset
}) {
  console.log(error, error.message);
  const router = useRouter();
  const handleError=()=>{    
    router.push('/furniture-shop')

  }
  return <FlexRowCenter height="100vh">
      <Card sx={{
      p: 4,
      textAlign: "center"
    }}>
        <H1 mb={2}>Something went wrong!</H1>
        <Button color="error" variant="contained" onClick={handleError}>
          Try again
        </Button>
      </Card>
    </FlexRowCenter>;
}