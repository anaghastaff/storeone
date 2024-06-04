'use client'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles"; // GLOBAL CUSTOM COMPONENTS
import { LoadingButton } from "@mui/lab";
import { Span } from "components/Typography";


export const StyledCard = styled(Box)(({
  theme
}) => ({
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",  
  transition: "all 250ms ease-in-out",
  outline: `4px solid ${theme.palette.grey[200]}`,
  marginLeft:'auto',
  marginRight:'auto',
 boxShadow: theme.shadows[8],
  "&:hover": {
    boxShadow: theme.shadows[12],
    "& .css-1i2n18j": {
      display: "flex"
    },
    "& .controlBox": {
      display: "block"
    }
  }
}));
export const ImgBox = styled("div")(({
  theme
}) => ({
  height: 275,
  width:320,
  
  position:'relative',
  marginLeft:'auto',
  marginRight:'auto',
    // marginBottom: 100,
  // padding: "60px 40px 20px 40px",
  background: theme.palette.primary[50]
}));
export const ContentWrapper = styled("div")({
  
  display: "flex",
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
});
export const StatusChipBox = styled("div")(({
  theme
}) => ({
  width: 40,
  height: 42,
  zIndex: 11,
  top: "0px",
  right: "30px",
  fontSize: "12px",
  position: "absolute",
  background: theme.palette.primary.main,
  "& .triangle-left": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: `20px solid ${theme.palette.primary.main}`
  },
  "& .triangle-right": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderBottom: "10px solid transparent",
    borderRight: `20px solid ${theme.palette.primary.main}`
  }
}));
export const StatusChip = styled(Span)({
  color: "#fff",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
export const ColorBox = styled("div")(({
  theme
}) => ({
  gap: 8,
  display: "flex",
  padding: "10px 5px",
  "& span": {
    width: 12,
    height: 12,
    borderRadius: 8,
    border: "0.1rem solid grey",
    "&:hover": {
      cursor: "pointer",
      outline: `2px solid ${theme.palette.grey[200]}`
    }
  }
}));

export const SizeBox = styled("div")(({ theme }) => ({
  gap: 8,
  display: "flex",
  justifyContent:'left',
  alignItems:'center',
  fontSize:'14px',
  padding: "10px 5px",
  
  "& span": {
    width: 15, // Set width and height to the same value for a square
    height: 15, // Set width and height to the same value for a square
    borderRadius: 2, // Adjust the border radius if needed
    border: "1px solid grey", // Add a white border
    "&:hover": {
      cursor: "pointer",
      outline: `2px solid ${theme.palette.grey[200]}`
    }
  }
}));


export const StyledButton = styled(LoadingButton)(({
  theme

}) => ({
  padding: "4px",
  borderRadius: 0,
  transition: "all 0.3s",
  color: theme.palette.primary.main,
  "&:hover": {
    color: "#fff",
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`
  }
}));