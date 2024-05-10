import styled from "@mui/material/styles/styled"; // STYLED COMPONENT

const Wrapper = styled("div")(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  left: "100%",
  right: "auto",
  top: 0,
  zIndex: 99,
  "& .title-link, & .child-link": {
    color: "inherit",
    fontWeight: 600,
    display: "block",
    padding: "0.5rem 0px"
  },
  "& .child-link": {
    fontWeight: 400
  },
  "& .mega-menu-content": {
    borderRadius: 4,
    marginLeft: "1rem",
    padding: "0.5rem 0px",
    boxShadow: theme.shadows[3],
    transition: "all 250ms ease-in-out",
    backgroundColor: theme.palette.background.paper
  }
}));

const StyledMegaMenu = ({
  children
}) => {
  return <Wrapper className="mega-menu">{children}</Wrapper>;
};

export default StyledMegaMenu;