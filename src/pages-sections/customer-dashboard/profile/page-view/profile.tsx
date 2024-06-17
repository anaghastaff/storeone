"use client";

import { Fragment } from "react";
import Person from "@mui/icons-material/Person"; // Local CUSTOM COMPONENT

import UserInfo from "../user-info";
import UserAnalytics from "../user-analytics";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import {Order, Customer} from '@medusajs/medusa'
// ============================================================
const ProfilePageView = ({
  orders,
  customer
}:{
  orders: Order[],
  customer: Omit<Customer, 'password-hash'> | null,
}) => {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader Icon={Person} title={`${customer?.first_name}'s Profile`} buttonText="Edit Profile" href={`/profile/${customer?.id}`} />

      {
      /* USER PROFILE INFO */
    }
      <UserAnalytics orders={orders} customer={customer}/>

      {
      /* USER PROFILE INFO */
    }
      <UserInfo customer={customer} />
    </Fragment>;
};

export default ProfilePageView;