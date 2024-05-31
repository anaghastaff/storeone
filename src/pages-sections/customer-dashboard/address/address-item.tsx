import Link from "next/link";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENTS
import Stack from '@mui/material/Stack'
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { Paragraph, Span } from "components/Typography"; // Local CUSTOM COMPONENT
import CircularProgress from  '@mui/material/CircularProgress'
import TableRow from "../table-row"; // CUSTOM DATA MODEL
import { Address } from "@medusajs/medusa";
// ==============================================================
const AddressListItem = ({
  address,
  handleDelete,
  removing
}:{
  address: Address,
  handleDelete: (id:string)=>void,
  removing:boolean
}) => {
  const {
    address_1,
    address_2,
    city,
    phone,
    postal_code,
    country,
    id
  } = address || {};
    const addressId = id;
  return <Link href={`/address/${addressId}`}>
      <TableRow>
        <Stack>
        <Span ellipsis>{address_1}</Span>
        <Span ellipsis>{address_2}</Span>
        <Span ellipsis>{`${city}, ${postal_code}`}</Span>
        <Span ellipsis>{phone}</Span>
        <Span ellipsis>{country}</Span>
        </Stack>
        <div></div>
        <div></div>
        <Stack direction="row" color="grey.600">
          <IconButton>
            <Edit fontSize="small" color="inherit" />
          </IconButton>

          <IconButton
          disabled={removing}
          onClick={e => {
          e.stopPropagation();
          ()=>handleDelete(id);
        }}>
           {removing ? <CircularProgress size="small" /> : <Delete fontSize="small" color="inherit" />} 
          </IconButton>
        </Stack>
      </TableRow>
    </Link>;
};

export default AddressListItem;