import Search from "@mui/icons-material/Search";
import { FlexBox } from "components/flex-box"; // Local CUSTOM COMPONENTS

import AccountPopover from "./account-popover";
import NotificationsPopover from "./notification-popover"; // STYLED COMPONENTS

import { StyledInputBase } from "./styles";

const RightContent = () => {
  return <FlexBox alignItems="center" gap={2}>
      <StyledInputBase placeholder="Search anything..." startAdornment={<Search sx={{
      color: "grey.500"
    }} />} />

      <NotificationsPopover />
      <AccountPopover />
    </FlexBox>;
};

export default RightContent;