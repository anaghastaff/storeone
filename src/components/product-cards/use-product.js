
import { useCallback, useState } from "react";
import { useSnackbar } from "notistack";
import useCart from "hooks/useCart";

const useProduct = slug => {
  const {
    state,
    dispatch
  } = useCart();
  const {
    enqueueSnackbar
  } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const cartItem = state.cart.find(item => item.slug === slug);
  const toggleFavorite = useCallback(() => setIsFavorite(fav => !fav), []);
  const toggleDialog = useCallback(() => setOpenModal(open => !open), []);

  const handleCartAmountChange = (product, type) => {
    if(type === "Add to cart"){
      
    }

    if (type === "remove") enqueueSnackbar("Remove from Cart", {
      variant: "error"
    });else enqueueSnackbar("Added to Cart", {
      variant: "success"
    });
  };
 
  return {
    cartItem,
    openModal,
    isFavorite,
    toggleDialog,
    toggleFavorite,
    handleCartAmountChange
  };
};

export default useProduct;