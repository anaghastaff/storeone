import { OrderConfirmationPageView } from "pages-sections/order-confirmation";
export const metadata = {
  title: "Order Confirmation - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  viewport: "width=device-width, initial-scale=1",
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default function OrderConfirmation() {
  return <OrderConfirmationPageView />;
}