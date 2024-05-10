// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph } from "components/Typography";
import { FlexBetween } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // ==============================================================

// ==============================================================
const ListItem = ({
  title,
  value,
  mb = 0.5,
  color = "grey.600"
}:{
  title:string,
  value?:string | number,
  mb: number ,
  color?: string
}) => {
  return <FlexBetween mb={mb}>
      <Paragraph color={color}>{title}:</Paragraph>
      <H6 fontWeight="700" color={color}> {value !== null && value !== undefined ? title === "Discount" ? `- ${value}`: value : "-"}</H6>
    </FlexBetween>;
};

export default ListItem;