"use client";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField"; // GLOBAL CUSTOM COMPONENTS

import { H2, Paragraph } from "components/Typography";
import { FlexRowCenter } from "components/flex-box"; // CUSTOM ICON COMPONENT

import Telegram from "icons/Telegram";

const Section8 = () => {
  return <Container sx={{
    pb: 8
  }}>
      <FlexRowCenter flexDirection="column">
        <Telegram sx={{
        fontSize: "2.5rem",
        color: "grey.700"
      }} />

        <H2 mt={3} mb={1} lineHeight={1.2}>
          Subscribe To Our Newsletter
        </H2>

        <Paragraph color="grey.600" mb={3} textAlign="center">
          and receive $20 coupon for the first Shopping
        </Paragraph>

        <TextField variant="outlined" placeholder="Searching for..." fullWidth InputProps={{
        sx: {
          mx: "auto",
          height: 44,
          paddingRight: 0,
          color: "secondary.300",
          borderRadius: "0.5rem",
          backgroundColor: "grey.300",
          width: {
            md: "50%",
            sm: "75%"
          }
        },
        endAdornment: <Button disableElevation color="primary" variant="contained" sx={{
          px: "3rem",
          height: "100%",
          borderRadius: "0 8px 8px 0"
        }}>
                SUBSCRIBE
              </Button>
      }} />
      </FlexRowCenter>
    </Container>;
};

export default Section8;