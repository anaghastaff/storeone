import AuthLayout from "pages-sections/sessions/layout";
import { getCustomer } from "medusa/lib/data";
export default async function Layout({
  children
}) {
  const customer = getCustomer()
  return <AuthLayout customer={customer}>{children}</AuthLayout>;
}