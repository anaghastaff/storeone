import { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // GLOBAL CUSTOM COMPONENT

import { Paragraph } from "components/Typography";

const CashPayment = () => {
  return <Fragment>
      <Paragraph fontWeight={700} mb={4}>
        Cash Payment
      </Paragraph>

      <TextField fullWidth color="info" size="medium" name="amount" label="Amount" defaultValue="$250" sx={{
      mb: 3
    }} />

      <Button type="submit" color="info" variant="contained">
        Save Changes
      </Button>
    </Fragment>;
};

export default CashPayment;