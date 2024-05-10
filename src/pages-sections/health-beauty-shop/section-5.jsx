import Grid from "@mui/material/Grid"; // CUSTOM ICON COMPONENT

import appIcons from "icons"; // GLOBAL CUSTOM COMPONENTS

import { H4, Span } from "components/Typography"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
import { Container, IconBox, StyledFlexBox } from "./styles"; // ========================================================

// ========================================================
const Section5 = ({
  services = []
}) => {
  const servicesData = services.slice(0, 3);
  return <Container>
      <Grid container spacing={3}>
        {servicesData.map((item, ind) => {
        const Icon = appIcons[item.icon];
        return <Grid item lg={4} md={4} sm={12} xs={12} key={ind}>
              <StyledFlexBox alignItems="center">
                <IconBox>
                  <Icon fontSize="50px" sx={{
                color: "primary.main"
              }}>
                    {item.icon}
                  </Icon>
                </IconBox>

                <div>
                  <H4 fontSize={16} fontWeight="700" color="primary.main">
                    {item.title}
                  </H4>

                  <Span color="grey.600">{item.description}</Span>
                </div>
              </StyledFlexBox>
            </Grid>;
      })}
      </Grid>
    </Container>;
};

export default Section5;