import { EllipseMiniSolid } from "@medusajs/icons"
import { ChangeEvent } from "react"
import { RadioGroup, Box,
  Radio,
  FormControlLabel,
  FormControl, } from "@mui/material"
import { FlexBox } from "components/flex-box"
import { Span } from "components/Typography"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";


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
    <FlexBox gap={3} flexDirection="column">
      <Span 
        fontSize="14px" color="grey.800"
      >{title}</Span>
      <FormControl>
      <RadioGroup data-testid={dataTestId}
      name="sort-products"
      value={value}
     
      >
        {items?.map((i) => (
          <FlexBox
            key={i.value}
            gap={2} alignItems="center" sx={{ml:i.value === value && "-1.75rem"}}>
            {i.value === value && <EllipseMiniSolid />}
            <FormControlLabel
              value={i.value}
              id={i.value}
              control={
                <Radio
                  checked={
                    i.value === value
                  }
                  icon={<AddIcon color="secondary" />}
                  checkedIcon={
                    <CheckCircleIcon color="success" />
                  }
                  onChange={(e) =>
                    handleChange(
                      e as unknown as ChangeEvent<HTMLButtonElement>,
                      i.value
                    )}
                />
              }
              label={i.label}
            />            
          </FlexBox>
        ))}
      </RadioGroup>
      </FormControl>
    </FlexBox>
  )
}

export default FilterRadioGroup
