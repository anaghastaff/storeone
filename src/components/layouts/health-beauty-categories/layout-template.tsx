import type { Viewport } from "next";
import React from 'react'
import type { SortOptions } from "medusa/modules/store/components/refinement-list/sort-products";
import HealthCategoriesLayout from "components/layouts/health-beauty-categories";

function layout({children, params}:{
    children:React.ReactNode
    params:{
        countryCode:string
    },
   
}) {
  return (
    <HealthCategoriesLayout >{children}</HealthCategoriesLayout>
  )
}


export default layout
