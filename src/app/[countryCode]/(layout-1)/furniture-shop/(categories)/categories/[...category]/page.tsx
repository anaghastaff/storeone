import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCategoryByHandle, getRegion, listCategories, listRegions } from "medusa/lib/data"
import CategoryTemplate from "medusa/modules/categories/templates"
import { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products"
import { fetchCart } from "medusa/lib/util/get-cart-from-cookie";
import { FetchAllReviews } from "medusa/lib/util/fetch-all-reviews";
import { calculateAverageRating } from "medusa/lib/util/get-average-rating";
import FurnitureCategoryTemplate from "medusa/modules/categories/template-2"

type Props = {
  params: { category: string[]; countryCode: string } 
  searchParams: {
    sortBy?: SortOptions 
    page?: string
  }
}

export async function generateStaticParams() {
  const product_categories = await listCategories()

  if (!product_categories) {
    return []
  }
  const countryCodes = await listRegions().then((regions) =>
    regions?.map((r) => r.countries.map((c) => c.iso_2)).flat() 
  )
  const categoryHandles = product_categories.map((category) => category.handle)
  const staticParams = countryCodes
    ?.map((countryCode) =>
      categoryHandles.map((handle) => ({
        countryCode,
        category: [handle],
      }))
    )
    .flat()

  return staticParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { product_categories } = await getCategoryByHandle(
      params.category
    ).then((product_categories) => product_categories)

    const title = product_categories
      .map((category) => category.name)
      .join(" | ")

    const description =
      product_categories[product_categories.length - 1].description ??
      `${title} category.`

    return {
      title: `${title} | Medusa Store`,
      description,
      alternates: {
        canonical: `${params.category.join("/")}`,
      },
    }
  } catch (error) {
    notFound()
  }
}

export default async function CategoryPage({ params, searchParams }: Props) { 
  const { sortBy, page } = searchParams
  const { allReviews } = await FetchAllReviews();
  const ratings = await calculateAverageRating({ allReviews });
const cart = await fetchCart();
const region = await getRegion(params.countryCode);
if (!region) {
  return null;
}
  const { product_categories } = await getCategoryByHandle(
    params.category
  ).then((product_categories) => product_categories)

  if (!product_categories) {
    notFound()
  }

  return (
    <FurnitureCategoryTemplate
      categories={product_categories}
      sortBy={sortBy}
      page={page}
      cart={cart}
      countryCode={params.countryCode}
      region={region}
      ratings={ratings}
    /> 
  )
}
