import { AllReviews, Review } from "medusa/types/global"

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL

export const FetchAllReviews = async ()=> {
  
  const response = await fetch(`${BACKEND_URL}/store/products/all-reviews`,
    {
    credentials:'include',
    method:'GET',
    cache:'no-cache',
    headers:{
      'Content-Type':'application/json',      
    }
  }) 
  if(!response.ok){        
        throw new Error(`Could not retreive reviews, here is the error:${response.status}` );     
      }
      const allReviews = await response.json();      
      return allReviews;
    
  }