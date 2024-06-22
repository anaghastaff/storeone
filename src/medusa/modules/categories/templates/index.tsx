import { notFound } from "next/navigation"
import { Suspense } from "react"

import { ProductCategoryWithChildren, type AverageRatings, type CartWithCheckoutStep } from "medusa/types/global"
import InteractiveLink from "medusa/modules/common/components/interactive-link"
// import SkeletonProductGrid from "medusa/modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "medusa/modules/store/components/refinement-list"
import { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "medusa/modules/store/templates/paginated-products"
import LocalizedClientLink from "medusa/modules/common/components/localized-client-link"
import Section5 from "../../../../pages-sections/furniture-shop/section-5"
import type { Region } from "@medusajs/medusa"
import { Link } from "@mui/material"

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
    <div 
    // className="flex flex-col small:flex-row small:items-start py-6 content-container" data-testid="category-container"
    style={{display:'flex', flexDirection:'column', paddingTop:6, paddingBottom:6}}
    >
      {/* <RefinementList sortBy={sortBy || "created_at"} data-testid="sort-by-container" /> */}
      <div 
      // className="w-full"
        style={{width:'100%'}}
      >
        <div 
        // className="flex flex-row mb-8 text-2xl-semi gap-4"
        style={{display:'flex', flexDirection:'row', marginBottom:8, fontSize:'semi-bold', gap:4  }}
        >
          {parents &&
            parents.map((parent) => (
              <span key={parent.id}
              //  className="text-ui-fg-subtle"
               style={{color:'grey'}}
               >
                <Link
                  // className="mr-4 hover:text-black"
                  style={{marginRight:4}}
                  href={`/furniture-shop/categories/${parent.handle}`}
                  data-testid="sort-by-link"
                >
                  {parent.name}
                </Link>
                /
              </span>
            ))}
          <h1>{category.name}</h1>
        </div>
        {category.description && (
          <div 
          // className="mb-8 text-base-regular"
          style={{marginBottom:8, fontWeight:'regular'}}
          >
            <p>{category.description}</p>
          </div>
        )}
        {category.category_children && (
          <div 
          // className="mb-8 text-base-large"
          style={{marginBottom:8, fontWeight:'regular'}}
          >
            <ul 
            // className="grid grid-cols-1 gap-2"
              style={{display:'grid', gridTemplateColumns: `repeat(1, minmax(0, 1fr))`}}
            >
              {category.category_children?.map((c) => (
                <li key={c.id}>
                  <InteractiveLink href={`/furniture-shop/categories/${c.handle}`}>
                    {c.name}
                  </InteractiveLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        
          <Section5
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            categories={categories}
            categoryId={category.id}
            countryCode={countryCode}
            heading="Categories"
            description="Some categories"
            cart={cart}
            region={region}
            ratings={ratings}
          />
        
      </div>
    </div>
  )
}
