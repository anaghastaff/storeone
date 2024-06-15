import Link from "next/link";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import East from "@mui/icons-material/East";
import format from "date-fns/format"; // GLOBAL CUSTOM COMPONENT

import { H5, Paragraph } from "components/Typography"; // Local CUSTOM COMPONENT

 //import TableRow from "../table-row"; // CUSTOM UTILS LIBRARY FUNCTION
import { TableRow, TableCell, Skeleton } from "@mui/material";
import { currency } from "lib"; // CUSTOM DATA MODEL
import { Order } from "@medusajs/medusa";
import { formatAmount } from "medusa/lib/util/prices";
// =================================================
const OrderRow = ({ order }: { order: Omit<Order, "beforeInsert"> }) => {
  const getColor = (status) => {
    switch (status) {
      case "Pending":
        return "secondary";

      case "Processing":
        return "secondary";

      case "Delivered":
        return "success";

      case "Cancelled":
        return "error";

      default:
        return "default";
    }
  };

  return (
    order ? <>
      <Link href={`/orders/${order?.id}`}>
      <TableRow
        sx={{
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
        }}
      >
        <TableCell>
        <H5 ellipsis>#{order?.id.substring(0, 18)}</H5>
        </TableCell>
        <TableCell>
        <Box textAlign="center">
          <Chip size="small" label={order?.status} color="default" />
        </Box>
        </TableCell>
        <TableCell>
        <Paragraph
          textAlign={{
            sm: "center",
            xs: "left",
          }}
        >
          {format(new Date(order?.created_at), "MMM dd, yyyy")}
        </Paragraph>
        </TableCell>
        <TableCell>
        <Paragraph textAlign="center">
          {formatAmount({
            amount: order?.total,
            region: order?.region,
            includeTaxes: false,
          })}
        </Paragraph>
        </TableCell>
        <TableCell>
        <Box
          display={{
            sm: "inline-flex",
            xs: "none",
          }}
          justifyContent="end"
        >
          <IconButton>
            <East
              fontSize="small"
              sx={{
                color: "grey.500",
                transform: ({ direction }) =>
                  `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
              }}
            />
          </IconButton>
        </Box>
        </TableCell>
      </TableRow>
    </Link>
      </> 
      : <Skeleton width="100%" height="100%" variant="rectangular" sx={{bgcolor:'grey.600'}} />
   
  );
};

export default OrderRow;
