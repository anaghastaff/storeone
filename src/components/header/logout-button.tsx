'use client'
import Link  from "@mui/material/Link"
import React, {useState} from "react"
import LoadingButton from "@mui/lab/LoadingButton"
import { signOut } from "medusa/modules/account/actions"
import { useSnackbar } from "notistack"

const LogoutButton = ({countryCode}:{
    countryCode:string
}) => {
    const [logout, setLogout] = useState(false)
    const {enqueueSnackbar} = useSnackbar();


    const handleLogout = async () => {
        setLogout(true)
        await signOut(countryCode);
        setLogout(false)
        enqueueSnackbar("You have logged out!", {variant:"warning"})
      };
    return <LoadingButton
    
    onClick={handleLogout}
    variant="outlined"
    color="secondary"
    loading={logout}
    loadingPosition="center"
    sx={{ minWidth:'fit-content'}}
  >
    <span>Logout</span>
  </LoadingButton>

}

export default LogoutButton