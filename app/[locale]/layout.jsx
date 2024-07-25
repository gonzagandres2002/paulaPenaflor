import { Jost } from "next/font/google";
import "/app/globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "/navigation";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://paulapenaflor.com"),
  title: {
    default: "Paula Penaflor | Business Developer",
    template: "%s | Paula Penaflor",
  },
  description: "Paula Peñaflor, an experienced Business Developer, helps clients with home purchases, refinancing, FHA loans, jumbo loans, and more. Visit our site for expert mortgage advice and personalized financial solutions.",
  openGraph: {
    image: "https://paulapenaflor.com/images/opengraph.png",
  },
  keywords:
    "Loan Officer, Business, Mortgage, Real Estate, Finance, Home Purchase, Refinance, FHA Loans, Jumbo Loans, Paula Penaflor, Paula Peñaflor",
  twitter: {
    card: "summary_large_image"
  },
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${jost.className} bg-gray-100`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
