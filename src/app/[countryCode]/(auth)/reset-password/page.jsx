import { ResetPasswordPageView } from "pages-sections/sessions/page-view";
import { getCustomer } from "medusa/lib/data";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Reset Password - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function ResetPassword() {
  const customer = await getCustomer()
  if(customer){
    redirect('/profile')
  }
  return <ResetPasswordPageView />;
}