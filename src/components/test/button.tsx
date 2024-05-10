
import { Button, CircularProgress } from "@mui/material"

export const ClickButton = ({handleUpdateAddress, loading}:{
    handleUpdateAddress:()=>void,
    loading:boolean
}) =>{
    return loading ? <CircularProgress color="primary" /> : <Button onClick={handleUpdateAddress} variant="contained">
    Update Cart
</Button>
}