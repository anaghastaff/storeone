
import Medusa from "@medusajs/medusa-js"
import { queryClient } from "medusa/queryClient"

// Defaults to standard port for Medusa server

let MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL

 const medusaClient = new Medusa({
  
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3,
})

if(medusaClient){
  console.log("medusa client successfully created")
}

export {MEDUSA_BACKEND_URL,  medusaClient , queryClient}