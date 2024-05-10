"use client";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled"; // GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import { NavLink3 } from "components/nav-link";
import { Carousel } from "components/carousel";
import { ProductCard10 } from "components/product-cards/product-card-10"; // CUSTOM DATA MODEL

// STYLED COMPONENTS
const StyledListItem = styled(ListItem)(({
  theme
}) => ({
  fontSize: 13,
  fontWeight: 500,
  cursor: "pointer",
  padding: "10px 0 0 0",
  transition: "all 0.3s",
  ":hover": {
    color: theme.palette.primary.main
  }
}));
const StyledCard = styled(Card)(() => ({
  border: 0,
  height: "100%",
  borderRadius: "3px",
  padding: "1rem 2rem"
})); // ======================================================================

// ======================================================================
const Section5 = ({
  data
}) => {
  if (!data) return null;
  const responsive = [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 426,
    settings: {
      slidesToShow: 1
    }
  }];
  return <Container>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <StyledCard elevation={0}>
            {
            /* MAIN CATEGORY NAME/TITLE */
          }
            <H3>{data.category.title}</H3>

            {
            /* SUB CATEGORY LIST */
          }
            <List sx={{
            mb: 2
          }}>
              {data.category.children.map(item => <StyledListItem key={item}>{item}</StyledListItem>)}
            </List>

            <NavLink3 href="/" text="Browse All" color="dark.main" hoverColor="dark.main" />
          </StyledCard>
        </Grid>

        {
        /* CATEGORY BASED PRODUCTS CAROUSEL */
      }
        <Grid item md={9} xs={12}>
          <Carousel slidesToShow={4} responsive={responsive} arrowStyles={{
          backgroundColor: "dark.main"
        }}>
            {data.products.map(product => <ProductCard10 product={product} key={product.id} />)}
          </Carousel>
        </Grid>
      </Grid>
    </Container>;
};

export default Section5;