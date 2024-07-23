import { Jost } from "next/font/google";
import "/app/globals.css";
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '/navigation';

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pau penaflor",
  description: "Business Developer web site",
  keywords: "Business, Mortgage, Real Estate, Finance",
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
