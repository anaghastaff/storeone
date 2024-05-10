import { alpha, styled } from "@mui/material/styles";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"; // STYLED COMPONENT
import { SxProps } from "@mui/material/styles";

interface ScrollbarProps {
  children: React.ReactNode;
  autoHide?: boolean;
  sx?: SxProps; 
 
}

const StyledScrollBar = styled(SimpleBar)(({
  theme
}) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&.simplebar-visible:before": {
      opacity: 1
    }, 
    "&:before": {
       backgroundColor: alpha(theme.palette.grey[400], 0.6)
     
    }
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 9
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6
  },
  "& .simplebar-mask": {
    zIndex: "inherit"
  }
})); // =============================================================

// =============================================================
const Scrollbar = ({
  children,
  autoHide = true,
  sx,
  ...props
}:ScrollbarProps) => <StyledScrollBar sx={sx} autoHide={autoHide} {...props}>
    {children}
  </StyledScrollBar>;

export default Scrollbar;