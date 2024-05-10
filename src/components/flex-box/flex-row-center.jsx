import Box from "@mui/material/Box";

const FlexRowCenter = ({
  children,
  ...props
}) => <Box display="flex" justifyContent="center" alignItems="center" {...props}>
    {children}
  </Box>;

export default FlexRowCenter;