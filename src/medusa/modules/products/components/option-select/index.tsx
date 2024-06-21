import { ProductOption } from "@medusajs/medusa"
import React from "react"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip"
import { onlyUnique } from "medusa/lib/util/only-unique"
import type { PricedVariant } from "@medusajs/medusa/dist/types/pricing";

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void 
  title: string
  'data-testid'?: string
  currentColor?:string
  variants?:PricedVariant[] ,
  variant?:PricedVariant
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  'data-testid': dataTestId,
  currentColor,
  variants,
  variant
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  const relevantSizeOptions = title === "Size" && currentColor 
  ? filteredOptions.filter((size) => 
      variants.some(variant => 
        variant?.options?.some(option => option.value === currentColor) && 
        variant?.options?.some(option => option.value === size)
      )
    )
  : filteredOptions;

 
  
  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 1, fontSize:'8px' }} data-testid={dataTestId}>
      {relevantSizeOptions.map((v) => (
        <Tooltip key={v} title={title === "Size" ? `Size - ${v}` : `Color - ${v}`} arrow>
        <Button
        size="small"
          key={v}
          onClick={() => updateOption({ [option.id]: v })}
          sx={{      
            border: '1px solid lightgrey',
            //  backgroundColor: (v === current && title !== "Color") ? '#eee' : v,
            height: 25,
            borderRadius: '10%',
            flex: '1',
            width:25,
            maxWidth:'fit-content',
            minWidth:25,
            '&:hover': {
              boxShadow: v !== current ? '1px 1px 1px rgba(1,1,1,0.1)' : 'none',
              transition: 'box-shadow 0.2s ease-in-out',
              // backgroundColor: (v === current && title !== "Color") ? '#eee' : v,
              border:  '2px solid grey',
            },
            '&:focus': {
              boxShadow: v !== current ? '1px 1px 1px rgba(0,0,0,0.1)' : 3,
              transition: 'box-shadow 0.2s ease-in-out',
              border: v === current && v !=='indigo'  ? '2px solid grey' : v,
            },
          }}
          data-testid="option-button"
        >
          {title === "Size" ? v : <div 
          style={{backgroundColor: v, borderRadius:'50%', height:10, width:10, border: v==="white" || v==="beige" || v==="grey" || v.toLowerCase()==='cream' ? "0.1rem solid lightgrey" : ""}}
          ></div>}
        </Button>
        </Tooltip>
      ))}
    </Box>
  </Box>
  </>
  )
}

export default OptionSelect
