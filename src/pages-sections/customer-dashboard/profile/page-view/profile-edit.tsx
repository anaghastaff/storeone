"use client";

import { Fragment } from "react";
import Card from "@mui/material/Card";
import Person from "@mui/icons-material/Person"; // Local CUSTOM COMPONENT

import ProfileEditForm from "../edit-form";
import ProfilePicUpload from "../profile-pic-upload";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL
import type { Customer } from "@medusajs/medusa";

// ===========================================================
const ProfileEditPageView = ({
  customer
}:{
  customer: Omit<Customer, 'password-hash'> | null
}) => {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader Icon={Person} href={`/profile`} title="Edit Profile" buttonText="Back to Profile" />

      <Card sx={{
      p: 3
    }}>
        {
        /* USER PROFILE PIC */
      }
        <ProfilePicUpload customer={customer}/>

        {
        /* PROFILE EDITOR FORM */
      }
        <ProfileEditForm customer={customer} />
      </Card>
    </Fragment>;
};

export default ProfileEditPageView;