'use client'
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { layoutConstant } from "utils/constants"; // STYLED COMPONENT
import { StyledContainer } from "./styles"; // ================================================================
import Section2 from "pages-sections/health-beauty-shop/section-2";
import { HealthBeautySideNav } from "components/page-sidenav";

// ================================================================
const SideNavContainer = props => {
  const {
    navFixedComponentID,
    navigationList,
    products,
    ratings,
    cart,
    region,
  } = props;
  
  return <StyledContainer>
       <div className="sidenav">
        <HealthBeautySideNav navigation={navigationList}/>
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