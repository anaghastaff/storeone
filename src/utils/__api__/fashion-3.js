import { cache } from "react";
import axios from "axios"; // CUSTOM DATA MODELS

const getProducts = cache(async () => {
  const response = await axios.get("/api/fashion-shop-3/products");
  return response.data;
});
const getFeatureProducts = cache(async () => {
  const response = await axios.get("/api/fashion-shop-3/products?tag=feature");
  return response.data;
});
const getMainCarouselData = cache(async () => {
  const response = await axios.get("/api/fashion-shop-3/main-carousel");
  return response.data;
});
const getServices = cache(async () => {
  const response = await axios.get("/api/fashion-shop-3/services");
  return response.data;
});
const getBlogs = cache(async () => {
  const response = await axios.get("/api/fashion-shop-3/blogs");
  return response.data;
});
export default {
  getProducts,
  getFeatureProducts,
  getMainCarouselData,
  getServices,
  getBlogs
};