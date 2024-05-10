"use client";

import Container from "@mui/material/Container"; // CUSTOM ICON COMPONENTS

import appIcons from "icons"; // GLOBAL CUSTOM COMPONENTS

import { FlexBox } from "components/flex-box";
import { H3, Span } from "components/Typography"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
import { StyledFlexBox } from "./style"; // ===========================================================

// ===========================================================
const Section7 = ({
  serviceList
}) => {
  return <Container sx={{
    mb: "4rem"
  }}>
      <StyledFlexBox>
        {serviceList.map((item, ind) => {
        const Icon = appIcons[item.icon];
        return <FlexBox gap={1} key={ind} p="1rem">
              <Icon color="inherit" fontSize="inherit" sx={{
            color: "grey.900",
            fontSize: "40px"
          }} />

              <div>
                <H3 color="grey.900" lineHeight={1.3}>
                  {item.title}
                </H3>

                <Span color="grey.600">{item.description}</Span>
              </div>
            </FlexBox>;
      })}
      </StyledFlexBox>
    </Container>;
};

export default Section7;