import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled"; // USED IN SECTION 3 & 4

export const TitleBox = styled("div")(({
  theme
}) => ({
  marginBlock: "2rem",
  textAlign: "center",
  "& h1": {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: "10px"
  },
  "& div": {
    width: 200,
    height: "2px",
    margin: "auto",
    background: theme.palette.primary.main
  }
})); // USED IN SECTION 2

export const StyledCard = styled(Card)(({
  theme
}) => ({
  display: "flex",
  boxShadow: "none",
  alignItems: "center",
  padding: "20px 50px",
  justifyContent: "center",
  background: theme.palette.paste[50],
  [theme.breakpoints.down("sm")]: {
    padding: "20px 30px",
    "& h3": {
      fontSize: 20
    }
  }
})); // USED IN SECTION 1

export const StyledBox = styled("div")({
  marginBottom: 60,
  overflow: "hidden"
});
export const Container = styled("div")(({
  theme
}) => ({
  backgroundColor: theme.palette.paste[50]
}));
export const StyledGrid = styled(Grid)(({
  theme
}) => ({
  maxWidth: 1280,
  alignItems: "center",
  margin: " 0 auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse"
  }
}));
export const GridItemTwo = styled(Grid)(({
  theme
}) => ({
  paddingLeft: 80,
  [theme.breakpoints.down("md")]: {
    paddingLeft: 40
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    textAlign: "center"
  }
}));
export const StyledButton = styled(Button)({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px"
});
export const GridItemOne = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
}));
export const TextBox = styled("div")(({
  theme
}) => ({
  marginBottom: 40,
  "& h1": {
    fontSize: 50,
    fontWeight: 600,
    lineHeight: "1.35"
  },
  [theme.breakpoints.down("lg")]: {
    "& h1": {
      fontSize: 45
    }
  },
  [theme.breakpoints.down("md")]: {
    "& h1": {
      fontSize: 38
    }
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 30
  }
}));