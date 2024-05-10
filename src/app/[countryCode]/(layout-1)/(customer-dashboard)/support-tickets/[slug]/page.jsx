import { notFound } from "next/navigation";
import { TicketDetailsPageView } from "pages-sections/customer-dashboard/support-tickets/page-view"; // API FUNCTIONS

import api from "utils/__api__/ticket";
export const metadata = {
  title: "Order Details - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function SupportTicketDetails({
  params
}) {
  try {
    const ticket = await api.getTicket(String(params.slug));
    return <TicketDetailsPageView ticket={ticket} />;
  } catch (error) {
    notFound();
  }
}