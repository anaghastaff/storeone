import { useState } from "react";

const useHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const toggleDialog = () => setDialogOpen(state => !state);

  const toggleSidenav = () => setSidenavOpen(state => !state);

  const toggleSearchBar = () => setSearchBarOpen(state => !state);

  return {
    dialogOpen,
    sidenavOpen,
    searchBarOpen,
    toggleDialog,
    toggleSidenav,
    toggleSearchBar
  };
};

export default useHeader;