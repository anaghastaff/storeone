"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import {styled} from "@mui/material/styles"; // Local CUSTOM COMPONENTS

import ProductReview from "./product-review";
import ProductDescription from "./product-description"; // STYLED COMPONENT
import { FlexBox } from "components/flex-box";

const StyledTabs = styled(Tabs)(({
  theme
}) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize"
  }
}));

const ProductTabs = ({product, response}) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (_, value) => setSelectedOption(value);

  return <>
      <StyledTabs textColor="primary" value={selectedOption} indicatorColor="primary" onChange={handleOptionClick}>
        <Tab className="inner-tab" label="Description" />
        <Tab className="inner-tab" label={`Reviews (${response.data?.length ?? 0})`}/>
      </StyledTabs>

      <FlexBox mb={2} p={3}>
        {selectedOption === 0 && <ProductDescription product={product} />}
        {selectedOption === 1 && <ProductReview product={product} response={response}/>}
      </FlexBox>
    </>;
};

export default ProductTabs;