import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENT

import AppStore from "./app-store";
import SocialLinks from "./social-links"; // GLOBAL CUSTOM COMPONENTS

import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography"; // DATA

import { CUSTOMER_CARE_LINKS } from "./data"; // STYLED COMPONENTS

import { StyledRoot, StyledLink } from "./styles"; // =================================================================

// =================================================================
const Footer3 = ({
  sx,
  id,
  bgcolor
}) => {
  return <StyledRoot id={id} sx={sx} bgcolor={bgcolor}>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={7} xs={12}>
            <Link href="/">
              <BazaarImage mb={2.5} src="/assets/images/logo.svg" alt="logo" />
            </Link>

            <Paragraph mb={2.5} color="grey.300" maxWidth="370px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Paragraph>

            <AppStore />
          </Grid>

          <Grid item md={5} xs={12}>
            {
            /* CUSTOMER CARE LINKS */
          }
            <Box mt={{
            md: 6,
            xs: 2
          }} mb={2}>
              {CUSTOMER_CARE_LINKS.map((item, ind) => <StyledLink href="/" key={ind} sx={{
              color: "grey.300"
            }}>
                  {item}
                </StyledLink>)}
            </Box>

            {
            /* SOCIAL LINKS WITH ICON */
          }
            <SocialLinks />
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>;
};

export default Footer3;