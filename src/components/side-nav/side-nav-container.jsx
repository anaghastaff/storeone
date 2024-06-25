import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { layoutConstant } from "utils/constants"; // STYLED COMPONENT

import { StyledContainer } from "./styles"; // ================================================================
import Section2 from "pages-sections/health-beauty-shop/section-2";

// ================================================================
const SideNavContainer = props => {
  const {
    SideNav,
    children,
    navFixedComponentID
  } = props;
  
  return <StyledContainer>
       <div className="sidenav">
        <SideNav />
        </div>
        <div
        className="pageContent"
        // ref={ref}
      >
        <Section2 />
       
  </div>
     
    </StyledContainer>;
};

export default SideNavContainer;