"use server"

import { cookies } from "next/headers"

import {
  addShippingMethod,
  completeCart,
  deleteDiscount,
  setPaymentSession,
  updateCart,
} from "medusa/lib/data"
import { GiftCard, StorePostCartsCartReq } from "@medusajs/medusa"
import { revalidateTag } from "next/cache"
import { redirect, useRouter } from "next/navigation"
import { error } from "console"
import type { CartAddress, CartWithCheckoutStep } from "medusa/types/global"

export async function cartUpdate(data: StorePostCartsCartReq) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    const response = await updateCart(cartId, data)
    .then((cart:CartWithCheckoutStep)=>{cart
      if(cart?.id){
        console.log("Addresses updated successfully")
        return "success"
      }

      else {
        console.log(error.toString())
        return error.toString()}
    }
  )
    revalidateTag("cart")
    return response
  } catch (error: any) {
    return error.toString()
  }
}

export async function setCartAddress(sameAsShipping: boolean, values: CartAddress) {
  if (!values) return "No form data received"
  
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return { message: "No cartId cookie found" }

  const data = {
    shipping_address: {
      first_name: values.shipping_firstName ? values.shipping_firstName :  "",
      last_name: values.shipping_lastName ? values.shipping_lastName : "",
      address_1: values.shipping_address1 ? values.shipping_address1 : "",
      address_2: values.shipping_address2 ? values.shipping_address2 : "",
      company: values.shipping_company ? values.shipping_company : "",
      postal_code: values.shipping_zip ? values.shipping_zip : "",
      city: values.shipping_city ? values.shipping_city : "",
      country_code: values.shipping_country.value ? values.shipping_country.value.toLocaleLowerCase() : "",
      province: values.shipping_city ? values.shipping_city : "",
      phone: values.shipping_contact ? values.shipping_contact : "",
    },
    email: values.email ? values.email : "",
  } as StorePostCartsCartReq



  if (sameAsShipping) {data.billing_address = data.shipping_address};

  if (!sameAsShipping )
    data.billing_address = {
      first_name: values.billing_firstName ? values.billing_firstName :  "",
      last_name: values.billing_lastName ? values.billing_lastName : "",
      address_1: values.billing_address1 ? values.billing_address1 : "",
      address_2: values.billing_address2 ? values.billing_address2 : "",
      company: values.billing_company ? values.billing_company : "",
      postal_code: values.billing_zip ? values.billing_zip : "",
      city: values.billing_city ? values.billing_city : "",
      country_code: values.billing_country.value ? values.billing_country.value.toLocaleLowerCase() : "",
      province: values.shipping_city ? values.shipping_city : "",
      phone: values.billing_contact ? values.billing_contact : "",
    } as StorePostCartsCartReq

    
    try {
      const response = await updateCart(cartId, data)
      .then((cart:CartWithCheckoutStep)=>{cart
        if(cart?.id){
          console.log("Addresses updated successfully")
          return "success"
        }
  
        else {
          console.log(error.toString())
          return error.toString()}
      }
    )
      revalidateTag("cart")
      return response
    } catch (error: any) {
      return error.toString()
    }

  // redirect(
  //   `/${formData.get("shipping_address.country_code")}/checkout?step=delivery`
  // )
}

export async function applyDiscount(code: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await updateCart(cartId, { discounts: [{ code }] }).then(() => {
      revalidateTag("cart")
    })
  } catch (error: any) {
    throw error
  }
}

export async function applyGiftCard(code: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await updateCart(cartId, { gift_cards: [{ code }] }).then(() => {
      revalidateTag("cart")
    })
  } catch (error: any) {
    throw error
  }
}

export async function removeDiscount(code: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await deleteDiscount(cartId, code)
    revalidateTag("cart")
  } catch (error: any) {
    throw error
  }
}

export async function removeGiftCard(
  codeToRemove: string,
  giftCards: GiftCard[]
) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return "No cartId cookie found"

  try {
    await updateCart(cartId, {
      gift_cards: [...giftCards]
        .filter((gc) => gc.code !== codeToRemove)
        .map((gc) => ({ code: gc.code })),
    }).then(() => {
      revalidateTag("cart")
    })
  } catch (error: any) {
    throw error
  }
}

export async function submitDiscountForm(
  currentState: unknown,
  formData: FormData
) {
  const code = formData.get("code") as string

  try {
    await applyDiscount(code).catch(async (err) => {
      await applyGiftCard(code)
    })
    return null
  } catch (error: any) {
    return error.toString()
  }
}

export async function setAddresses(currentState: unknown, formData: FormData) {
  if (!formData) return "No form data received"

  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) return { message: "No cartId cookie found" }

  const data = {
    shipping_address: {
      first_name: formData.get("shipping_address.first_name"),
      last_name: formData.get("shipping_address.last_name"),
      address_1: formData.get("shipping_address.address_1"),
      address_2: "",
      company: formData.get("shipping_address.company"),
      postal_code: formData.get("shipping_address.postal_code"),
      city: formData.get("shipping_address.city"),
      country_code: formData.get("shipping_address.country_code"),
      province: formData.get("shipping_address.province"),
      phone: formData.get("shipping_address.phone"),
    },
    email: formData.get("email"),
  } as StorePostCartsCartReq

  const sameAsBilling = formData.get("same_as_billing")

  if (sameAsBilling === "on") data.billing_address = data.shipping_address

  if (sameAsBilling !== "on")
    data.billing_address = {
      first_name: formData.get("billing_address.first_name"),
      last_name: formData.get("billing_address.last_name"),
      address_1: formData.get("billing_address.address_1"),
      address_2: "",
      company: formData.get("billing_address.company"),
      postal_code: formData.get("billing_address.postal_code"),
      city: formData.get("billing_address.city"),
      country_code: formData.get("billing_address.country_code"),
      province: formData.get("billing_address.province"),
      phone: formData.get("billing_address.phone"),
    } as StorePostCartsCartReq

  try {
    await updateCart(cartId, data)
    revalidateTag("cart")
  } catch (error: any) {
    return error.toString()
  }

  redirect(
    `/${formData.get("shipping_address.country_code")}/checkout?step=delivery`
  )
}

export async function setShippingMethod(shippingMethodId: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")

  try {
    await addShippingMethod({ cartId, shippingMethodId })
    revalidateTag("cart")
    
  } catch (error: any) {
    throw error
  }
}

export async function setPaymentMethod(providerId: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")
    console.log("Cart ID", cartId)
  console.log("providerId", providerId)
  try {
    const cart = await setPaymentSession({ cartId, providerId })
    revalidateTag("cart")
    return cart
  } catch (error: any) {
    throw error
  }
}

export async function placeOrder() {
  const cartId = cookies().get("_medusa_cart_id")?.value

  if (!cartId) throw new Error("No cartId cookie found")

  let cart

  try {
    cart = await completeCart(cartId)
    revalidateTag("cart")
  } catch (error: any) {
    throw error
  }
 
  if (cart?.type === "order") {
    const countryCode = cart.data.shipping_address?.country_code?.toLowerCase()
    cookies().set("_medusa_cart_id", "", { maxAge: -1 })
    console.log(`Redirecting to: /${countryCode}/order-confirmation/${cart?.data.id}`);
    redirect(`/${countryCode}/order-confirmation/${cart?.data.id}`)
   }

  return cart 
}
