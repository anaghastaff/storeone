import Drawer from "@mui/material/Drawer";
import styled from "@mui/material/styles/styled"; // STYLED COMPONENT

const Wrapper = styled("div")(({
  theme
}) => ({
  height: "100%",
  width: "inherit",
  position: "fixed",
  overflow: "hidden",
  boxShadow: theme.shadows[1],
  zIndex: theme.zIndex.drawer + 3,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.grey[900]
})); // ==========================================================

// ==========================================================
const LayoutDrawer = props => {
  const {
    children,
    open,
    onClose,
    drawerWidth = 280
  } = props || {};
  return <Drawer open={open} anchor="left" onClose={onClose} PaperProps={{
    sx: {
      width: drawerWidth
    }
  }}>
      <Wrapper>{children}</Wrapper>
    </Drawer>;
};

export default LayoutDrawer;