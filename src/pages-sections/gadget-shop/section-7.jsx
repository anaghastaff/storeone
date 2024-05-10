"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { SectionHeader } from "components/section-header"; // Local CUSTOM COMPONENT

import BlogCard from "./blog-card"; // CUSTOM DATA MODEL

// ================================================
const Section7 = ({
  blogs
}) => {
  return <Container sx={{
    mb: 8
  }}>
      <SectionHeader title="Get Ideas from our Blog" />

      <Grid container spacing={3}>
        {blogs.map((blog, index) => <Grid item md={6} xs={12} key={index}>
            <BlogCard blog={blog} />
          </Grid>)}
      </Grid>
    </Container>;
};

export default Section7;