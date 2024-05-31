"use client";

import React, { useState, Fragment } from "react";
import Place from "@mui/icons-material/Place"; // Local CUSTOM COMPONENT

import Pagination from "../../pagination";
import AddressListItem from "../address-item";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import type { Customer, Region } from "@medusajs/medusa";
import { notFound } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Typography } from "@mui/material";
import { deleteCustomerShippingAddress } from "medusa/modules/account/actions";
// =======================================================
type AddressBookProps = {
  customer: Omit<Customer, "password_hash">
  region: Region
}

const AddressPageView:React.FC<AddressBookProps> = ({
 customer,
 region,
}) => {

  if(!customer || ! region){
    notFound()
  }
  const shippingAddressList = customer?.shipping_addresses;

  const [allAddress, setAllAddress] = useState(shippingAddressList); // HANDLE ADDRESS DELETE
  const [page, setPage] = useState(1);
  const [removing, setRemoving] = useState(false)
 
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) =>{
    setPage(value)
  }
  const handleAddressDelete = async (id) => {
    setRemoving(true)
    await deleteCustomerShippingAddress(id)
    setRemoving(false)
    setAllAddress(allAddress.filter(address => address?.id !== id));
    
  };


  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader Icon={Place} href="/address/new-address" title="My Addresses" buttonText="Add New Address" />

      {
      /* ALL ADDRESS LIST AREA */
    }
      {allAddress.map(address => <AddressListItem key={address?.id} address={address} handleDelete={handleAddressDelete} removing={removing} />)}

      {
      /* PAGINATION AREA */
    } <Typography>Page: {page}</Typography>
      <Pagination page={page} count={5} onChange={handlePageChange} slots={{previous:ArrowBackIcon, next:ArrowForwardIcon}} />
    </Fragment>;
};

export default AddressPageView;