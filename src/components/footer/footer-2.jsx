import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // LOCAL CUSTOM COMPONENTS

import AppStore from "./app-store";
import SocialLinks from "./social-links"; // GLOBAL CUSTOM COMPONENTS

import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography"; // DATA

import { CUSTOMER_CARE_LINKS } from "./data"; // STYLED COMPONENTS

import { StyledFooter, StyledLink } from "./styles";

const Footer2 = () => {
  return <StyledFooter>
      <Box sx={{
      padding: 5,
      color: "white",
      borderRadius: 2,
      bgcolor: "#141850",
      mb: {
        md: 2,
        xs: 10
      }
    }}>
        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
            <Link href="/">
              <BazaarImage mb={2.5} src="/assets/images/logo.svg" alt="logo" />
            </Link>

            <Paragraph mb={2.5} color="grey.500" maxWidth="370px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Paragraph>

            <AppStore />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            {
            /* CUSTOMER CARE LINKS */
          }
            <Box mt={{
            md: 6,
            xs: 2
          }} mb={2}>
              {CUSTOMER_CARE_LINKS.map((item, ind) => <StyledLink href="/" key={ind}>
                  {item}
                </StyledLink>)}
            </Box>

            {
            /* SOCIAL LINKS WITH ICON */
          }
            <SocialLinks />
          </Grid>
        </Grid>
      </Box>
    </StyledFooter>;
};

export default Footer2;