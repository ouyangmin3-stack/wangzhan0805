import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.duneedit.com"),
  title: {
    default: "Dune Edit | Better Things, Thoughtfully Chosen",
    template: "%s | Dune Edit",
  },
  description:
    "Plain-language product guides for home, tech, travel, and everyday life.",
  openGraph: {
    title: "Dune Edit | Better Things, Thoughtfully Chosen",
    description: "Practical product guides for a more considered everyday.",
    url: "https://www.duneedit.com",
    siteName: "Dune Edit",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 905,
        alt: "Dune Edit — Better things, thoughtfully chosen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dune Edit | Better Things, Thoughtfully Chosen",
    description: "Practical product guides for a more considered everyday.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
