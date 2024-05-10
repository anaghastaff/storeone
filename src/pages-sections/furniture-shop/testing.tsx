import React from 'react';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
 import CircularProgress from '@mui/material/CircularProgress';
import filter_by_handle from "lib/filter-by-handle";
import api from "utils/__api__/furniture-shop";
import Sidebar from './sidebar';
import ListRegions from 'medusa/regions';
import { Region } from '@medusajs/medusa';


const Testing = async () => {
     
  const data = await ListRegions();
  
  return   (
    <Box sx={{width:'100%', height:"auto"}}>
      
        <Box sx={{border:"1px solid green", display:'flex', justifyContent:'center', height:200, width:200, alignItems:'center', fontSize:'1.5rem'}} >
        {(data?.length === 0 || !data || data === undefined) ? 
        <CircularProgress color="primary"/> :  

          (
            <div style={{marginTop:'1rem', minHeight:'100vh', margin:'unset',display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-around'}}>
            {data?.map((region:Region, ind) => (
              
              <div key={region.id} style={{display:'flex', flexDirection:'column', padding:2, margin:2, alignItems:'center', justifyContent:'center'}}>
               
                  <div style={{margin:'auto'}}>{region.name}</div>
                  <div style={{margin:'auto'}}>{region.currency_code}</div>
                 <div style={{margin:'auto'}}>{region.countries.length}</div> 
                </div>  
              
            ))}
          </div>
          )

        }
        </Box>
  </Box>
  
  )
 
  }

export default Testing