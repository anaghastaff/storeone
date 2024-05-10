import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import { H1 } from "components/Typography";
import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
import { COMMON_DOT_STYLES } from "components/carousel/styles";
import { TextBox, StyledBox, Container, StyledGrid, GridItemOne, GridItemTwo, StyledButton } from "./styles"; // ===================================================================

// ===================================================================
const Section1 = ({
  mainCarouselData
}) => {
  return <StyledBox id="carouselBox">
      <Carousel dots autoplay arrows={false} spaceBetween={0} slidesToShow={1} dotStyles={COMMON_DOT_STYLES}>
        {mainCarouselData.map((item, ind) => <Container key={ind}>
            <StyledGrid container>
              <GridItemOne item md={6} sm={6} xs={12}>
                <Box pt={6}>
                  <LazyImage width={800} height={886} alt={item.title} src={item.imgUrl} />
                </Box>
              </GridItemOne>

              <GridItemTwo item md={6} sm={6} xs={12}>
                <TextBox>
                  <H1 maxWidth={400}>{item.title}</H1>
                </TextBox>

                <StyledButton variant="contained" color="primary" sx={{
              px: "30px",
              py: "6px"
            }}>
                  {item.buttonText}
                </StyledButton>
              </GridItemTwo>
            </StyledGrid>
          </Container>)}
      </Carousel>
    </StyledBox>;
};

export default Section1;