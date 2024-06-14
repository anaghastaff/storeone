
import { Review } from "medusa/types/global";
const averageRating =  ({response}:{
    response: Review[] | null
}) =>{
    if(!response || response?.length === null){
        return 0;
    }             
   if(response?.length > 0){
    const whole = response?.length * 5;    
    let part = 0;
    response?.forEach(item=>{
        part = part + item.rating;
    })  
    const stars_per_rating = 5;
    const rating_percentage = (part/whole) * 100;
    const average_rating = (stars_per_rating / 100) * rating_percentage;
    return parseFloat(average_rating.toFixed(1));
}
 return 0 ;
}

export default averageRating;