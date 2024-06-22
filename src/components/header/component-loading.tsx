import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ComponentLoadFallBack({ pagename }: { pagename?: string }) {
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
        minHeight:'2rem',
        height:'100%',
        m:'auto',
        textAlign: 'center',
        
      }}
    >
      <Skeleton  animation="pulse" width="100%" height="100%" sx={{bgcolor:'info.light', minHeight:'2rem'}}/>
    </Box>
  );
}
