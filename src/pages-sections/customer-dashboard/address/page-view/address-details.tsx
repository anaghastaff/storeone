"use client";

import { Fragment } from "react";
import Card from "@mui/material/Card";
import Place from "@mui/icons-material/Place"; // Local CUSTOM COMPONENT

import AddressForm from "../address-form";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import type { Address, Region } from "@medusajs/medusa";
import NewShippingAddressForm from "../new-address-form";

// =============================================================
const AddressDetailsPageView = ({
  address,
  region,
  edit,
  add,
}:{
  address: Address,
  region:Region,
  edit?:boolean,
  add?:boolean,
}) => {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader Icon={Place} href="/address" title={add ? "Add Address" : "Edit Address"} buttonText="Back to Address" />

      {
      /* FORM AREA */
    }
      <Card sx={{
      p: 3,
      pt: 4
    }}>
       {edit && <AddressForm address={address} region={region}/>}
       {add && <NewShippingAddressForm address={address} region={region}/>}
      </Card>
    </Fragment>;
};

export default AddressDetailsPageView;