import type { Viewport } from "next";
import React from 'react'
import CategoriesLayout from "components/layouts/categories";

function layout({children, params}:{
    children:React.ReactNode
    params:{
        countryCode:string
    }
}) {
  return (
    <CategoriesLayout>{children}</CategoriesLayout>
  )
}


export default layout
