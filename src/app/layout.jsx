import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pau penaflor",
  description: "Mortgage Broker web site",
  keywords: "next.js, react, javascript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
