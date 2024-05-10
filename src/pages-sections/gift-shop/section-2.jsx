"use client";

import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme"; // CUSTOM ICON COMPONENTS

import appIcons from "icons"; // GLOBAL CUSTOM COMPONENTS

import { H4, Span } from "components/Typography"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
import { SectionContainer, StyledFlexBox, IconBox } from "./styles"; // ==================================================

// ==================================================
const Section2 = ({
  serviceList = []
}) => {
  const {
    palette
  } = useTheme();
  const servicesData = serviceList.slice(0, 3);
  return <SectionContainer>
      <Grid container spacing={3}>
        {servicesData.map((item, ind) => {
        const Icon = appIcons[item.icon];
        return <Grid item md={4} sm={6} xs={12} key={ind}>
              <StyledFlexBox gap={1.5}>
                <IconBox>
                  <Icon fontSize="50px" sx={{
                color: palette.primary.main
              }}>
                    {item.icon}
                  </Icon>
                </IconBox>

                <div>
                  <H4 mb="5px" fontSize="1rem" fontWeight="600">
                    {item.title}
                  </H4>
                  <Span color="grey.600">{item.description}</Span>
                </div>
              </StyledFlexBox>
            </Grid>;
      })}
      </Grid>
    </SectionContainer>;
};

export default Section2;