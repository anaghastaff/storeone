"use client";

import { Fragment } from "react";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { Setting } from "components/settings";
import { Newsletter } from "components/newsletter"; // LOCAL CUSTOM COMPONENTS

import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4"; // CUSTOM DATA MODELS

// ======================================================
const GroceryThreePageView = props => {
  return <Fragment>
      {
      /* TOP HERO CAROUSEL AREA */
    }
      <Section1 mainCarouselData={props.mainCarouselData} />

      <Container sx={{
      mb: 6
    }}>
        {
        /* DISCOUNT OFFERS AREA */
      }
        <Section2 offers={props.offerCards} />

        {
        /* TOP SALES PRODUCTS AREA */
      }
        <Section3 products={props.topSailedProducts} />

        {
        /* OUR ALL PRODUCTS AREA */
      }
        <Section4 products={props.allProducts} />
      </Container>

      {
      /* POPUP NEWSLETTER FORM */
    }
      <Newsletter image="/assets/images/newsletter/bg-2.png" />

      {
      /* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */
    }
      <Setting />
    </Fragment>;
};

export default GroceryThreePageView;