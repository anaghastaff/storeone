import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageLoadFallback({ pagename }: { pagename?: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        minHeight: "70vh",
        justifyContent: "center",
        alignItems: "center",
        minWidth:'100%',
        width:'100%',
        mx:'auto',
        textAlign: 'center',
      }}
    >
      <CircularProgress disableShrink color="info" size={40} thickness={4} />

      <Typography variant="h6" fontWeight="bold" color="info">
        Loading {pagename} ...
      </Typography>
    </Box>
  );
}
