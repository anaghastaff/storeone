"use client";

import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel"; // GLOBAL CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flex-box";
import { H5, H6, Paragraph, Span } from "components/Typography";
import AccordionHeader from "components/accordion/accordion-header"; // FILTER OPTIONS

const categoryList = [{
  title: "Bath Preparations",
  subCategories: ["Bubble Bath", "Bath Capsules", "Others"]
}, {
  title: "Eye Makeup Preparations"
}, {
  title: "Fragrance"
}, {
  title: "Hair Preparations"
}];
const brandList = ["Mac", "Karts", "Baals", "Bukks", "Luasis"];
const otherOptions = ["On Sale", "In Stock", "Featured"];
const colorList = ["#1C1C1C", "#FF7A7A", "#FFC672", "#84FFB5", "#70F6FF", "#6B7AFF"];

const ProductFilterCard = () => {
  const [collapsed, setCollapsed] = useState(true);
  return <Card sx={{
    p: "18px 27px",
    overflow: "auto"
  }} elevation={1}>
      {
      /* CATEGORY VARIANT FILTER */
    }
      <H6 mb={1.25}>Categories</H6>

      {categoryList.map(item => item.subCategories ? <Fragment key={item.title}>
            <AccordionHeader open={collapsed} onClick={() => setCollapsed(state => !state)} sx={{
        padding: ".5rem 0",
        cursor: "pointer",
        color: "grey.600"
      }}>
              <Span>{item.title}</Span>
            </AccordionHeader>

            <Collapse in={collapsed}>
              {item.subCategories.map(name => <Paragraph pl="22px" py={0.75} key={name} fontSize="14px" color="grey.600" sx={{
          cursor: "pointer"
        }}>
                  {name}
                </Paragraph>)}
            </Collapse>
          </Fragment> : <Paragraph key={item.title} sx={{
      py: 0.75,
      cursor: "pointer",
      color: "grey.600",
      fontSize: 14
    }}>
            {item.title}
          </Paragraph>)}

      <Box component={Divider} my={3} />

      {
      /* PRICE VARIANT FILTER */
    }
      <H6 mb={2}>Price Range</H6>

      <FlexBetween>
        <TextField placeholder="0" type="number" size="small" fullWidth />
        <H5 color="grey.600" px={1}>
          -
        </H5>
        <TextField placeholder="250" type="number" size="small" fullWidth />
      </FlexBetween>

      <Box component={Divider} my={3} />

      {
      /* BRAND VARIANT FILTER */
    }
      <H6 mb={2}>Brands</H6>

      {brandList.map(item => <FormControlLabel key={item} sx={{
      display: "flex"
    }} label={<Span color="inherit">{item}</Span>} control={<Checkbox size="small" color="secondary" />} />)}

      <Box component={Divider} my={3} />

      {
      /* SALES OPTIONS */
    }
      {otherOptions.map(item => <FormControlLabel key={item} sx={{
      display: "flex"
    }} label={<Span color="inherit">{item}</Span>} control={<Checkbox size="small" color="secondary" />} />)}

      <Box component={Divider} my={3} />

      {
      /* RATINGS FILTER */
    }
      <H6 mb={2}>Ratings</H6>
      {[5, 4, 3, 2, 1].map(item => <FormControlLabel key={item} control={<Checkbox size="small" color="secondary" />} label={<Rating size="small" value={item} color="warn" readOnly />} sx={{
      display: "flex"
    }} />)}

      <Box component={Divider} my={3} />

      {
      /* COLORS VARIANT FILTER */
    }
      <H6 mb={2}>Colors</H6>

      <FlexBox mb={2} flexWrap="wrap" gap={1}>
        {colorList.map(item => <Box key={item} width={25} height={25} flexShrink={0} bgcolor={item} borderRadius="50%" sx={{
        cursor: "pointer"
      }} />)}
      </FlexBox>
    </Card>;
};

export default ProductFilterCard;