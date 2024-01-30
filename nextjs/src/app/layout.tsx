import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phi Chapter of Phi Kappa Tau",
  metadataBase: new URL("https://new.pktphichapter.org"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
