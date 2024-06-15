'use client'
import Card from "@mui/material/Card";
import {styled} from "@mui/material/styles";
const fbStyle = {
  background: "#3B5998",
  color: "white"
};
const googleStyle = {
  background: "#4285F4",
  color: "white"
};
export const ReviewFormWrapper = styled(Card)(({
  theme
}) => ({
  
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  },
}));