"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // LOCAL CUSTOM COMPONENT

import DealWeekCard from "./shared/deal-week-card"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { SectionCreator } from "components/section-header"; // ==========================================================

// ==========================================================
const Section4 = ({
  dealOfTheWeek
}) => {
  const totalSlides = dealOfTheWeek.length / 4;
  const firstIndex = 0 * 4;
  const lastIndex = firstIndex + 4;
  return <SectionCreator title="Deal Of The Week">
      {
      /* DEAL WEEK MAIN CAROUSEL */
    }
      <Carousel dots autoplay arrows={false} slidesToShow={1}>
        {[...new Array(totalSlides)].map((_item, ind) => <Box py="0.25rem" key={ind}>
            <Grid container spacing={3}>
              {dealOfTheWeek.slice(firstIndex, lastIndex).map((item, ind) => <Grid item md={6} xs={12} key={ind}>
                  <Link href="/">
                    <DealWeekCard imgUrl={item.imgUrl} title={item.brand} off={item.off} />
                  </Link>
                </Grid>)}
            </Grid>
          </Box>)}
      </Carousel>
    </SectionCreator>;
};

export default Section4;