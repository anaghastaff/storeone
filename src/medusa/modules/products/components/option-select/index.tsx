import { ProductOption } from "@medusajs/medusa"
import React from "react"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  currentColor:string
  variants:PricedVariant[] 
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  'data-testid': dataTestId,
  currentColor,
  variants
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
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
    
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 1.5 }} data-testid={dataTestId}>
      {relevantSizeOptions.map((v) => (
        <Tooltip key={v} title={title === "Size" ? `Size - ${v}` : `Color - ${v}`} arrow>
        <Button
          key={v}
          onClick={() => updateOption({ [option.id]: v })}
          sx={{
            border:'1px solid lightgrey',
            backgroundColor: (v === current && title !== "Color") ? '#eee' : v,
            height: 30,
            borderRadius: '10%',
            flex: '1',
            width:30,
            maxWidth:'fit-content',
            minWidth:30,
            '&:hover': {
              boxShadow: v !== current ? '0px 0px 4px rgba(0,0,0,0.1)' : 'none',
              transition: 'box-shadow 0.2s ease-in-out',
              backgroundColor: (v === current && title !== "Color") ? '#eee' : v,
            },
            '&:focus': {
              boxShadow: v !== current ? '0px 0px 4px rgba(0,0,0,0.1)' : 3,
              transition: 'box-shadow 0.2s ease-in-out',
              border: v === current && v !=='indigo'  ? '3px solid black' : v,
            },
          }}
          data-testid="option-button"
        >
          {title === "Size" ? v : ""}
        </Button>
        </Tooltip>
      ))}
    </Box>
  </Box>

  )
}

export default OptionSelect
