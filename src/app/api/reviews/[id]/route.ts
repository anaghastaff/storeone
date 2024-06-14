
import { NextResponse,NextRequest } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL

const POST = async (req:NextRequest, res:NextResponse) => {

  const id = req.nextUrl.pathname.split("/")[3]  
 const temp = await req.json(); 
    const response = await fetch(`${BACKEND_URL}/store/products/${id}/reviews`, { 
        method:'POST',
        credentials: "include",
        cache: "no-cache",
        body: JSON.stringify(temp),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if(!response.ok){
        return NextResponse.json({
            status:'error',
            message:'server error, could not post'
        })
      }
      const data = await response.json();
      return NextResponse.json({
        data:data.product_review,
        status:'success',
        message:'successfully posted the review'
      })      
}
export {POST}

const GET = async (req:NextRequest, res:NextResponse) => {
  
  const id = req.nextUrl.pathname.split("/")[3]   
    const response = await fetch(`${BACKEND_URL}/store/products/${id}/reviews`, { 
        method:'GET',
        credentials: "include",
        cache: "no-cache",        
        headers: {
          "Content-Type": "application/json",
        },
      })
     
        if(!response.ok){
          return NextResponse.json({
              status:'error',
              message:'server error, could not post'
          })
        }
      

      const data = await response.json();
     
     
      return NextResponse.json({data});
}
export {GET}