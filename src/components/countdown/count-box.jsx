import { H3, Span } from "components/Typography"; // ==============================================================

// ==============================================================
const CountBox = ({
  digit = 365,
  title = "DAYS"
}) => <H3>
    {digit}{" "}
    <Span color="grey.600" fontSize={14} fontWeight={600}>
      {title}
    </Span>
  </H3>;

export default CountBox;