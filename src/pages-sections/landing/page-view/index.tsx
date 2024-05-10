"use client";
import { Region } from "@medusajs/medusa";
import { useState } from "react";
import Box from "@mui/material/Box"; // CUSTOM COMPONENTS

import Footer from "../footer";
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import { Setting } from "components/settings";
import type { CartWithCheckoutStep } from "medusa/types/global";

const IndexPageView = ({countryCode, cart}:{countryCode:string, cart: CartWithCheckoutStep}) => {
  const [filterDemo, setFilterDemo] = useState("");

  const handleChangeFilter = value => setFilterDemo(value);

  return <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Section1 cart={cart}/>
      <Section6 handleChangeFilter={handleChangeFilter} />
      <Section2 />
      <Section5 />
      <Section3 filterDemo={filterDemo} setFilterDemo={handleChangeFilter} countryCode={countryCode}/>
      <Section4 />
      <Footer />
      <Setting />
    </Box>;
};

export default IndexPageView;