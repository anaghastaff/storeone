"use client";

import { useCallback, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery"; // MUI ICON COMPONENTS

import Apps from "@mui/icons-material/Apps";
import ViewList from "@mui/icons-material/ViewList";
import FilterList from "@mui/icons-material/FilterList"; // Local CUSTOM COMPONENT

import ProductFilterCard from "../product-filter-card"; // GLOBAL CUSTOM COMPONENTS

import Sidenav from "components/side-nav/side-nav";
import { FlexBox } from "components/flex-box";
import { H5, Paragraph } from "components/Typography";
import ProductsGridView from "components/products-view/products-grid-view";
import ProductsListView from "components/products-view/products-list-view"; // PRODUCT DATA

import productDatabase from "data/product-database";
const SORT_OPTIONS = [{
  label: "Relevance",
  value: "Relevance"
}, {
  label: "Date",
  value: "Date"
}, {
  label: "Price Low to High",
  value: "Price Low to High"
}, {
  label: "Price High to Low",
  value: "Price High to Low"
}];

const ProductSearchPageView = () => {
  const [view, setView] = useState("grid");
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"));
  const toggleView = useCallback(v => () => setView(v), []);
  const PRODUCTS = productDatabase.slice(95, 104);
  return <Container sx={{
    mt: 4,
    mb: 6
  }}>
      {
      /* FILTER ACTION AREA */
    }
      <Card elevation={1} sx={{
      mb: "55px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      p: {
        sm: "1rem 1.25rem",
        md: "0.5rem 1.25rem",
        xs: "1.25rem 1.25rem 0.25rem"
      }
    }}>
        <div>
          <H5>Searching for “ mobile phone ”</H5>
          <Paragraph color="grey.600">48 results found</Paragraph>
        </div>

        <FlexBox alignItems="center" columnGap={4} flexWrap="wrap" my="0.5rem">
          <FlexBox alignItems="center" gap={1} flex="1 1 0">
            <Paragraph color="grey.600" whiteSpace="pre">
              Short by:
            </Paragraph>

            <TextField select fullWidth size="small" variant="outlined" placeholder="Short by" defaultValue={SORT_OPTIONS[0].value} sx={{
            flex: "1 1 0",
            minWidth: "150px"
          }}>
              {SORT_OPTIONS.map(item => <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>)}
            </TextField>
          </FlexBox>

          <FlexBox alignItems="center" my="0.25rem">
            <Paragraph color="grey.600" mr={1}>
              View:
            </Paragraph>

            <IconButton onClick={toggleView("grid")}>
              <Apps color={view === "grid" ? "primary" : "inherit"} fontSize="small" />
            </IconButton>

            <IconButton onClick={toggleView("list")}>
              <ViewList color={view === "list" ? "primary" : "inherit"} fontSize="small" />
            </IconButton>

            {
            /* SHOW IN THE SMALL DEVICE */
          }
            {downMd && <Sidenav handle={<IconButton>
                    <FilterList fontSize="small" />
                  </IconButton>}>
                <ProductFilterCard />
              </Sidenav>}
          </FlexBox>
        </FlexBox>
      </Card>

      <Grid container spacing={3}>
        {
        /* PRODUCT FILTER SIDEBAR AREA */
      }
        <Grid item md={3} sx={{
        display: {
          md: "block",
          xs: "none"
        }
      }}>
          <ProductFilterCard />
        </Grid>

        {
        /* PRODUCT VIEW AREA */
      }
        <Grid item md={9} xs={12}>
          {view === "grid" ? <ProductsGridView products={PRODUCTS} /> : <ProductsListView products={PRODUCTS} />}
        </Grid>
      </Grid>
    </Container>;
};

export default ProductSearchPageView;