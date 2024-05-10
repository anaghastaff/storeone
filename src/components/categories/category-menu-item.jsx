import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import styled from "@mui/material/styles/styled"; // MUI ICON COMPONENTS

import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight"; // GLOBAL CUSTOM HOOK

import useSettings from "hooks/useSettings"; // STYLED COMPONENT

const Wrapper = styled("div")(({
  theme
}) => ({
  "& .category-dropdown-link": {
    height: 40,
    display: "flex",
    minWidth: "278px",
    cursor: "pointer",
    whiteSpace: "pre",
    padding: "0px 1rem",
    alignItems: "center",
    transition: "all 250ms ease-in-out",
    "& .title": {
      flexGrow: 1,
      paddingLeft: "0.75rem"
    }
  },
  "&:hover": {
    "& > .category-dropdown-link": {
      color: theme.palette.primary.main,
      background: theme.palette.action.hover
    },
    "& > .mega-menu": {
      display: "block"
    }
  }
})); // =============================================================

// =============================================================
const CategoryMenuItem = props => {
  const {
    href,
    title,
    caret = true,
    children,
    ...rest
  } = props;
  const {
    settings
  } = useSettings();
  return <Wrapper>
      <Link href={href}>
        <MenuItem className="category-dropdown-link">
          {rest.icon && <rest.icon fontSize="small" color="inherit" />}
          <span className="title">{title}</span>

          {caret && (settings.direction === "ltr" ? <ChevronRight fontSize="small" /> : <ChevronLeft fontSize="small" />)}
        </MenuItem>
      </Link>

      {children}
    </Wrapper>;
};

export default CategoryMenuItem;