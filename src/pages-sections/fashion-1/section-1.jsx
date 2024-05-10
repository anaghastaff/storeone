"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // CUSTOM ICON COMPONENTS

import FeedbackThumbsUpIcon from "icons/FeedbackThumbsUp";
import CreditCardVerifiedIcon from "icons/CreditCardVerified"; // Local CUSTOM COMPONENTS

import ShowcaseCard1 from "./shared/card-1";
import ShowcaseCard2 from "./shared/card-2";
import ShowcaseCard3 from "./shared/card-3";
import ShowcaseCard4 from "./shared/card-4";
import ShowcaseCard5 from "./shared/card-5";

const Section1 = () => {
  return <Container sx={{
    pt: 3,
    mb: 8
  }}>
      <Grid container spacing={2}>
        {
        /* SPECIAL CARD AREA */
      }
        <Grid item lg={4} md={5} xs={12}>
          <ShowcaseCard1 />
        </Grid>

        <Grid item lg={8} md={7} xs={12}>
          {
          /* JACKET CARD AREA */
        }
          <ShowcaseCard2 />

          <Box mt={2} />

          {
          /* MEN'S SHIRT CARD AREA */
        }
          <ShowcaseCard3 />
        </Grid>
      </Grid>

      <Box mb={3} />

      <Grid container spacing={3}>
        {
        /* SECURE PAYMENT SERVICE CARD */
      }
        <Grid item md={3} sm={6} xs={12}>
          <ShowcaseCard4 title="Secure Payment" Icon={CreditCardVerifiedIcon} body="100% secured payment & privacy" />
        </Grid>

        {
        /* GREAT FEEDBACK SERVICE CARD */
      }
        <Grid item md={3} sm={6} xs={12}>
          <ShowcaseCard4 title="Great Feedback" Icon={FeedbackThumbsUpIcon} body="More than 97% positive & happy customers" />
        </Grid>

        {
        /* SPECIAL OFFER CARD */
      }
        <Grid item md={6} xs={12}>
          <ShowcaseCard5 />
        </Grid>
      </Grid>
    </Container>;
};

export default Section1;