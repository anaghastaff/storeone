import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";
import { layoutConstant } from "utils/constants";

interface StyledRootProps {
  bgColor?: string;
  expand?: number;
}


export const StyledRoot = styled(Box, {
  shouldForwardProp: props => props !== "bgColor"
})<StyledRootProps>(({
  theme,
  bgColor,
  expand
}) => ({
  fontSize: 12,
  height: layoutConstant.topbarHeight,
  color: theme.palette.secondary.contrastText,
  background: bgColor || theme.palette.grey[900],
  transition: "height 300ms ease",
  "& .menuItem": {
    minWidth: 100
  },
  "& .marginRight": {
    marginRight: "1.25rem"
  },
  "& .expand": {
    display: "none",
    padding: 0
  },
  "& .handler": {
    height: layoutConstant.topbarHeight
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600
  },
  [theme.breakpoints.down("sm")]: {
    height: expand ? 80 : layoutConstant.topbarHeight,
    "& .topbarRight": {
      display: expand ? "flex" : "none",
      paddingBottom: 5
    },
    "& .expand": {
      display: "block",
      height: layoutConstant.topbarHeight
    },
    "& .MuiSvgIcon-root": {
      color: "white"
    }
  }
}));
export const StyledContainer = styled(Container)(({
  theme
}) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    flexDirection: "column"
  }
}));