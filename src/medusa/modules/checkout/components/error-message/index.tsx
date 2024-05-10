import  Typography  from "@mui/material/Typography"
import Box from "@mui/material/Box"
const ErrorMessage = ({ error, 'data-testid': dataTestid }: { error?: string | null, 'data-testid'?: string }) => {
  if (!error) {
    return null
  }

  return (
    <Box 
    sx={{pt:2, color:'error'}}
    data-testid={dataTestid}>
      <Typography variant="caption">{error}</Typography>
    </Box>
  )
}

export default ErrorMessage
