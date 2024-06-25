import { RegisterPageView } from "pages-sections/sessions/page-view";
import { getCustomer } from "medusa/lib/data";
import { redirect } from "next/navigation";


export const metadata = {
  title: "Register - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function Register() {
  const customer = await getCustomer()
  if(customer){
    redirect('/profile')
  }
  return <RegisterPageView />;
}