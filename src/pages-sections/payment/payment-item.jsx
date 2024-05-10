import { Paragraph } from "components/Typography";
import { FlexBetween } from "components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; // ==============================================================

// ==============================================================
const PaymentItem = ({
  title,
  amount
}) => {
  return <FlexBetween mb={1}>
      <Paragraph color="grey.600">{title}</Paragraph>
      <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
        {amount ? currency(amount) : "-"}
      </Paragraph>
    </FlexBetween>;
};

export default PaymentItem;