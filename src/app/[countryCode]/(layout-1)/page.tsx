import Card from "@mui/material/Card";
import Button from "@mui/material/Button"; // GLOBAL CUSTOM COMPONENTS
import React from "react";
import { H1, H5, H4, H6 } from "components/Typography";
import { FlexRowCenter } from "components/flex-box";

// ==============================================================

export const metadata = {
  title: "Ecom Store",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default function RootPage() {
  return (
    <FlexRowCenter flexDirection="column" height="60vh" gap={3}>
      <H4>Shop For:</H4>
      <Button
        color="info"
        size="large"
        variant="contained"
        href="/furniture-shop"
        sx={{ minWidth: 200 }}
      >
        Furnitures
      </Button>
      <Button
        color="info"
        size="large"
        variant="contained"
        href="/health-beauty-shop"
        sx={{ minWidth: 200 }}
      >
        Health & Beauty
      </Button>
    </FlexRowCenter>
  );
}
