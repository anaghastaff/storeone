"use client";
import React from 'react'
import  Typography  from "@mui/material/Typography";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS
import Card from "@mui/material/Card";
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box'

export default function Error({
  error,
  reset
}) {
  console.log(error, error.message);

  const router = useRouter();
  if(error==='No response received:' || error==='Unauthorized'){
    router.push('/login')
  }
  if(error){
    router.push('/login')
  }
  return <Box sx={{minHeight:'50vh', display:'flex', flexDirection:'column', alignITems:'center', justifyContent:'center', gap:1}}>
      <Card sx={{
      p: 4,
      textAlign: "center"
    }}>
        <Typography mb={2}>Something went wrong!</Typography>
        {error==='No response received:' || error==='Unauthorized' && <Typography mb={2}>Unauthorized Access</Typography>}
        <Button color="error" variant="contained" onClick={() => reset()}>
          Try again
        </Button>
      </Card>
    </Box>;
}