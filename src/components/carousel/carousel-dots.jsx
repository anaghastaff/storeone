import { Fragment } from "react";
// STYLED COMPONENTS
import { Dot, DotList } from "./styles"; // ==============================================================

// ==============================================================
const CarouselDots = ({
  dotColor,
  ...props
}) => {
  return {
    customPaging: () => <Dot dotColor={dotColor} />,
    appendDots: dots => <Fragment>
        <DotList component="ul" {...props}>
          {dots}
        </DotList>
      </Fragment>
  };
};

export default CarouselDots;