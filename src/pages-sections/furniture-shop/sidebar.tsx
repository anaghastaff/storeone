//  "use client";
import { useEffect, useRef, useState } from "react"; // Local CUSTOM COMPONENT
import Section2 from "./section-2"; // GLOBAL CUSTOM COMPONENT
import { SideNavbar } from "components/page-sidenav"; // CUSTOM DATA MODEL
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack'
import { Suspense } from "react";
import  Typography from "@mui/material/Typography";

// STYLED COMPONENT
import { StyledContainer } from "./styles"; // ==============================================================
import FetchProducts from "app/api/fetchProducts";
import { Region } from "medusa/types/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { ProductPreviewType } from "medusa/types/global";
import { Product } from "@medusajs/medusa";
// ==============================================================
const Sidebar = ({ 
  navList,
  products,
  region,
limit
}:{
  navList:any,
  products:PricedProduct[],
  region:Region,
  limit:number
}) => {
  
  // const ref = useRef<HTMLDivElement>(null);
  // const [sidebarHeight, setSidebarHeight] = useState<any>(0);
  // useEffect(() => {
  //   if (ref.current) setSidebarHeight(ref.current.offsetHeight);
  // }, []);
const sidebarHeight='85vh'

  return <StyledContainer>
      {
      /* LEFT SIDEBAR */
    }
      <div className="sidenav"> 
      
        <SideNavbar lineStyle="dash" navList={navList} sidebarStyle="style2" sidebarHeight={sidebarHeight ? sidebarHeight : "85vh"} />
        
      </div>

      {
      /* OFFER BANNERS */
    }
      <div className="pageContent" 
      // ref={ref}
      >
        <Section2 limit={limit} products={products} region={region}/>
      </div>
    </StyledContainer>;
};

export default Sidebar;