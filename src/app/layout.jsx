import { Open_Sans } from "next/font/google";
export const openSans = Open_Sans({
  subsets: ["latin"]
}); // THEME PROVIDER

import ThemeProvider from "theme/theme-provider"; // PRODUCT CART PROVIDER

import CartProvider from "contexts/CartContext"; // SITE SETTINGS PROVIDER
import MedusaProviders from "medusa/providers";
import SettingsProvider from "contexts/SettingContext"; // GLOBAL CUSTOM COMPONENTS 
import SnackbarProvider from "components/SnackbarProvider";
import { RTL } from "components/rtl";
import { ProgressBar } from "components/progress"; // IMPORT DUMMY SERVER

import "__server__"; // IMPORT i18n SUPPORT FILE

import "i18n";

export default function RootLayout({
  children
}) {
  return <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>

        <MedusaProviders>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <SnackbarProvider>
              <ProgressBar />
              <RTL>{children}</RTL>
              </SnackbarProvider>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>
        </MedusaProviders>
      
      </body>
    </html>;
}