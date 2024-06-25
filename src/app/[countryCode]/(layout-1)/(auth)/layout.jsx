import AuthLayout from "pages-sections/sessions/layout";
import { getCustomer } from "medusa/lib/data";

export const viewport = {
  width: "device-width",
  initialScale: 1,
}
export default async function Layout({
  children
}) {
  const customer = await getCustomer().catch(()=>null)
  
  return <AuthLayout customer={customer}>{children}</AuthLayout>;
}