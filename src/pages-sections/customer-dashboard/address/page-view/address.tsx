"use client";

import React, { useState, Fragment, useEffect } from "react";
import Place from "@mui/icons-material/Place"; // Local CUSTOM COMPONENT

import Pagination from "../../pagination";
import AddressListItem from "../address-item";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import type { Customer, Region } from "@medusajs/medusa";
import { notFound } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography } from "@mui/material";
import { deleteCustomerShippingAddress } from "medusa/modules/account/actions";
import { useSnackbar, VariantType } from "notistack";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import { Button, Box, TableRow, TableContainer } from "@mui/material";
import { H4, H3, H5 } from "components/Typography";
// =======================================================
type AddressBookProps = {
  customer: Omit<Customer, "password_hash">;
  region: Region;
};

const AddressPageView: React.FC<AddressBookProps> = ({ customer, region }) => {
  if (!customer || !region) {
    notFound();
  }
  const shippingAddressList = customer?.shipping_addresses;
  const { enqueueSnackbar } = useSnackbar();
  const [allAddress, setAllAddress] = useState(shippingAddressList); // HANDLE ADDRESS DELETE
  const [removing, setRemoving] = useState({});

  const [rowPerPage, rowPerPageChange] = useState(1);
  const [rows, rowsChange] = useState([]);
  const [page, pageChange] = useState(0);

  useEffect(() => {
    if (!allAddress) {
      return null;
    }
    rowsChange(allAddress);
  }, [allAddress]);
  const count = rows.length;

  const handlePageChange = (event, newPage) => {
    pageChange(newPage);
  };

  const handleRowsPerPage = (event) => {
    rowPerPageChange(+event.target.value);
    pageChange(0);
  };
  const handleAddressDelete = async (id) => {
    setRemoving((prev) => ({
      ...prev,
      [id]: true,
    }));
    const state = await deleteCustomerShippingAddress(id);
    if (state.success === true) {
      enqueueSnackbar("Address Deleted", { variant: "success" });
    }
    if (state.success === false && state.error) {
      enqueueSnackbar("Failed to delete. Retry again", { variant: "error" });
    }
    setAllAddress(allAddress.filter((address) => address?.id !== id));
  };

  return (
    <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        Icon={Place}
        href="/address/new-address"
        title="My Addresses"
        buttonText="Add New Address"
      />
      <TableContainer>
        <Table>
          {/* ALL ADDRESS LIST AREA */}
          {rows &&
            rows
              .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
              .map((address) => (
                <AddressListItem
                  key={address?.id}
                  address={address}
                  handleAddressDelete={handleAddressDelete}
                  removing={removing}
                />
              ))}

          {/* PAGINATION AREA */}
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[1,2,3,4,5]}
          page={page}
          count={count}
          rowsPerPage={rowPerPage}
          component="div"
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPage}
        />
    </Fragment>
  );
};

export default AddressPageView;
