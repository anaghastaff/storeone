'use client'
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS
import { useEffect, useRef, useState } from "react"; // Local CUSTOM COMPONENT
import { SideNavbar } from "components/page-sidenav"; // CUSTOM DATA MODEL
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack'
import { Suspense } from "react";
import  Typography from "@mui/material/Typography";

// STYLED COMPONENT
import { StyledContainer } from "components/side-nav/styles";
     // ==============================================================
import FetchProducts from "app/api/fetchProducts";
import { Region } from "medusa/types/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { ProductPreviewType } from "medusa/types/global";
import { Product } from "@medusajs/medusa";
import {
    mainCarouselData,
    categoryNavigation as sidebarNavList,
  } from "__server__/__db__/furniture/data";
// ==============================================================
const CategoriesLayout = ({ 
    children, 
  products,
  region,
limit
}:{  
  products?:PricedProduct[],
  region?:Region,
  limit?:number,
  children:React.ReactNode
}) => {
  
  const ref = useRef<HTMLDivElement>(null);
  const [sidebarHeight, setSidebarHeight] = useState<any>(0);
  useEffect(() => {
    if (ref.current) setSidebarHeight(ref.current.offsetHeight);
  }, []);
// const sidebarHeight='85vh'

  return <StyledContainer >
      {
      /* LEFT SIDEBAR */
    }
      <div className="sidenav">       
        <SideNavbar lineStyle="dash" navList={sidebarNavList} sidebarStyle="style2" sidebarHeight={sidebarHeight ? sidebarHeight : "85vh"} />       
      </div>
      {
      /* OFFER BANNERS */
    }
      <div className="pageContent" 
       ref={ref}
      >
       {children}
      </div>
    </StyledContainer>;
};

export default CategoriesLayout;