import Box from "@mui/material/Box"; // STYLED COMPONENTS

import { StatusChipBox, StatusChip } from "./styles"; // ==============================================================

// ==============================================================
const ProductStatus = ({
  status
}) => {
  return status ? <StatusChipBox>
      <StatusChip sx={{bgcolor: status === "sale" ? "red" : "#3399ff"}}>{status}</StatusChip>
      <Box width="100%" display="flex">
        <div className="triangle-left" />
        <div className="triangle-right" />
      </Box>
    </StatusChipBox> : null;
};

export default ProductStatus;