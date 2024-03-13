import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScroll/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "We Empower Your Business with Top-notch Branding and",
  description:
    "At Nexwave Digital, we elevate brands with innovative design and technology. Let us show you how simplicity and innovation can take your brand to new heights.",
  keywords: [
    "Smart Technology",
    "Elevating Interactions",
    "Crafting impact",
    "Fostering Growth",
    "Driving Success",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favIcon.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />

        <meta
          property="og:image"
          content="https://loopify-zeta.vercel.app/openGraphImage.jpg"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </head>
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
