import { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import styled from "@mui/material/styles/styled";
import Done from "@mui/icons-material/Done"; // CUSTOM ICON COMPONENTS
import React from 'react'
import Delivery from "icons/Delivery";
import PackageBox from "icons/PackageBox";
import TruckFilled from "icons/TruckFilled"; // GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box"; // STYLED COMPONENTS
import { Order } from "@medusajs/medusa";

const StyledFlexbox = styled(FlexBetween)(({
  theme
}) => ({
  flexWrap: "wrap",
  marginTop: "2rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  },
  "& .line": {
    height: 4,
    minWidth: 50,
    flex: "1 1 0",
    [theme.breakpoints.down("sm")]: {
      flex: "unset",
      height: 50,
      minWidth: 4
    }
  }
}));
const StyledAvatar = styled(Avatar)(({
  theme
}) => ({
  top: -5,
  right: -5,
  width: 22,
  height: 22,
  position: "absolute",
  bgcolor: theme.palette.grey[200],
  color: theme.palette.success.main
}));

const OrderProgress = ({order}:{order:Omit<Order, 'beforeIsert'> | null }) => {
  const ORDER_STATUS = order?.fulfillment_status;
  const STEP_ICONS = [PackageBox, TruckFilled, Delivery];
  const ORDER_STATUS_LIST = ["placed", "requires_action", "shipped", "complete"];
  const statusIndex = ORDER_STATUS_LIST.indexOf(ORDER_STATUS);
  
  const shipped_at = new Date(order?.fulfillments[0]?.shipped_at)
  let estimated_Delivery_Date = null;
  
   if (shipped_at) {
    const shippedDate = shipped_at.getTime() + (5 * 24 * 60 * 60 * 1000)
    estimated_Delivery_Date = new Date(shippedDate).toLocaleDateString()
  }
  else{
    estimated_Delivery_Date = "Pending"
  }
  
  return <Card sx={{
    p: "2rem 1.5rem",
    mb: 4
  }}>
      <StyledFlexbox>
        {STEP_ICONS.map((Icon, ind) => <Fragment key={ind}>
            <Box position="relative">
              <Avatar alt="shipping" sx={{
            width: 64,
            height: 64,
            color: ind < statusIndex ? "white" : "info.main",
            bgcolor: ind < statusIndex ? "info.main" : "grey.300"
          }}>
                <Icon color="inherit" fontSize="large" />
              </Avatar>

              {ind < statusIndex ? <StyledAvatar sx={{bgcolor:'firebrick'}} alt="done">
                  <Done sx={{
              fontSize: 16, color:'white'
            }} />
                </StyledAvatar> : null}
            </Box>

            {ind < STEP_ICONS.length - 1 ? <Box className="line" bgcolor={ind < statusIndex ? "grey.700" : "grey.300"} /> : null}
          </Fragment>)}
      </StyledFlexbox>

      <FlexBox justifyContent={{
      xs: "center",
      sm: "flex-end"
    }}>
        <Paragraph p="0.5rem 1rem" textAlign="center" borderRadius="300px" color="primary.main" bgcolor="primary.light">
          Estimated Delivery Date <span>{estimated_Delivery_Date}</span>
        </Paragraph>
      </FlexBox>
    </Card>;
};

export default OrderProgress;