import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components//providers/theme";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Reviewnow",
    default: "Reviewnow",
  },
  description: "Reviews for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
