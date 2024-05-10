import { Fragment } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider"; // CUSTOM COMPONENTS

import { Span } from "components/Typography"; // =======================================

// =======================================
const SocialButtons = props => {
  return <Fragment>
      {
      /* DIVIDER */
    }
      <Box my={3}>
        <Divider>
          <Span lineHeight={1} px={1}>
            or
          </Span>
        </Divider>
      </Box>

      {
      /* FACEBOOK BUTTON */
    }
      <Button fullWidth size="large" className="facebookButton" sx={{
      fontSize: 12
    }} startIcon={<Image alt="facebook" src={require("../../../public/assets/images/icons/facebook-filled-white.svg")} />}>
        Continue with Facebook
      </Button>

      {
      /* GOOGLE BUTTON */
    }
      <Button fullWidth size="large" className="googleButton" sx={{
      fontSize: 12
    }} startIcon={<Image alt="google" src={require("../../../public/assets/images/icons/google-1.svg")} />}>
        Continue with Google
      </Button>
    </Fragment>;
};

export default SocialButtons;