import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olive + Stone | Interior Styling in Northern Colorado",
  description:
    "Fresh, polished style for every space. Olive + Stone offers interior styling for homes, businesses, and short-term rentals in Windsor and Northern Colorado.",
  keywords: [
    "interior styling",
    "home styling",
    "Northern Colorado",
    "Windsor CO",
    "Airbnb styling",
    "interior design",
    "home refresh",
  ],
  openGraph: {
    title: "Olive + Stone | Interior Styling",
    description:
      "Styling spaces that are polished, warm, and welcoming. Serving Northern Colorado.",
    type: "website",
    url: "https://oliveandstoneinterior.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
