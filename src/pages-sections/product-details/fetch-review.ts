
const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL

export const FetchReviews = async ({id}:{
    id:string
})=> {
 
    try{
  const response = await fetch(`${BACKEND_URL}/store/products/${id}/reviews`,
    {
    credentials:'include',
    method:'GET',
    cache:'no-cache',
    headers:{
      'Content-Type':'application/json',      
    }
  }
)
  
      if(!response.ok){
        
        throw new Error(`Could not retreive reviews, here is the error:${response.status}` );     
      }
      const data = await response.json();
      
      return data;
    }catch(err){
        console.log('Error fetching reviews', err)
        return[];
    }
  }