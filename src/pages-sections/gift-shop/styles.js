import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { FlexBox } from "components/flex-box";
import { layoutConstant } from "utils/constants";
export const CAROUSEL_STYLE = (theme, slider = false) => {
  return { ...(slider && {
      "& .carousel__slider": {
        paddingBottom: "15px"
      }
    }),
    "& #backArrowButton, #backForwardButton": {
      width: 35,
      height: 35,
      borderRadius: 0,
      boxShadow: theme.shadows[2],
      color: theme.palette.primary.main,
      background: theme.palette.primary[50],
      "&:hover": {
        background: theme.palette.primary[100]
      }
    }
  };
};
export const CAROUSEL_ARROW_STYLE = {
  width: 35,
  height: 35,
  borderRadius: 0,
  boxShadow: 2,
  color: "primary.main",
  backgroundColor: "primary.50",
  "&:hover": {
    backgroundColor: "primary.100"
  }
}; // USED IN SIDEBAR COMPONENT

export const SidebarContainer = styled(Container)(({
  theme
}) => ({
  display: "flex",
  marginBottom: "2rem",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    "& .MuiPaper-root": {
      borderRadius: 0
    },
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  ".pageContent": {
    left: "unset",
    position: "relative",
    marginLeft: "1.75rem",
    width: `calc(100% - 2.5rem - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: 0 // "& .MuiGrid-item": { paddingLeft: 0 },
      // "& .categories": { marginLeft: "-1.75rem" },

    }
  }
})); // USED IN SECTION 1

export const StyledBox = styled("div")(({
  theme
}) => ({
  marginBottom: 60,
  overflow: "hidden",
  backgroundColor: theme.palette.primary[100]
}));
export const StyledGrid = styled(Grid)(({
  theme
}) => ({
  maxWidth: 1280,
  margin: "auto",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse"
  }
}));
export const GridItemOne = styled(Grid)(({
  theme
}) => ({
  padding: 20,
  "& .titleBox": {
    marginTop: 10,
    marginBottom: 30,
    "& h1": {
      fontSize: 45,
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
export const CarouselButton = styled(Button)(({
  theme
}) => ({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary[400]
  }
}));
export const GridItemTwo = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
})); // USED IN SECTION 2

export const SectionContainer = styled("div")({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem"
});
export const StyledFlexBox = styled(FlexBox)(({
  theme
}) => ({
  flexWrap: "wrap",
  background: "#fff",
  alignItems: "center",
  padding: "1.5rem 0.8rem",
  justifyContent: "center",
  border: `1px solid ${theme.palette.grey[300]}`,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column"
  }
}));
export const IconBox = styled(FlexBox)(({
  theme
}) => ({
  padding: "12px",
  fontSize: "22px",
  borderRadius: "50%",
  alignItems: "center",
  background: theme.palette.info[50]
})); // USED IN SECTION 3

const BOX_STYLE = {
  height: 230,
  display: "flex",
  borderRadius: 0,
  boxShadow: "none",
  alignItems: "center"
};
export const LeftContentBox = styled(Card)(({
  theme
}) => ({ ...BOX_STYLE,
  background: theme.palette.primary[100],
  backgroundImage: "url('/assets/images/Gift Shop/Offer Card.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right bottom",
  "& .content": {
    width: "50%"
  }
}));
export const RightContentBox = styled(Card)(({
  theme
}) => ({ ...BOX_STYLE,
  background: theme.palette.primary[100],
  backgroundImage: "url('/assets/images/Gift Shop/Offer 1.png')",
  backgroundSize: "contain",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  display: "block"
}));
export const RightContent = styled(Box)({
  paddingLeft: 60,
  "& p": {
    fontSize: 13,
    lineHeight: 1.4
  }
});
export const StyledButton = styled(Button)({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "5px",
  padding: "4px 12px",
  textDecoration: "underline"
});