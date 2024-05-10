import Button from "@mui/material/Button"; // ==================================================

// ==================================================
const WhiteButton = ({
  children,
  ...props
}) => {
  const STYLE = {
    color: "dark.main",
    backgroundColor: "white",
    ":hover": {
      color: "#fff",
      backgroundColor: "dark.main"
    }
  };
  return <Button color="dark" variant="contained" sx={STYLE} {...props}>
      {children}
    </Button>;
};

export default WhiteButton;