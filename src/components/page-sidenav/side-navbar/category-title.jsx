import Box from "@mui/material/Box";
import { H5 } from "components/Typography";
import { BorderBox, ColorBorder } from "./styles"; // ==============================================================

// ==============================================================
const CategoryTitle = ({
  title,
  line
}) => <Box padding="16px 20px 5px 20px">
    <H5>{title}</H5>

    <BorderBox line={line}>
      <ColorBorder />
      <ColorBorder grey={1} />
    </BorderBox>
  </Box>;

export default CategoryTitle;