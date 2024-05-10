"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";
import { H1, Paragraph } from "components/Typography"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
import { COMMON_DOT_STYLES } from "components/carousel/styles";
import { StyledBox, StyledGrid, GridItemOne, GridItemTwo, CarouselButton } from "./styles"; // ==========================================================

// ==========================================================
const Section1 = ({
  carouselData
}) => {
  const {
    palette
  } = useTheme();
  return <StyledBox id="carouselBox">
      <Container>
        <Carousel dots arrows={false} spaceBetween={0} slidesToShow={1} dotColor={palette.primary.main} dotStyles={COMMON_DOT_STYLES}>
          {carouselData.map(({
          id,
          title,
          subTitle,
          buttonText,
          imgUrl
        }) => <div key={id}>
              <StyledGrid py={3} container>
                <GridItemOne item md={6} sm={6} xs={12}>
                  <Box py={6}>
                    <Paragraph color="primary.main">{subTitle}</Paragraph>
                    <div className="titleBox">
                      <H1 maxWidth={400}>{title}</H1>
                    </div>

                    <CarouselButton variant="contained" sx={{
                  px: "30px",
                  py: "8px"
                }}>
                      {buttonText}
                    </CarouselButton>
                  </Box>
                </GridItemOne>

                <GridItemTwo item md={6} sm={6} xs={12}>
                  <LazyImage priority alt={title} width={600} height={450} src={imgUrl} />
                </GridItemTwo>
              </StyledGrid>
            </div>)}
        </Carousel>
      </Container>
    </StyledBox>;
};

export default Section1;