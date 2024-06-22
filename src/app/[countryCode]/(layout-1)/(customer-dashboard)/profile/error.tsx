"use client";
import React from 'react'
import  Typography  from "@mui/material/Typography";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS
import Card from "@mui/material/Card";
import Box from '@mui/material/Box'
export default function Error({
  error,
  reset
}) {
  console.log(error, error.message);

  return <Box sx={{minHeight:'70vh', display:'flex', flexDirection:'column', gap:1}}>
      <Card sx={{
      p: 4,
      textAlign: "center"
    }}>
        <Typography mb={2}>Something went wrong!</Typography>

        <Button color="error" variant="contained" onClick={() => reset()}>
          Try again
        </Button>
      </Card>
    </Box>;
}