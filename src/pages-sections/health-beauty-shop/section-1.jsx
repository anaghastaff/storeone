import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme"; // GLOBAL CUSTOM COMPONENTS

import { H1 } from "components/Typography";
import LazyImage from "components/LazyImage";
import { Carousel } from "components/carousel"; // CUSTOM DATA MODEL

import { COMMON_DOT_STYLES } from "components/carousel/styles"; // STYLED COMPONENTS

const StyledBox = styled("div")({
  overflow: "hidden",
  backgroundColor: "#efefef"
});
const StyledGrid = styled(Grid)(({
  theme
}) => ({
  margin: "auto",
  maxWidth: 1200,
  position: "relative",
  alignItems: "center",
  padding: "2rem 0px 5rem 0px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse"
  }
}));
const GridItemOne = styled(Grid)(({
  theme
}) => ({
  padding: 20,
  "& .titleBox": {
    marginBottom: 30,
    "& h1": {
      fontSize: 35,
      lineHeight: 1.3
    }
  },
  [theme.breakpoints.down("md")]: {
    "& .titleBox": {
      "& h1": {
        fontSize: 30
      }
    }
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& .titleBox": {
      textAlign: "center",
      "& h1": {
        fontSize: 25
      }
    }
  }
}));
const StyledButton = styled(Button)(({
  theme
}) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "14px",
  paddingInline: 25,
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary[400]
  }
}));
const GridItemTwo = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
})); // ==========================================================================

// ==========================================================================
const Section1 = ({
  carouselData
}) => {
  const {
    palette
  } = useTheme();
  return <StyledBox id="carouselBox">
      <Carousel dots arrows={false} slidesToShow={1} dotColor={palette.primary.main} dotStyles={COMMON_DOT_STYLES}>
        {carouselData.map(item => <div key={item.id}>
            <StyledGrid container>
              <GridItemOne item md={7} sm={7} xs={12}>
                <div className="titleBox">
                  <H1 maxWidth={380}>{item.title}</H1>
                </div>

                <StyledButton variant="contained">Shop Now</StyledButton>
              </GridItemOne>

              <GridItemTwo item md={5} sm={5} xs={12}>
                <LazyImage priority width={570} height={360} src={item.imgUrl} alt={item.title} />
              </GridItemTwo>
            </StyledGrid>
          </div>)}
      </Carousel>
    </StyledBox>;
};

export default Section1;