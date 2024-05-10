import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENTS

import Google from "@mui/icons-material/Google";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import { FlexRowCenter } from "components/flex-box";
import Facebook from "icons/Facebook";

const SocialIcons = () => {
  return <FlexRowCenter mt={4} mb={2}>
      <IconButton>
        <Facebook sx={{
        fontSize: 20,
        color: "grey.900"
      }} />
      </IconButton>

      <IconButton>
        <Twitter sx={{
        fontSize: 20,
        color: "grey.900"
      }} />
      </IconButton>

      <IconButton>
        <Instagram sx={{
        fontSize: 20,
        color: "grey.900"
      }} />
      </IconButton>

      <IconButton>
        <Google sx={{
        fontSize: 20,
        color: "grey.900"
      }} />
      </IconButton>
    </FlexRowCenter>;
};

export default SocialIcons;