'use client'
import { useProducts } from "medusa-react";
import FetchProducts from "app/api/fetchProducts";
import { useFetchData } from "./useEffect";

export default  function filter_by_handle(products, data){
  const temp = products;
  console.log("filter params, temp", temp)

  if(!data){
    return null
  }
    
        const filteredProduct = data.filter(product => product.handle === temp)
        return filteredProduct          
          
    }

