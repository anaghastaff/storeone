import Rating from "@mui/material/Rating";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box"; // ==============================================================

// ==============================================================
const ProductRating = ({
  showRating,
  rating = 0,
  ...props
}) => {
  return showRating ? <FlexBox gap={1} alignItems="center" {...props}>
      <Rating size="small" value={rating} color="warn" readOnly />
      <Span color="grey.600">({rating})</Span>
    </FlexBox> : null;
};

export default ProductRating;