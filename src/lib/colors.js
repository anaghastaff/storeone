// import { useProducts } from "medusa-react"

// export function variantColors (){

//     const {products, error, isLoading} =  useProducts();
// const colors = products?.flatMap((product) =>
//   product?.variants.map((variant) => {
//     const color = variant.title.split(" / ")[1];
//     return color;
//   })
// ).filter((color) => color);

// const uniqueColors = [...new Set(colors)];

// return uniqueColors;
// }

export function variantColors (item){
  const colors =  item?.variants.map((variant)=>{
       const color = variant.title.split(" / ")[1];
   return color;
   }).filter(color=>color);
   const uniqueColors = [...new Set(colors)];
   
   return uniqueColors;
}



