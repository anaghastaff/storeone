"use client";

import { usePathname, useParams, useRouter } from "next/navigation"; // LOCAL CUSTOM COMPONENTS

import BoxLink from "./box-link";
import LogoWithTitle from "./logo-title";
import LoginBottom from "./login-bottom";
import SocialButtons from "./social-buttons"; // GLOBAL CUSTOM COMPONENTS

import { FlexRowCenter } from "components/flex-box"; // COMMON STYLED COMPONENT

import { Wrapper } from "./styles";

const AuthLayout = ({
  children,
  customer
}) => {

  const pathname = usePathname();
  const {countryCode} = useParams()
  const router = useRouter()

  if(customer){
    router.push(`/${countryCode}/profile`)
  }

  let BOTTOM_CONTENT = null; // APPLIED FOR ONLY LOGIN PAGE

  if (pathname === `${countryCode}/login` && !customer) {
    BOTTOM_CONTENT = <LoginBottom />;
  } // APPLIED FOR ONLY REGISTER PAGE


  if (pathname === `${countryCode}/login` && !customer) {
    BOTTOM_CONTENT = <FlexRowCenter gap={1} mt={3}>
        Already have an account?
        <BoxLink title="Login" href="/login" />
      </FlexRowCenter>;
  } // APPLIED FOR ONLY RESET PASSWORD PAGE


  if (pathname === `${countryCode}/login` && !customer) {
    return <FlexRowCenter flexDirection="column" minHeight="100vh" px={2}>
        <Wrapper elevation={3}>{children}</Wrapper>
      </FlexRowCenter>;
  }

  return <FlexRowCenter flexDirection="column" minHeight="100vh" px={2}>
      <Wrapper elevation={3}>
        {
        /* LOGO WITH TITLE AREA */
      }
        <LogoWithTitle />

        {
        /* FORM AREA */
      }
        {children}

        {
        /* SOCIAL BUTTON AREA */
      }
        <SocialButtons />

        {
        /* RENDER BOTTOM CONTENT BASED ON CONDITION */
      }
        {BOTTOM_CONTENT}
      </Wrapper>
    </FlexRowCenter>;
};

export default AuthLayout;