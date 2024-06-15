"use client";

import Link from "next/link";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";
import { H1, H3, H6, Paragraph } from "components/Typography"; // STYLED COMPONENTS
import { LeftContentBox, RightContentBox, CustomButton } from "./styles";
import { useProducts } from "medusa-react"
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack'
import { Suspense } from "react";
import { Typography } from "@mui/material";
import type { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import type { Region } from "medusa/types/medusa";



const Section2 =  ({products, region}:{
  products:PricedProduct,
  region:Region,
}) => {
    
  const {
    breakpoints
  } = useTheme();
  
  const product1 =  (!products) ? <Skeleton  variant="rectangular" animation="wave" sx={{bgcolor:'green', width:"100%", height:'100px'}} />  : products[0].images[0].url;
  const product2 = (!products)  ?  <Skeleton  variant="rectangular" animation="wave" sx={{bgcolor:'green', width:"100%", height:'100px'}} /> :   products[1].images[0].url 
  const product3 = (!products)  ?  <Skeleton  variant="rectangular" animation="wave" sx={{bgcolor:'green', width:"100%", height:'100px'}} /> :   products[2].images[0].url 
  const product4 = (!products)   ?  <Skeleton  variant="rectangular" animation="wave" sx={{bgcolor:'green', width:"100%", height:'100px'}} /> :   products[3].images[0].url 
  const product5 = (!products)   ?  <Skeleton  variant="rectangular" animation="wave" sx={{bgcolor:'green', width:"100%", height:'100px'}} /> :   products[4].images[0].url 
  return <Fragment>
      <Grid container spacing={3}>
        {
        /* BIG SALE BANNER CARD */
      }
        <Grid item xs={12} sm={7} md={7}>
          <Link href="/sales-1">
          
            <LeftContentBox imgUrl={             
               product1 
              } padding="20px 30px">
              <div>
                <H6>Modern Fashion.</H6>
                <H1 fontSize={35} color="primary.main">
                  Big Sale
                </H1>

                <H6 fontSize={23}>UP TO 50% OFF</H6>
                <CustomButton>Shop Now</CustomButton>
                {(products.length === 0) ? <CircularProgress color="primary"/> : ""}
              </div>
              
            </LeftContentBox>

          </Link>
          
        </Grid>

        {
        /* UPTO 60% OFF BANNER CARD */
      }
        <Grid item xs={12} sm={5} md={5} sx={{display:'flex', justifyContent:'center'}}>
          <Link href="/sales-1">
            <RightContentBox imgUrl={product2} pt="20px" textAlign="center">
              <div>
                <H6>SweatShirt Collection</H6>
                <H3 fontSize={23} color="primary.main">
                  UP TO 60% OFF
                </H3>
                {(products.length === 0) ? <CircularProgress color="primary"/> : ""} 
              </div>
              
            </RightContentBox>

          </Link>
          <CustomButton>Shop Now</CustomButton>
        </Grid>
      </Grid>

      <Grid mt={0} container spacing={3} sx={{
      [breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column-reverse"
      }
    }}>
        {
        /* WINTER OFFER 50% OFF BANNER CARD */
      }
        <Grid item xs={12} sm={7} md={7}>
          <Link href="/sales-1">
            <RightContentBox imgUrl={product4} textAlign="center" sx={{
            pt: 3,
            px: "80px",
            height: 484,
            [breakpoints.between("xs", "sm")]: {
              px: "20px"
            }
          }}>  
              <div>
               
                <H3>Summer Offer!</H3>

                <H1 fontSize={50} color="primary.main">
                  50% OFF
                </H1>

                <H6>All Kind of Summer Wear</H6>

                <CustomButton>Shop Now</CustomButton>
                {(products.length === 0) ? <CircularProgress color="primary"/> : ""}
              </div>
            </RightContentBox>
          </Link>
        </Grid>

        {
        /* SOFA & CHAIR COLLECTION BANNER CARDS */
      }
        <Grid item xs={12} sm={5} md={5}>
          {
          /* CHAR COLLECTION BANNER CARD */
        }
          <Link href="/sales-1">
            <LeftContentBox imgUrl={product5} py="20px" pl={3}>
              <div>
                <Paragraph>Stylish & Comfortable</Paragraph>

                <H3 fontSize={20} color="primary.main">
                  Hoodie Shirt Collection
                </H3>

                <CustomButton>Shop Now</CustomButton>
                {(products.length === 0) ? <CircularProgress color="primary"/> : ""}
              </div>
            </LeftContentBox>
          </Link>

          {
          /* SOFA CHAIR BANNER CARD */
        }
          <Link href="/sales-1">
            <LeftContentBox imgUrl={product3} mt={3} py="20px" pl={3}>
              <div>
                <Paragraph>December New!</Paragraph>

                <H3 fontSize={20} color="primary.main">
                  Sweat Pants
                </H3>

                <CustomButton>Shop Now</CustomButton>
                {(products.length === 0) ? <CircularProgress color="primary"/> : ""}
              </div>
            </LeftContentBox>
          </Link>
        </Grid>
      </Grid>
    </Fragment>;
};

export default Section2;