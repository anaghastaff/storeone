import { Skeleton } from "@mui/material";
import Rating from "@mui/material/Rating";

// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box"; // ==============================================================
import { Suspense } from "react";
import { success } from "theme/theme-colors";

// ==============================================================
const ProductRating = ({
  showRating,
  rating = 0,
  length = null,
  ...props
}) => {
  return showRating ? <FlexBox gap={1} marginBottom={1} alignItems="center" {...props}>
   <Rating size="small" precision={0.1} value={rating} color="warn" readOnly />
      <Span color="grey.600" fontSize="10px">{length} User reviews</Span>      
    </FlexBox> : null;
};

export default ProductRating;