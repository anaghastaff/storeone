import type { Region, StorePostCartsCartReq } from "@medusajs/medusa"
import { cache } from "react"
import { medusaClient } from "medusa/lib/config" 
import medusaError from "lib/utils/medusa-error"
import { cookies } from "next/headers"

const regionMap = new Map<string, Region>()

export const getRegion = cache(async function (countryCode: string) {
    try {
      if (regionMap.has(countryCode)) {
        return regionMap.get(countryCode)
      }
  
      const regions = await listRegions()
  
      if (!regions) {
        return null
      }
  
      regions.forEach((region) => {
        region.countries.forEach((c) => {
          regionMap.set(c.iso_2, region)
        })
      })
  
      const region = countryCode
        ? regionMap.get(countryCode)
        : regionMap.get("us")
  
      return region
    } catch (e: any) {
      console.log(e.toString())
      return null
    }
  })

  // Region actions
export const listRegions = cache(async function () {
    return medusaClient.regions
      .list()
      .then(({ regions }) => regions)
      .catch((err) => {
        console.log(err)
        return null
      })
  })

  export async function updateCart(cartId: string, data: StorePostCartsCartReq) {
    const headers = getMedusaHeaders(["cart"])
  
    return medusaClient.carts
      .update(cartId, data, headers)
      .then(({ cart }) => cart)
      .catch((error) => medusaError(error))
  }

  /**
 * Function for getting custom headers for Medusa API requests, including the JWT token and cache revalidation tags.
 *
 * @param tags
 * @returns custom headers for Medusa API requests
 */
const getMedusaHeaders = (tags: string[] = []) => {
    const headers = {
      next: {
        tags,
      },
    } as Record<string, any>
  
    const token = cookies().get("_medusa_jwt")?.value
  
    if (token) {
      headers.authorization = `Bearer ${token}`
    } else {
      headers.authorization = ""
    }
  
    return headers
  }