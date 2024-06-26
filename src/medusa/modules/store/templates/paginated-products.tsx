import { getProductsListWithSort, getRegion } from "medusa/lib/data"
// import ProductPreview from "medusa/modules/products/components/product-preview"
import { PaginationMedusa } from "medusa/modules/store/components/pagination"
import { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  const {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      <ul 
      className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8" data-testid="products-list"
      
      >
        {products.map((p) => {
          return (
            <li key={p.id}>
              
              {/* <ProductPreview productPreview={p} region={region} /> */}
            </li>
          )
        })}
      </ul>
      {totalPages > 1 && <PaginationMedusa data-testid="product-pagination" page={page} totalPages={totalPages} />}
    </>
  )
}
