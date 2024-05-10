import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // LOCAL CUSTOM HOOKS

import useSearch from "./use-search"; // LOCAL CUSTOM COMPONENT

import SearchResult from "./search-result"; // STYLED COMPONENT

import { SearchOutlinedIcon } from "./styled";

const SearchInput = () => {
  const {
    handleSearch,
    parentRef,
    resultList
  } = useSearch();
  const INPUT_PROPS = {
    sx: {
      height: 44,
      paddingRight: 0,
      borderRadius: 300,
      color: "grey.700",
      overflow: "hidden",
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "primary.main"
      }
    },
    endAdornment: <Button color="primary" disableElevation variant="contained" sx={{
      px: "3rem",
      height: "100%",
      borderRadius: "0 300px 300px 0"
    }}>
        Search
      </Button>,
    startAdornment: <SearchOutlinedIcon fontSize="small" />
  };
  return <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto" {...{
    ref: parentRef
  }}>
      <TextField fullWidth variant="outlined" placeholder="Searching for..." onChange={handleSearch} InputProps={INPUT_PROPS} />

      {
      /* SHOW SEARCH RESULT LIST */
    }
      {resultList.length > 0 ? <SearchResult results={resultList} /> : null}
    </Box>;
};

export default SearchInput;