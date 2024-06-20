import { AllReviews, AverageRatings } from "medusa/types/global"
type Props = {   
        sum:number,
        count:number,    
} 

export async function calculateAverageRating({allReviews}:{allReviews:AllReviews}) {
    let productRatings:Record<string, Props> = {} 
    // Map the ratings object received from backend into productRatings{}
    allReviews.forEach(element => {        
        const productId = element.product_id;
        const rating = element.rating;
        if(productRatings.hasOwnProperty(productId)){
            productRatings[productId].sum += rating;
            productRatings[productId].count++;
        }
        else{
            productRatings[productId] = {
                sum: rating,
                count:1,
            }           
        }
    });    
    // Calculate average rating for each productID and push it into averageRatings[]
    const averageRatings=[];
    for (const productId in productRatings){
        const average = productRatings[productId].sum / productRatings[productId].count;
        // averageRatings.push({[productId]:average})
        averageRatings.push({id:productId, averageRating:average, count:productRatings[productId].count});
    }    
    return averageRatings as AverageRatings;
}