"use client";

import Image from "next/image";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { CarouselCard2 } from "components/carousel-cards"; // STYLED COMPONENTS

import { ARROW_BUTTON_STYLE, ContentWrapper, BadgeBox } from "./style"; // ========================================================

// ========================================================
const Section5 = ({
  hotDealList
}) => {
  return <Container sx={{
    pb: 8
  }}>
      <ContentWrapper>
        <Carousel slidesToShow={1} arrowStyles={ARROW_BUTTON_STYLE}>
          {hotDealList.map((item, index) => {
          const expireDate = new Date(item.expireDate).getTime();
          return <CarouselCard2 key={index} imgUrl={item.imgUrl} expireDate={expireDate} productName={item.productName} />;
        })}
        </Carousel>

        <BadgeBox>
          <Image src="/assets/images/badges/hot.svg" width={110} height={130} alt="New" />
        </BadgeBox>
      </ContentWrapper>
    </Container>;
};

export default Section5;