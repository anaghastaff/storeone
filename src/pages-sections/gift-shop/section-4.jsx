"use client";

import Link from "next/link"; // GLOBAL CUSTOM COMPONENTS

import { H1 } from "components/Typography";
import { Carousel } from "components/carousel"; // LOCAL CUSTOM COMPONENT

import CategoryCard from "./category-card"; // COMMON CAROUSEL STYLES

import { CAROUSEL_ARROW_STYLE } from "./styles"; // CUSTOM DATA MODEL

// ===============================================
const Section4 = ({
  categoryList
}) => {
  const responsive = [{
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 500,
    settings: {
      slidesToShow: 1
    }
  }];
  return <div>
      <H1 my={2}>Top Categories</H1>
      <Carousel slidesToShow={3} responsive={responsive} arrowStyles={CAROUSEL_ARROW_STYLE}>
        {categoryList.map((item, ind) => <Link href="/" key={ind}>
            <CategoryCard title={item.name} available={item.description} imgUrl={item.image} />
          </Link>)}
      </Carousel>
    </div>;
};

export default Section4;