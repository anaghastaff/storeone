import { cloneElement, useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import clsx from "clsx"; // GLOBAL CUSTOM COMPONENT

import Scrollbar from "components/Scrollbar"; // STYLED COMPONENT

import { Wrapper } from "./styles"; // ================================================================

// ================================================================
const SideNav = props => {
  const {
    position = "left",
    open = false,
    width = 280,
    handle,
    children,
    toggleSidenav
  } = props;
  const [sideNavOpen, setSideNavOpen] = useState(open);

  const handleToggleSideNav = () => setSideNavOpen(!sideNavOpen);

  useEffect(() => setSideNavOpen(open), [open]);
  return <Wrapper>
      <Drawer anchor={position} open={sideNavOpen} onClose={toggleSidenav || handleToggleSideNav} SlideProps={{
      style: {
        width
      }
    }} sx={{
      zIndex: 15001
    }}>
        <Scrollbar autoHide={false}>{children}</Scrollbar>
      </Drawer>

      {handle && cloneElement(handle, {
      onClick: toggleSidenav || handleToggleSideNav,
      className: clsx(handle.props?.className, "handle")
    })}
    </Wrapper>;
};

export default SideNav;