import Skeleton from '@mui/material/Skeleton'
export default function Loading({pagename}:{pagename:string}){
return <Skeleton width="100%" height="100%" sx={{bgcolor:'grey.500'}}/>
}