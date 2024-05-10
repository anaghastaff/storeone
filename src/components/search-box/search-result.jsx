import Link from "next/link";
import MenuItem from "@mui/material/MenuItem"; // STYLED COMPONENT

import { SearchResultCard } from "./styled"; // ==============================================================

// ==============================================================
const SearchResult = ({
  results
}) => <SearchResultCard elevation={2}>
    {results.map(item => <Link href={`/products/search/${item}`} key={item}>
        <MenuItem key={item}>{item}</MenuItem>
      </Link>)}
  </SearchResultCard>;

export default SearchResult;