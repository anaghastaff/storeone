import Box from "@mui/material/Box";

const FlexBox = ({
  children,
  ...props
}) => <Box display="flex" {...props}>
    {children}
  </Box>;

export default FlexBox;