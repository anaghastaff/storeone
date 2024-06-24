"use client";

import { Fragment, useCallback, useState } from "react"; // GLOBAL CUSTOM COMPONENTS

import { Sticky } from "components/sticky";
import { Topbar } from "components/topbar";
import { Navbar } from "components/navbar";
import { Footer1 } from "components/footer";
import Header from "components/header/header";
import { SearchInputWithCategory } from "components/search-box";
import { MobileNavigationBar } from "components/mobile-navigation";
import type { CartWithCheckoutStep } from "medusa/types/global";
import type { Customer } from "@medusajs/medusa";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import BreadCrumbs from "components/bread-crumbs";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

/**
 *  USED IN:
 *  1. market-1, market-2, gadget-shop, fashion-shop, fashion-2, fashion-3, furniture-shop, grocery-3, gift-shop
 *  2. product details page
 *  3. order-confirmation page
 *  4. product-search page
 *  5. shops and shops-details page
 */

const ShopLayout1 = ({
  children,
  cart,
  customer,
  countryCode,
}: {
  children: React.ReactNode;
  cart: CartWithCheckoutStep;
  customer?: Omit<Customer, "password-hash"> | null;
  countryCode?: string;
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  return (
    <Fragment>
      {/* TOP BAR SECTION */}
      <Topbar />

      {/* HEADER */}

      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Suspense fallback={<CircularProgress />}>
          <Header
            countryCode={countryCode}
            customer={customer}
            isFixed={isFixed}
            searchInput={<SearchInputWithCategory />}
            cart={cart}
          />
        </Suspense>
      </Sticky>

      {/* NAVIGATION BAR */}
      <Navbar elevation={0} border={1} customer={customer} />
      {/* <BreadCrumbs /> */}
      {/* <Sticky fixedOn={50} onSticky={toggleIsFixed} scrollDistance={300}>
      <BreadCrumbs products={products} />
        </Sticky>
       */}
      {/* BODY CONTENT */}
      {children}

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar
        cart={cart}
        customer={customer}
        countryCode={countryCode}
      />
      {/* FOOTER */}
      <Footer1 />
    </Fragment>
  );
};

export default ShopLayout1;
