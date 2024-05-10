'use client'
import { QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient({
    defaultOptions: { 
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 60 * 24,
        retry: 3,
      },
    },
  })

  export { queryClient}