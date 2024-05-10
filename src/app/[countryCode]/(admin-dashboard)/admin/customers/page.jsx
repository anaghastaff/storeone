import { CustomersPageView } from "pages-sections/vendor-dashboard/customers/page-view"; // API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Customers - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function Customers() {
  const customers = await api.customers();
  return <CustomersPageView customers={customers} />;
}