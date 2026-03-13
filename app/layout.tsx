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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
