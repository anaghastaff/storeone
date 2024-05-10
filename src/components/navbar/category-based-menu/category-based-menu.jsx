import { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"; // GLOBAL CUSTOM COMPONENT

import { FlexRowCenter } from "components/flex-box"; // LOCAL CUSTOM COMPONENTS

import Categories from "./categories";
import ChildCategories from "./child-categories"; // STYLED COMPONENTS

import { Wrapper, StyledCard, MenusContainer } from "./styles"; // DATA TYPES

// ===============================================================
const CategoryBasedMenu = ({
  title,
  menuList
}) => {
  const [openList, setOpenList] = useState(menuList[0].title);
  const categories = menuList.reduce((prev, curr) => [...prev, curr.title], []);
  const subCategories = menuList.find(item => item.title === openList);
  return <Wrapper>
      <FlexRowCenter alignItems="flex-end" gap={0.3}>
        {title}{" "}
        <KeyboardArrowDown sx={{
        color: "grey.500",
        fontSize: "1.1rem"
      }} />
      </FlexRowCenter>

      <MenusContainer className="menu-list">
        <StyledCard>
          {
          /* MAIN CATEGORIES SECTION */
        }
          <Categories openList={openList} categories={categories} handleOpen={item => setOpenList(item)} />

          {
          /* SUB / CHILD CATEGORIES SECTION */
        }
          <ChildCategories categories={subCategories} />
        </StyledCard>
      </MenusContainer>
    </Wrapper>;
};

export default CategoryBasedMenu;