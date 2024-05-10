import countryList from "data/countryList"
import type { CartAddress } from "medusa/types/global";

const RetrieveCountryCode = (countryName:any) =>{

    const countryCode = countryList.find((country)=> country.label === countryName.label );
    
    return countryCode.value;
}

export default RetrieveCountryCode