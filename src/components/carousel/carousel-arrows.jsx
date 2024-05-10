// MUI ICON COMPONENTS
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward"; // STYLED COMPONENT

import { ArrowButton } from "./styles"; // ==============================================================

// ==============================================================
function NextArrow({
  onClick,
  sx
}) {
  return <ArrowButton onClick={onClick} className="slick-arrow next" right={0} sx={{ ...sx
  }}>
      <ArrowForward fontSize="small" color="inherit" />
    </ArrowButton>;
}

function PrevArrow({
  onClick,
  sx
}) {
  return <ArrowButton onClick={onClick} className="slick-arrow prev" left={0} sx={{ ...sx
  }}>
      <ArrowBack fontSize="small" color="inherit" />
    </ArrowButton>;
}

const CarouselArrows = sx => {
  return {
    nextArrow: <NextArrow sx={sx} />,
    prevArrow: <PrevArrow sx={sx} />
  };
};

export default CarouselArrows;