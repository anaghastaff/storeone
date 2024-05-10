"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import FilterList from "@mui/icons-material/FilterList"; // GLOBAL CUSTOM COMPONENTS

import { SideNav } from "components/side-nav";
import ProductsGridView from "components/products-view/products-grid-view"; // Local CUSTOM COMPONENTS

import ShopIntroCard from "../shop-intro-card";
import ProductFilterCard from "../../product-details/product-filter-card"; // CUSTOM DATA MODEL

// ============================================================
const ShopDetailsPageView = ({
  shop
}) => {
  const isDownMd = useMediaQuery(theme => theme.breakpoints.down("md"));
  const ICON_BUTTON = <IconButton sx={{
    float: "right"
  }}>
      <FilterList fontSize="small" />
    </IconButton>;
  return <Container sx={{
    mt: 4,
    mb: 6
  }}>
      {
      /* SHOP INTRODUCTION AREA */
    }
      <ShopIntroCard name={shop.name} phone={shop.phone} address={shop.address} coverPicture={shop.coverPicture} profilePicture={shop.profilePicture} />

      <Grid container spacing={3}>
        {
        /* SIDEBAR AREA */
      }
        <Grid item md={3} xs={12} sx={{
        display: {
          md: "block",
          xs: "none"
        }
      }}>
          <ProductFilterCard />
        </Grid>

        <Grid item md={9} xs={12}>
          {
          /* SMALL DEVICE SIDEBAR AREA */
        }
          {isDownMd && <SideNav position="left" handle={ICON_BUTTON}>
              <ProductFilterCard />
            </SideNav>}

          {
          /* PRODUCT LIST AREA */
        }
          <ProductsGridView products={shop.products.slice(0, 9)} />
        </Grid>
      </Grid>
    </Container>;
};

export default ShopDetailsPageView;