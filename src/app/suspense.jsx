import { CircularProgress, Stack, Typography } from '@mui/material'
import {Suspense} from 'react'
import React from 'react'

export default function Suspense_Mod({children}){
    <Suspense fallback={
        <Stack gap="3" justifyContent="flex-start" alignItems="center" >
            <Typography variant="h5" text="center" color="primary" >Loading data...</Typography >
            <CircularProgress color="primary" />
        </Stack>
      }>
        {children}
        </Suspense>  
}