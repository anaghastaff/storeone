import Skeleton from '@mui/material/Skeleton'
import PageLoadFallback from 'components/loading'
export default function Loading({pagename}){
    return <PageLoadFallback pagename={pagename} />
}