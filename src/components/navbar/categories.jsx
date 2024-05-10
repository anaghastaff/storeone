import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight"; // GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography";
import CategoryMenu from "components/categories/category-menu"; // CUSTOM ICON COMPONENT

import Category from "icons/Category"; // GLOBAL CUSTOM HOOK

import useSettings from "hooks/useSettings"; // STYLED COMPONENT

import { CategoryMenuButton } from "./styles";

const Categories = ({
  open
}) => {
  const {
    settings
  } = useSettings();
  return <CategoryMenu open={open}>
      <CategoryMenuButton variant="text">
        <Category fontSize="small" />
        <Paragraph fontWeight="600" textAlign="left" flex="1 1 0" ml={1.25} color="grey.600">
          Categories
        </Paragraph>

        {settings.direction === "ltr" ? <ChevronRight className="dropdown-icon" fontSize="small" /> : <ChevronLeft className="dropdown-icon" fontSize="small" />}
      </CategoryMenuButton>
    </CategoryMenu>;
};

export default Categories;