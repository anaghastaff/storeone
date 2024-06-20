'use client'
import { usePathname } from "next/navigation";
export const GetCountryCode = () =>{    
    const pathname = usePathname();    
    return pathname.split("/")[1]
}

