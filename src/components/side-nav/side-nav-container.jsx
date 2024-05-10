import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { layoutConstant } from "utils/constants"; // STYLED COMPONENT

import { StyledContainer } from "./styles"; // ================================================================

// ================================================================
const SideNavContainer = props => {
  const {
    SideNav,
    children,
    navFixedComponentID
  } = props;
  const [isFixed, setFixed] = useState(false);
  const scrollListener = useCallback(() => {
    const element = document.getElementById(navFixedComponentID);
    const elementBottom = element.getBoundingClientRect().bottom;
    const position = elementBottom + window.scrollY - layoutConstant.headerHeight;
    setFixed(window.scrollY > position);
  }, [navFixedComponentID]);
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);
  return <StyledContainer>
      <div className={clsx({
      sidenav: true,
      fixed: isFixed
    })}>
        <SideNav />
      </div>

      <div className={clsx({
      pageContent: true,
      pageContentLeft: isFixed
    })}>
        {children}
      </div>
    </StyledContainer>;
};

export default SideNavContainer;