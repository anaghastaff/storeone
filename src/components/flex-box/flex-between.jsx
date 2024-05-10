import Box from "@mui/material/Box";

const FlexBetween = ({
  children,
  ...props
}) => <Box display="flex" justifyContent="space-between" alignItems="center" {...props}>
    {children}
  </Box>;

export default FlexBetween;