import Button from "@mui/material/Button"; // MUI ICON COMPONENT

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"; // CUSTOM ICON COMPONENTS

import Category from "icons/Category"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import CategoryMenu from "components/categories/category-menu";

const CategoriesMenu = () => {
  return <CategoryMenu>
      <FlexBox color="grey.600" alignItems="center" ml={2}>
        <Button color="inherit">
          <Category fontSize="small" color="inherit" />
          <KeyboardArrowDown fontSize="small" color="inherit" />
        </Button>
      </FlexBox>
    </CategoryMenu>;
};

export default CategoriesMenu;