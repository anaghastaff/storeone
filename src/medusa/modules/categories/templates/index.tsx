
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { ProductCategoryWithChildren, type AverageRatings, type CartWithCheckoutStep } from "medusa/types/global"
import InteractiveLink from "medusa/modules/common/components/interactive-link"
// import SkeletonProductGrid from "medusa/modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "medusa/modules/store/components/refinement-list"
import { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "medusa/modules/store/templates/paginated-products"
import LocalizedClientLink from "medusa/modules/common/components/localized-client-link"
import Section6 from "pages-sections/health-beauty-shop/section-6"
import type { Region } from "@medusajs/medusa"
import { Link } from "@mui/material"
import Loading from "app/loading"

export default function CategoryTemplate({
  categories,
  sortBy,
  page,
  countryCode,
  cart,
  region,
  ratings
}: {
  categories: ProductCategoryWithChildren[] 
  sortBy?: SortOptions
  page?: string
  countryCode: string
  cart: CartWithCheckoutStep,
  region:Region
  ratings:AverageRatings
}) {
  const pageNumber = page ? parseInt(page) : 1
  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)
  
  if (!category || !countryCode) notFound()

  return (  
          
          <Section6
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            categories={categories}
            categoryId={category.id}
            countryCode={countryCode}
            heading="Categories"
            description="Use code: FIFTEEN at the time of checkout to avail flat 15% discount"
            cart={cart}
            region={region}
            ratings={ratings}
          />
        
     
  )
}
