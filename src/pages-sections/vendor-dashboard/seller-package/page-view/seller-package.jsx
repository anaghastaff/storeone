"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add"; // GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import { FlexBetween } from "components/flex-box"; // Local CUSTOM COMPONENT

import SellerPackageCard from "../package-card"; // CUSTOM DUMMY DATA

import { PACKAGES } from "../packages";

const SellerPackagePageView = () => {
  return <Box py={4}>
      <FlexBetween mb={2}>
        <H3>Seller Packages</H3>

        <Button color="info" variant="contained" startIcon={<Add />}>
          Add New Package
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        {PACKAGES.map(item => <Grid item xl={4} md={6} xs={12} key={item.id}>
            <SellerPackageCard listItem={item} />
          </Grid>)}
      </Grid>
    </Box>;
};

export default SellerPackagePageView;