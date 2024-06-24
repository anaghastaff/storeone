"use client";
import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";
import NavigationNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname, useRouter } from "next/navigation";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";



function BreadCrumbs({ products }: { products: PricedProduct[] }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const router = useRouter();
  console.log("router", pathname);

  const handleLink = (link: string) => {
    router.push(`/${link}`);
  };
  return (
    <Box sx={{ p: 1 }}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        itemsAfterCollapse={2}
        separator={<NavigationNextIcon fontSize="small" />}
      >
        {segments.map((link, index) => {
          let item;
          if (link.search(/prod_/) !== -1) {
            item = products?.find((p) => p.id === link);
          }
          return (
            <Link
              color="primary"
              variant="subtitle2"
              component="button"
              key={index}
              underline="hover"
              onClick={() => handleLink(link)}
            >
              {link.search(/prod_/) !== -1
                ? item.title
                : link}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}

export default BreadCrumbs;
