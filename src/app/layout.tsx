import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import Navbar from "~/components/common/Navbar";
import TailwindIndicator from "~/components/common/TailwindIndicator";
import AuthProvider from "~/components/providers/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Digital Marketplace",
  description: "A digital marketplace for all your needs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <TRPCReactProvider>
          <AuthProvider>
            <main className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1 flex-grow">{children}</div>
            </main>
            <TailwindIndicator />
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
