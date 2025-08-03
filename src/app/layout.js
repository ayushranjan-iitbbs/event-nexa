import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from 'react-hot-toast';

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "EventNexa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className}`}>
        <Toaster position="top-center" />
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
