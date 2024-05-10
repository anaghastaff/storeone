import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // GLOBAL CUSTOM COMPONENTS

import { H1 } from "components/Typography"; // STYLED COMPONENT

import { SectionContainer } from "./styles";
import { SearchOutlinedIcon } from "components/search-box/styled";

const Section1 = () => {
  const SEARCH_BUTTON = <Button color="primary" disableElevation variant="contained" sx={{
    px: "2rem",
    height: "100%",
    borderRadius: "0 8px 8px 0"
  }}>
      Search
    </Button>;
  const STYLED = {
    height: 50,
    paddingRight: 0,
    color: "grey.700",
    background: "white",
    "& fieldset": {
      border: "none"
    }
  };
  return <SectionContainer>
      <H1 maxWidth={600} mx="auto">
        Get your grocery delivery within 30 minutes
      </H1>

      <div className="searchBox">
        <TextField fullWidth placeholder="Searching for..." InputProps={{
        sx: STYLED,
        endAdornment: SEARCH_BUTTON,
        startAdornment: <SearchOutlinedIcon fontSize="small" />
      }} />
      </div>
    </SectionContainer>;
};

export default Section1;