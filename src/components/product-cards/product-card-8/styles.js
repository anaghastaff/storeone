import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
export const Card = styled("div")({
  ":hover": {
    "& .product-actions": {
      right: 10
    },
    "& img": {
      transform: "scale(1.1)"
    },
    "& .product-view-action": {
      opacity: 1
    }
  }
});
export const CardMedia = styled("div")(({
  theme
}) => ({
  maxHeight: 300,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.grey[300],
  "& img": {
    transition: "0.3s"
  }
}));
export const AddToCartButton = styled(IconButton)({
  top: 10,
  right: -40,
  position: "absolute",
  transition: "right 0.3s .1s"
});
export const FavoriteButton = styled(IconButton)({
  top: 45,
  right: -40,
  position: "absolute",
  transition: "right 0.3s .2s"
});
export const QuickViewButton = styled(Button)({
  left: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: 0,
  position: "absolute",
  transition: "all 0.3s"
});