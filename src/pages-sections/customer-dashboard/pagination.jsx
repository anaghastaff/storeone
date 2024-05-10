import MuiPagination from "@mui/material/Pagination";

const Pagination = props => <MuiPagination sx={{
  display: "flex",
  justifyContent: "center",
  mt: 5
}} {...props} />;

export default Pagination;