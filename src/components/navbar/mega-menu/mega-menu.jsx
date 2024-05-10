import Grid from "@mui/material/Grid";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"; // GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { FlexRowCenter } from "components/flex-box"; // LOCAL CUSTOM COMPONENT

import CategoryList from "./category-list"; // STYLED COMPONENTS

import { MenusContainer, Wrapper } from "./styles"; // DATA TYPES

// ===============================================================
const gridSize = length => {
  if (length === 1) return 12;
  if (length === 2) return 6;
  if (length === 3) return 4;
  if (length === 4) return 3;
  return 3;
};

const MegaMenu = ({
  title,
  menuList
}) => {
  // get grid size the basis of menu list
  const grid = gridSize(menuList.length);
  const STYLE = {
    py: 2,
    ":nth-of-type(odd)": {
      backgroundColor: "grey.100"
    }
  };
  return <Wrapper>
      <FlexRowCenter alignItems="flex-end" gap={0.3}>
        {title}{" "}
        <KeyboardArrowDown sx={{
        color: "grey.500",
        fontSize: "1.1rem"
      }} />
      </FlexRowCenter>

      <MenusContainer className="menu-list">
        <BazaarCard elevation={3} sx={{
        mt: 1.5,
        overflow: "hidden"
      }}>
          <Grid container>
            {menuList.slice(0, 4).map((category, key) => <Grid item md={grid} key={key} sx={STYLE}>
                {category.map((item, i) => <CategoryList category={item} key={item.title + i} />)}
              </Grid>)}
          </Grid>
        </BazaarCard>
      </MenusContainer>
    </Wrapper>;
};

export default MegaMenu;