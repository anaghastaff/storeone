'use client'
import Link  from "@mui/material/Link"
import React, {useState} from "react"
import LoadingButton from "@mui/lab/LoadingButton"
import { signOut } from "medusa/modules/account/actions"

const LogoutButton = ({countryCode}:{
    countryCode:string
}) => {
    const [logout, setLogout] = useState(false)

    const handleLogout = async () => {
        setLogout(true)
        await signOut(countryCode);
        setLogout(false)
      };
    return <LoadingButton
    size="medium"
    onClick={handleLogout}
    variant="outlined"
    color="secondary"
    loading={logout}
    loadingPosition="end"
    loadingIndicator="Logging out"
  >
    Logout
  </LoadingButton>

}

export default LogoutButton