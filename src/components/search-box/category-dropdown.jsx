import MenuItem from "@mui/material/MenuItem";
import useTheme from "@mui/material/styles/useTheme";
import TouchRipple from "@mui/material/ButtonBase";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined"; // GLOBAL CUSTOM COMPONENT

import BazaarMenu from "components/BazaarMenu"; // STYLED COMPONENT

import { DropDownHandler } from "./styled"; // DATA

import { categories } from "./categories"; // ==============================================================

// ==============================================================
const CategoryDropdown = ({
  title,
  handleChange
}) => {
  const {
    breakpoints
  } = useTheme();
  return <BazaarMenu direction="left" sx={{
    zIndex: breakpoints.down("md") ? 99999 : 1502
  }} handler={<DropDownHandler px={3} gap={0.5} height="100%" color="grey.700" bgcolor="grey.100" alignItems="center" component={TouchRipple}>
          {title}
          <KeyboardArrowDownOutlined fontSize="small" color="inherit" />
        </DropDownHandler>}>
      {categories.map(item => <MenuItem key={item.value} onClick={handleChange(item)}>
          {item.title}
        </MenuItem>)}
    </BazaarMenu>;
};

export default CategoryDropdown;