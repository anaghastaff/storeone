import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H4, Paragraph } from "components/Typography"; // STYLED COMPONENTS

import { ContentBox, RightContent, LeftContent, StyledButton } from "./styles";

const Section2 = () => {
  return <Box display="grid" gridTemplateColumns={{
    sm: "1fr 1fr",
    xs: "1fr"
  }} gap={3}>
      <ContentBox>
        <RightContent px="20px">
          <Image alt="shop" width={40} height={40} src="/assets/images/Health Shop/Vector (1).png" />
          <Paragraph mt={2}>Our Pharmacists are</Paragraph>
          <Paragraph>here to Help People</Paragraph>
        </RightContent>

        <LeftContent px="10px">
          <LazyImage alt="shop" width={1000} height={1223} src="/assets/images/Health Shop/Doctor.png" />
        </LeftContent>
      </ContentBox>

      <ContentBox sx={{
      px: "20px"
    }}>
        <div className="content">
          <Paragraph fontSize={12}>BEAUTY PACK</Paragraph>
          <H4 fontWeight="700">CREAM BRIGHT</H4>
          <H4 fontWeight="700">UP TO 25%</H4>
          <StyledButton LinkComponent={Link} href="/shops/scarlett-beauty">
            Shop Now
          </StyledButton>
        </div>

        <div className="content">
          <LazyImage alt="shop" width={800} height={800} src="/assets/images/Health Shop/Product (4).png" />
        </div>
      </ContentBox>
    </Box>;
};

export default Section2;