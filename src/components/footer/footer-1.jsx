import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENT

import AppStore from "./app-store";
import SocialLinks from "./social-links"; // GLOBAL CUSTOM COMPONENTS

import Image from "components/BazaarImage";
import { H6, Paragraph } from "components/Typography"; // STYLED COMPONENTS

import { StyledLink } from "./styles"; // DATA

import { ABOUT_LINKS, CUSTOMER_CARE_LINKS } from "./data";

const Footer1 = () => {
  return <Box component="footer" bgcolor="#222935" mb={{
    sm: 0,
    xs: 7
  }}>
      <Box component={Container} py={{
      sm: 10,
      xs: 4
    }} color="white" overflow="hidden">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Link href="/">
              <Image mb={2.5} src="/assets/images/logo.svg" alt="logo" />
            </Link>

            <Paragraph mb={2.5} color="grey.500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Paragraph>

            <AppStore />
          </Grid>

          {
          /* ABOUT US LINKS */
        }
          <Grid item lg={2} md={6} sm={6} xs={12}>
            <H6 fontSize={18} mb={1.5} lineHeight="1" color="white">
              About Us
            </H6>

            <div>
              {ABOUT_LINKS.map((item, ind) => <StyledLink href="/" key={ind}>
                  {item}
                </StyledLink>)}
            </div>
          </Grid>

          {
          /* CUSTOMER CARE LINKS */
        }
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <H6 fontSize={18} mb={1.5} lineHeight="1" color="white">
              Customer Care
            </H6>

            {CUSTOMER_CARE_LINKS.map((item, ind) => <StyledLink href="/" key={ind}>
                {item}
              </StyledLink>)}
          </Grid>

          {
          /* CONTACT & SOCIAL LINKS */
        }
          <Grid item lg={3} md={6} sm={6} xs={12}>
            {
            /* CONTACT INFORMATION */
          }
            <H6 fontSize={18} mb={1.5} lineHeight="1" color="white">
              Contact Us
            </H6>

            <Paragraph py={0.6} color="grey.500">
              70 Washington Square South, New York, NY 10012, United States
            </Paragraph>

            <Paragraph py={0.6} color="grey.500">
              Email: uilib.help@gmail.com
            </Paragraph>

            <Paragraph py={0.6} mb={2} color="grey.500">
              Phone: +1 1123 456 780
            </Paragraph>

            {
            /* SOCIAL LINKS WITH ICON */
          }
            <SocialLinks />
          </Grid>
        </Grid>
      </Box>
    </Box>;
};

export default Footer1;