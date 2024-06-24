'use client'
import React from 'react'
import { Breadcrumbs, Link, Typography, Box } from '@mui/material'
import NavigationNextIcon from '@mui/icons-material/NavigateNext'
import { usePathname, useRouter } from 'next/navigation'

function BreadCrumbs() {
    const pathname = usePathname();
    const segments = pathname.split('/')
    const router = useRouter();
    console.log("router",pathname)
  return (
    <Box sx={{pl:1}}>
        <Breadcrumbs aria-label="breadcrumbs"
        itemsAfterCollapse={1}
        separator={<NavigationNextIcon fontSize="small" />}
        >
        {
            segments.slice(2).map((link, index)=>(
                <Link key={index} underline='hover' href={link}>{link}</Link>
            ))
        }
        </Breadcrumbs>

    </Box>
  )
}

export default BreadCrumbs