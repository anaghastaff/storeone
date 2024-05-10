"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // GLOBAL CUSTOM COMPONENTS

import { H3, H4, H5 } from "components/Typography"; // Local CUSTOM COMPONENT

import ReasonType from "../reason-type";

const RefundSettingPageView = () => {
  const [refundReq, setRefundReq] = useState("Confirm");
  const [refundTime, setRefundTime] = useState("120 Days");
  const TEXT_FIELD_STYLE = {
    fontSize: 14,
    fontWeight: 600,
    mb: 2
  };
  return <Box py={4}>
      <H3 mb={2}>Refund Setting</H3>

      <Card sx={{
      p: 3
    }}>
        {
        /* REFUND TIME AREA */
      }
        <H4 mb={3}>Refund Time</H4>

        <TextField fullWidth color="info" size="medium" value={refundTime} variant="outlined" label="Refund Request Generation Time" onChange={e => setRefundTime(e.target.value)} sx={TEXT_FIELD_STYLE} />

        <Button color="info" variant="contained">
          Update
        </Button>

        {
        /* ORDER STATUS AREA */
      }
        <H4 mb={3} mt={4}>
          Order Status
        </H4>

        <TextField fullWidth color="info" size="medium" value={refundReq} variant="outlined" label="Enabling Refund Request" onChange={e => setRefundReq(e.target.value)} sx={TEXT_FIELD_STYLE} />

        <Button color="info" variant="contained">
          Update
        </Button>

        <H4 mb={3} mt={4}>
          Refund Reasons
        </H4>

        {
        /* REASON TYPE AREA */
      }
        <H5 mb={2}>Reason Type</H5>
        <ReasonType />
      </Card>
    </Box>;
};

export default RefundSettingPageView;