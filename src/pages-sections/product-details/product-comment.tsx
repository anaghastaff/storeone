"use client";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { H5, H6, Paragraph, Span } from "components/Typography"; // CUSTOM UTILS LIBRARY FUNCTION

import { getDateDifference } from "lib"; // ===========================================================

// ===========================================================
const ProductComment = ({
  id,
  title,
  user_name,
  rating ,
  content,
  created_at,
}) => {
  
  return <Box mb={4} maxWidth={600} key={id}>
      <FlexBox alignItems="center" mb={2} gap={2}>
        <Avatar sx={{
        width: 24,
        height: 24,
        color:'white',
        bgcolor:'green',
      }} >
        {user_name.charAt(0).toUpperCase()}
      </Avatar>

        <div>
          <H5 mb={1}>{user_name}</H5>

          <FlexBox alignItems="center" gap={1.25}>            
            <Rating size="small" value={rating} color="warn" readOnly />
            <H6>{rating}</H6>
            <Span>{getDateDifference(new Date(created_at))}</Span>
          </FlexBox>
        </div>
      </FlexBox>
      <Paragraph color="grey.700">{title}</Paragraph>
      <Paragraph color="grey.700">{content}</Paragraph>
    </Box>;
};

export default ProductComment;