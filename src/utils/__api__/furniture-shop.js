import { cache } from "react";
import axios from "axios"; // CUSTOM DATA MODELS 

const getTopNewProducts = cache(async () => {
  const response = await axios.get("/api/furniture-shop/products?tag=new");
  return response.data;
});
const getTopSellingProducts = cache(async () => {
  const response = await axios.get("/api/furniture-shop/products?tag=top-selling");
  return response.data;
});
const getFurnitureProducts = cache(async () => {
  const response = await axios.get("/api/furniture-shop/all-products");
  return response.data;
});
// const getFurnitureShopNavList = cache(async () => {
//   const response = await axios.get("/api/furniture-shop/navigation"); 
//   return response.data;
// });
const getFurnitureShopNavList = cache(async () => {
  const response = await axios.get("/api/furniture-shop/navigation"); 
  return response.data;
});
const getMainCarouselData = cache(async () => {
  const response = await axios.get("/api/furniture-shop/main-carousel");
  return response.data;
});
export default {
  getTopNewProducts,
  getMainCarouselData,
  getFurnitureProducts,
  getTopSellingProducts,
  getFurnitureShopNavList
};