"use client";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS
import React from 'react'
import { H1 } from "components/Typography";
import { FlexRowCenter } from "components/flex-box"; // ==============================================================
import { useRouter } from "next/navigation";
import { useState } from "react";
import Stack from '@mui/material/Stack'
// ==============================================================
export default function Error({
  error,
  reset
}) {

  const [err, setError] = useState(false)
  console.log(error, error.message);
  const router = useRouter();
  const handleError=()=>{
    router.back()
  }
  const handleRefresh=()=>{
    router.refresh()
  }
  if(typeof error === 'string'){
    setError(true)
  }
  return <FlexRowCenter height="100vh">
      <Card sx={{
      p: 4,
      textAlign: "center",
      gap:3,
    }}>
        <H1 mb={2}>{err ? error : "Something went wrong!"}</H1>
        <Stack gap={2}>
        <Button color="error" variant="outlined" onClick={()=>reset()}>
            Reset component
        </Button>
        <Button color="error" variant="outlined" onClick={handleError}>
            Go Back
        </Button>
        <Button color="error" variant="outlined" onClick={handleRefresh}>
            Refresh Page
        </Button>
        </Stack>
      </Card>
    </FlexRowCenter>;
}