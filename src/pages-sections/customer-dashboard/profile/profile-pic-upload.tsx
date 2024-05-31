import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CameraEnhance from "@mui/icons-material/CameraEnhance"; // GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
import type { Customer } from "@medusajs/medusa";

const ProfilePicUpload = ({customer}:{
  customer: Omit<Customer, 'password-hash'> | null
}) => {
  return <FlexBox alignItems="flex-end" mb={3}>
      <Avatar sx={{
      height: 64,
      width: 64,
      letterSpacing:'0.3rem',
      bgcolor:'parrotgreen',
      color:'common.white'
    }} >
      {customer?.first_name}{customer?.last_name}
    </Avatar>

      <IconButton size="small" component="label" color="secondary" htmlFor="profile-image" sx={{
      bgcolor: "grey.300",
      ml: -2.5
    }}>
        <CameraEnhance fontSize="small" />
      </IconButton>

      <Box type="file" display="none" accept="image/*" component="input" id="profile-image" onChange={e => console.log(e.target.files)} />
    </FlexBox>;
};

export default ProfilePicUpload;