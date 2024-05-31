import format from "date-fns/format";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery"; // GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
import { Small, Span } from "components/Typography"; // CUSTOM DATA MODEL
import type { Customer } from "@medusajs/medusa";
import type { Theme } from "@mui/material";

// ==============================================================
const UserInfo = ({
  customer
}:{
  customer: Omit<Customer, 'password-hash'> | null
}) => {
  const downMd = useMediaQuery((theme:Theme) => theme.breakpoints.down("sm"));
  return <Card sx={{
    mt: 3,
    display: "flex",
    flexWrap: "wrap",
    p: "0.75rem 1.5rem",
    alignItems: "center",
    justifyContent: "space-between",
    ...(downMd && {
      alignItems: "start",
      flexDirection: "column",
      justifyContent: "flex-start"
    })
  }}>
      <TableRowItem title="First Name" value={customer?.first_name} />
      <TableRowItem title="Last Name" value={customer?.last_name} />
      <TableRowItem title="Email" value={customer?.email} />
      <TableRowItem title="Phone" value={customer?.phone} />
      <TableRowItem title="Birth date" value={format(new Date(customer?.created_at), "dd MMM, yyyy")} />
    </Card>;
};

function TableRowItem({
  title,
  value
}) {
  return <FlexBox flexDirection="column" p={1}>
      <Small color="grey.600" mb={0.5}>
        {title}
      </Small>

      <Span>{value}</Span>
    </FlexBox>;
}

export default UserInfo;