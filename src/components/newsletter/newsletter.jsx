"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import ClickAwayListener from "@mui/material/ClickAwayListener"; // MUI UTILS METHODS

import styled from "@mui/material/styles/styled";
import debounce from "@mui/material/utils/debounce"; // MUI ICON COMPONENTS

import Clear from "@mui/icons-material/Clear"; // GLOBAL CUSTOM COMPONENTS

import { H1, Paragraph, Span } from "../Typography"; // LOCAL CUSTOM COMPONENT

import SocialIcons from "./social-icons"; // styled components

const Wrapper = styled(Box, {
  shouldForwardProp: prop => prop !== "img"
})(({
  theme,
  img
}) => ({
  top: "50%",
  padding: 0,
  left: "50%",
  width: "100%",
  maxWidth: 1020,
  height: "auto",
  borderRadius: 8,
  outline: "none",
  position: "absolute",
  boxShadow: theme.shadows[3],
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 620,
    padding: 24
  },
  [theme.breakpoints.up("md")]: {
    padding: 32,
    height: 550,
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    backgroundPosition: "left"
  }
})); // ======================================================

// ======================================================
const Newsletter = ({
  image = "/assets/images/newsletter/bg-1.png"
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!window) return;

    if (!window.sessionStorage.getItem("newsletter")) {
      debounce(() => {
        setOpen(true);
        window.sessionStorage.setItem("newsletter", "true");
      }, 2000)();
    }
  }, []);
  return <ClickAwayListener onClickAway={handleClose}>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={{
      zIndex: 999999999
    }}>
        <Wrapper img={image}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} display={{
            md: "flex",
            xs: "none"
          }} />

            <Grid item lg={6} md={6} xs={12} alignItems="center">
              <Box textAlign="center" p={3}>
                <Paragraph fontSize={22} fontWeight={700}>
                  UP TO <Span color="primary.main">30% OFF</Span>
                </Paragraph>

                <H1 fontSize={36} fontWeight={700} mb={2}>
                  Sign up to <Span color="primary.main">New Store</Span>
                </H1>

                <Paragraph color="grey.600" mb={5}>
                  Subscribe to our New eCommerce newsletter to receive timely
                  updates from your favorite products.
                </Paragraph>

                <TextField fullWidth placeholder="Enter your email address" sx={{
                mb: 2,
                "& input": {
                  padding: 2,
                  textAlign: "center"
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "grey.300"
                }
              }} />

                <Button variant="contained" fullWidth color="primary" sx={{
                p: 1.5
              }}>
                  SUBMIT
                </Button>

                <SocialIcons />

                <FormControlLabel control={<Checkbox defaultChecked />} label="No, Thanks" />
              </Box>
            </Grid>
          </Grid>

          <IconButton onClick={handleClose} sx={{
          position: "absolute",
          top: 8,
          right: 8
        }}>
            <Clear sx={{
            color: "grey.900"
          }} />
          </IconButton>
        </Wrapper>
      </Modal>
    </ClickAwayListener>;
};

export default Newsletter;