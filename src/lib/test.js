export function itemSize (item){
   const sizes =  item?.variants.map((variant)=>{
        const size = variant.title.split(" / ")[0];
    return size;
    }).filter(size=>size);
    const uniqueSizes = [...new Set(sizes)];
    console.log("uniqueSizes", uniqueSizes)
    return uniqueSizes;
}