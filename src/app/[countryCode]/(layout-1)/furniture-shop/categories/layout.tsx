import type { Viewport } from "next";
import React from 'react'
import CategoriesLayout from "components/layouts/categories";
import type { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products";

function layout({children, params}:{
    children:React.ReactNode
    params:{
        countryCode:string
    },
   
}) {
  return (
    <CategoriesLayout >{children}</CategoriesLayout>
  )
}


export default layout
