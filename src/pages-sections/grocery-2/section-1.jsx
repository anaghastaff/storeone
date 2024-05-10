import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel";
import AppStore from "components/footer/app-store";
import { H1, H5, H6 } from "components/Typography"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
const StyledBox = styled("div")({
  borderRadius: 8,
  overflow: "hidden"
});
const StyledGrid = styled(Grid)(({
  theme
}) => ({
  display: "flex !important",
  position: "relative",
  alignItems: "center",
  padding: "2rem 1rem 5rem 40px",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse"
  }
}));
const GridItemOne = styled(Grid)({
  color: "white"
});
const GridItemTwo = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "1.8rem"
  }
})); // ========================================================================

// ========================================================================
const Section1 = ({
  carouselData
}) => {
  return <StyledBox>
      <Carousel dots autoplay arrows={false} spaceBetween={0} slidesToShow={1} dotColor="white" dotStyles={{
      left: 40,
      bottom: 25,
      position: "absolute"
    }}>
        {carouselData.map(item => <StyledGrid container key={item.id}>
            <GridItemOne item md={7} sm={7} xs={12}>
              <H1 maxWidth="280px" mb={1} lineHeight="1.27">
                {item.title}
              </H1>
              <H6 maxWidth="470px" color="inherit" fontWeight="400" mb={5}>
                {item.description}
              </H6>

              <H5 fontSize="18px" fontWeight="700" mb={2.5}>
                Try our mobile app!
              </H5>

              <AppStore />
            </GridItemOne>

            <GridItemTwo item md={5} sm={5} xs={12}>
              <LazyImage priority width={570} height={360} src={item.imgUrl} alt={item.title} />
            </GridItemTwo>
          </StyledGrid>)}
      </Carousel>
    </StyledBox>;
};

export default Section1;