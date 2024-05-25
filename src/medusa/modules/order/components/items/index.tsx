import { LineItem, Region } from "@medusajs/medusa"
import { Table } from "@medusajs/ui"

import Divider from "@mui/material/Divider"
import Item from "medusa/modules/order/components/item"
import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

type ItemsProps = {
  items: LineItem[]
  region: Region
}

const Items = ({ items, region }: ItemsProps) => {
  return (
    <Stack width="100%" data-testid="products-table" >
      <Divider  />
      
        
          {items?.length && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return  <>
                    <Item key={item.id} item={item} region={region} />
                    <Divider key={item.id} sx={{color:'blue', borderBottom: '1px solid #e0e0e0'}}/>
                  </>
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <Skeleton key={i} width="inherit" height="inherit" />
              })}
        
      
    </Stack>
  )
}

export default Items
