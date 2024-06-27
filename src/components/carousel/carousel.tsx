'use client'
import { useTheme } from "@mui/material/styles";
import SlickCarousel from "react-slick"; // LOCAL CUSTOM COMPONENTS

import CarouselDots from "./carousel-dots";
import CarouselArrows from "./carousel-arrows"; // SLICK CAROUSEL CSS

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // STYLED COMPONENT

import { RootStyle } from "./styles"; // ==============================================================

type Props = {
  [x: string]: any;
    dotColor?: any;
    children: any;
    arrowStyles?: any;
    dots?: boolean;
    arrows?: boolean;
    slidesToShow?: number;
    spaceBetween?: number;
    dotStyles?: {
        mt: number;
    };
}
// ==============================================================
const Carousel = ({
  dotColor,
  children,
  arrowStyles,
  dots = false,
  arrows = true,
  slidesToShow = 4,
  spaceBetween = 10,
  dotStyles = {
    mt: 4
  },
  ...props
}:Props) => {
  const theme = useTheme();
  const settings = {
    dots,
    arrows,
    slidesToShow,
    rtl: theme.direction === "rtl",
    ...CarouselArrows(arrowStyles),
    ...CarouselDots({
      dotColor,
      sx: dotStyles
    }),
    ...props
  };
  return <RootStyle space={spaceBetween}>
      <SlickCarousel {...settings}>{children}</SlickCarousel>
    </RootStyle>;
};

export default Carousel;