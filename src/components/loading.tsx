import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageLoadFallback({ pagename }: { pagename?: string }) {
  return (
    <Box
      sx={{
        display: "flex",    
        gap: 3,        
        justifyContent: "center",
        alignItems: "center",
        minWidth:'100%',
        width:'100%',
        flexGrow:1,
        minHeight:'70vh',
        m:'auto',
        textAlign: 'center',
      }}
    >
      <CircularProgress disableShrink color="info" size={16} thickness={4} />
    </Box>
  );
}
