"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import Box from '@mui/material/Box'
import SortProducts, { SortOptions } from "./sort-products"
import { Divider } from "@mui/material"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  'data-testid'?: string
}

const RefinementList = ({ sortBy, 'data-testid': dataTestId }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <Box 
    sx={{
      display: "flex",
      flexDirection: { xs: 'row', sm: 'column' }, // Adjust for responsive behavior
      gap: '12px',     
      pl:2,
    }}
    >
      <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} data-testid={dataTestId} />
      
    </Box>
  )
}

export default RefinementList
