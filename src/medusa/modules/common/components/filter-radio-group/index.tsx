import { EllipseMiniSolid } from "@medusajs/icons"
import { ChangeEvent } from "react"
import { RadioGroup, Box,
  Radio,
  FormControlLabel,
  FormControl,
  Divider, } from "@mui/material"
import { FlexBox } from "components/flex-box"
import { Span } from "components/Typography"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from '@mui/icons-material/Circle';


type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  'data-testid'?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  'data-testid': dataTestId
}: FilterRadioGroupProps) => {
  return (
    <FlexBox gap={1} flexDirection="column" padding={1}> 
      <Span 
        fontSize="16px" fontWeight="600" color="grey.800"
      >{title}</Span>
      <FormControl >
      <RadioGroup data-testid={dataTestId}
      name="sort-products"
      value={value}

      sx={{display:'flex', width:'100%'}}
      >
        {items?.map((i) => (
          <FlexBox
            key={i.value}
             alignItems="center" >
            {/* {i.value === value && <CircleIcon color="info" sx={{width:12, height:12}}/>} */}
            <FormControlLabel
            
              value={i.value}
              id={i.value}
              label={i.label}
              control={
                <Radio
                  checked={
                    i.value === value
                  }
                  icon={<CircleIcon sx={{width:6, height:6, }}/>}
                  checkedIcon={
                    <CircleIcon color="info" sx={{width:10, height:10, }}/>
                  }
                  onChange={(e) =>
                    handleChange(
                      e as unknown as ChangeEvent<HTMLButtonElement>,
                      i.value
                    )}
                />
              }
              
            />
            <Divider sx={{height:'1rem', border:'0.1rem solid lightgrey'}} orientation="vertical"/>            
          </FlexBox>
        ))}
      </RadioGroup>
      </FormControl>
    </FlexBox>
  )
}

export default FilterRadioGroup
