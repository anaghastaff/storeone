"use client";

import { usePathname } from "next/navigation";
import { Fragment, useCallback, useState } from "react"; // GLOBAL CUSTOM COMPONENTS

import { Sticky } from "components/sticky";
import { Topbar } from "components/topbar";
import { Header } from "components/header";
import { Navbar } from "components/navbar";
import { SearchInput } from "components/search-box";
/**
 *  USED IN:
 *  1. grocery-1, grocery-2, health-beauty-shop
 *  2. checkout-alternative
 */

const ShopLayout2 = ({
  children
}) => {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback(fixed => setIsFixed(fixed), []); // FOR HANDLE TOP BAR AREA

  let TOP_BAR_CONTENT = null;
  const SHOW_TOP_BAR = ["/grocery-2", "/health-beauty-shop", "/checkout-alternative"];

  if (SHOW_TOP_BAR.includes(pathname)) {
    TOP_BAR_CONTENT = <Topbar />;
  } // FOR HANDLE NAV BAR AREA


  let NAV_BAR_CONTENT = null;
  const SHOW_NAV_BAR = ["/health-beauty-shop", "/checkout-alternative"];

  if (SHOW_NAV_BAR.includes(pathname)) {
    NAV_BAR_CONTENT = <Navbar elevation={0} />;
  }

  return <Fragment>
      {
      /* TOP BAR AREA */
    }
      {TOP_BAR_CONTENT}

      {
      /* HEADER */
    }
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={70}>
        <Header isFixed={isFixed} searchInput={<SearchInput />} />
      </Sticky>

      {
      /* NAVIGATION BAR */
    }
      {NAV_BAR_CONTENT}

      {
      /* BODY CONTENT */
    }
      {children}
    </Fragment>;
};

export default ShopLayout2;