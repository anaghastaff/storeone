'use client'
import { styled } from "@mui/material/styles";
import BazaarCard from "components/BazaarCard";
import Button from "@mui/material/Button";

export const Wrapper = styled(BazaarCard)({
    margin: "auto",
    padding: "1rem",
    maxWidth:"767px",
    display:'flex',
    flexDirection:'column',
    alignItems:'baseline',
    colGap:2
  });
 export const StyledButton = styled(Button)({
    marginTop: "2rem",
    padding: "11px 24px"
  });