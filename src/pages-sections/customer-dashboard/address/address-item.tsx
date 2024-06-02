'use client'
import Link from "next/link";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENTS
import Stack from '@mui/material/Stack'
import Edit from "@mui/icons-material/Edit";
import Box from '@mui/material/Box'
import Delete from "@mui/icons-material/Delete";
import { Paragraph, Span } from "components/Typography"; // Local CUSTOM COMPONENT
import CircularProgress from  '@mui/material/CircularProgress'
import TableRow from "../table-row"; // CUSTOM DATA MODEL
import { Address } from "@medusajs/medusa";
import Tooltip  from "@mui/material/Tooltip";
import { useState } from "react";
// ==============================================================
const AddressListItem = ({
  address,
  handleAddressDelete,
  removing
}:{
  address: Address,
  handleAddressDelete: (id:string)=>void,
  removing:{}
}) => {
  const {
    address_1,
    address_2,
    city,
    phone,
    postal_code,
    country,
    id
  } = address || {};
    const addressId = id;
      

  return <Box>
      <TableRow>
        <Stack>
        <Span ellipsis>{address_1}</Span>
        <Span ellipsis>{address_2}</Span>
        <Span ellipsis>{`${city}, ${postal_code}`}</Span>
        <Span ellipsis>{phone}</Span>
        <Span ellipsis>{country}</Span>
        </Stack>
       <div></div>
        <div></div>
        <Stack direction="row" color="grey.600">
        <Tooltip title="Edit" arrow >
        <Link href={`/address/${addressId}`}>
          <IconButton>
            <Edit fontSize="small" color="inherit" />
          </IconButton>
          </Link>
          </Tooltip>
         {  removing[id] ? <IconButton><CircularProgress size={15}/></IconButton> :
         <Tooltip title="Delete Address" arrow>
          <IconButton      
          onClick={          
          (e)=>{       
            // e.preventDefault()
            // e.stopPropagation()
            handleAddressDelete(id)}
        }>
            <Delete fontSize="small" color="inherit" />
          </IconButton>
          </Tooltip>}
        </Stack>
      </TableRow>
    </Box>;
};

export default AddressListItem;