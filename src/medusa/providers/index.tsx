"use client"
import { MEDUSA_BACKEND_URL, queryClient } from "medusa/lib/config"
import { MedusaProvider, CartProvider } from "medusa-react"


export default function MedusaProviders({children}:{children:React.ReactNode}){
    return (<MedusaProvider
    baseUrl={MEDUSA_BACKEND_URL}
    queryClientProviderProps={{
      client: queryClient,
    }}
    >
         <CartProvider>
        {children}
        </CartProvider>
    </MedusaProvider>)
}