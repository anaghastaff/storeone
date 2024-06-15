import { CustomerDashboardLayout } from "components/layouts/customer-dashboard";
import { getCustomer, listCustomerOrders } from "medusa/lib/data";
import { redirect } from "next/navigation";
export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default async function Layout({
  children
}) {
 
  const customer = await getCustomer()
  const orders = await listCustomerOrders()
  if(!customer){
      redirect("/login")
  }
 
  
  return (customer && <CustomerDashboardLayout customer={customer} orders={orders}>{children}</CustomerDashboardLayout>)
}