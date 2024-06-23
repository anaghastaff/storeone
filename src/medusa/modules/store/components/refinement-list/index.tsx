"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import Box from '@mui/material/Box'
import SortProducts, { SortOptions } from "./sort-products"

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
      display: 'flex',
      flexDirection: { xs: 'row', sm: 'column' }, // Adjust for responsive behavior
      gap: '12px',
      py: 4,
      mb: 8,
      px: { small: 0, xs: 6 },
      minWidth: { small: '250px' },
      ml: { small: '1.675rem' },
    }}
    >
      <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} data-testid={dataTestId} />
    </Box>
  )
}

export default RefinementList
