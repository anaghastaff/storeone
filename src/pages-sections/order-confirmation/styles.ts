'use client'
import { styled } from "@mui/material/styles";
import BazaarCard from "components/BazaarCard";
import Button from "@mui/material/Button";

export const Wrapper = styled(BazaarCard)({
    margin: "auto",
    padding: "2rem",
    maxWidth: "630px",
    textAlign: "center"
  });
 export const StyledButton = styled(Button)({
    marginTop: "2rem",
    padding: "11px 24px"
  });