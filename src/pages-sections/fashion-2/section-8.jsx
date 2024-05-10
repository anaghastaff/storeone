"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { H2 } from "components/Typography"; // Local CUSTOM COMPONENT

import BlogCard from "./blog-card"; // CUSTOM DATA MODEL

// =======================================
const Section8 = ({
  blogs
}) => {
  return <Container sx={{
    mt: 8
  }}>
      <H2 textAlign="center" mb={4}>
        Latest Articles
      </H2>

      <Grid container spacing={3}>
        {blogs.map(item => <Grid item md={4} xs={12} key={item.id}>
            <BlogCard title={item.title} date={item.createdAt} image={item.thumbnail} description={item.description} />
          </Grid>)}
      </Grid>
    </Container>;
};

export default Section8;