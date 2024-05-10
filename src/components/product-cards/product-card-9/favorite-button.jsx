import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENTS

import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"; // ==============================================================

// ==============================================================
const FavoriteButton = ({
  isFavorite,
  toggleFavorite
}) => <IconButton size="small" onClick={toggleFavorite} sx={{
  position: "absolute",
  top: 15,
  right: 15
}}>
    {isFavorite ? <Favorite color="primary" fontSize="small" /> : <FavoriteBorder fontSize="small" />}
  </IconButton>;

export default FavoriteButton;