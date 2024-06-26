"use client";

import { usePathname, useParams, useRouter } from "next/navigation"; // LOCAL CUSTOM COMPONENTS
import BoxLink from "./box-link";
import Button from "@mui/material/Button"
import LogoWithTitle from "./logo-title";
import LoginBottom from "./login-bottom";
import SocialButtons from "./social-buttons"; // GLOBAL CUSTOM COMPONENTS
import { signOut } from "medusa/modules/account/actions";
import { FlexRowCenter } from "components/flex-box"; // COMMON STYLED COMPONENT

import { Wrapper } from "./styles";
import type { Customer } from "@medusajs/medusa";

interface AccountLayoutProps {
  customer: Omit<Customer, "password_hash"> | null
  children: React.ReactNode
}

const AuthLayout:React.FC<AccountLayoutProps> = ({ children, customer }) => {

  const pathname = usePathname();
  const {countryCode} = useParams() as {countryCode : string};
  const router = useRouter();
  console.log("pathname in auth layout", pathname)
  if(customer){
    router.push(`/${countryCode}/profile`)
  }

  const handleLogout = async () => {
    await signOut(countryCode)
  }  
  let BOTTOM_CONTENT = null; // APPLIED FOR ONLY LOGIN PAGE

  if (pathname === `/${countryCode}/login` && !customer) {
    BOTTOM_CONTENT = <LoginBottom  />;
  } // APPLIED FOR ONLY REGISTER PAGE

  if (pathname === `/${countryCode}/register` && !customer) {
    BOTTOM_CONTENT = (
      <FlexRowCenter gap={1} mt={3}>
        Already have an account?
        <BoxLink title="Login" href={`/${countryCode}/login`} />
      </FlexRowCenter>
    );
  } // APPLIED FOR ONLY RESET PASSWORD PAGE

  if (pathname === `/${countryCode}/reset-password` && !customer) {
    return (
      <FlexRowCenter flexDirection="column" minHeight="100vh" px={2}>
        <Wrapper elevation={3}>{children}</Wrapper>
      </FlexRowCenter>
    );
  }
 
  
  return (
    !customer && 
    
     <FlexRowCenter flexDirection="column" minHeight="100vh" px={2}>

      <Wrapper elevation={3}>
         
        {/* LOGO WITH TITLE AREA */}
        <LogoWithTitle />

        {/* FORM AREA */}
        {children}

        
        {/* SOCIAL BUTTON AREA */}
        <SocialButtons />

        {/* RENDER BOTTOM CONTENT BASED ON CONDITION */}
        {BOTTOM_CONTENT}
      </Wrapper>
    </FlexRowCenter>
  );
};

export default AuthLayout;
