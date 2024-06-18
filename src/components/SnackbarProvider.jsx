'use client'
import {styled} from "@mui/material/styles";
import { SnackbarProvider as NotistackProvider } from "notistack"; // STYLED COMPONENT

const Provider = styled(NotistackProvider)(({
  theme
}) => ({
  "&.SnackbarContent-root.SnackbarItem-contentRoot": {
    boxShadow: theme.shadows[2],
    color: theme.palette.common.black,
    background: theme.palette.error.white,
    fontFamily: theme.typography.fontFamily
  },
  "&.SnackbarItem-variantSuccess .MuiSvgIcon-root": {
    color: theme.palette.success.main
  },
  "&.SnackbarItem-variantError .MuiSvgIcon-root": {
    color: theme.palette.error.main
  }
}));

const SnackbarProvider = ({
  children
}) => {
  return <Provider maxSnack={4} autoHideDuration={5000} anchorOrigin={{
    vertical: "top",
    horizontal: "right"
  }}>
      {children}
    </Provider>;
};

export default SnackbarProvider;