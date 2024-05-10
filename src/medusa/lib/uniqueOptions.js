export default function UniqueOptions (item){
    const options =  item.map((data)=>{
         const option = data.value;
     return option;
     }).filter((option)=>option);
     const uniqueOptions = [...new Set(options)]; 
     
     return uniqueOptions;
  }