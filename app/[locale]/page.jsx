"use client";
import { useEffect } from "react";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import Steps from "/components/Steps";
import About from "/components/About";
/*import Testimonial from "/components/Testimonial";*/
import Stats from "/components/Stats";
import Contact from "/components/Contact";
import Footer from "/components/Footer";
import Form from "/components/Form";
import Head from 'next/head';


export default function HomePage() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Paula Peñaflor",
    "jobTitle": "Business Developer",
    "url": "https://paulapenaflor.com",
    "image": "https://paulapenaflor.com/images/opengraph.png",
    "sameAs": [
      "https://facebook.com/profile.php?id=100094635926073",
      "https://www.instagram.com/paulaapenaflor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    ],
    "description": "Paula Peñaflor, an experienced Business Developer, helps clients with home purchases, refinancing, FHA loans, jumbo loans, and more. Visit our site for expert mortgage advice and personalized financial solutions."
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((module) => {
        const ScrollReveal = module.default;

        const sr = ScrollReveal({
          origin: "bottom",
          distance: "30px",
          duration: 300,
          reset: true,
        });

        //hero
        sr.reveal(".hero__text", { origin: "top" });

        //steps
        sr.reveal(".steps__step", { distance: "100px" });

        //about
        sr.reveal(".about__text", { origin: "left" });
        sr.reveal(".about__img", { origin: "right" });

        //testimonial
        sr.reveal(".testimonial__bg");
        sr.reveal(".testimonial__title");
        sr.reveal(".testimonial__slider");

        //work
        sr.reveal(".work__title");
        sr.reveal(".work__subtitle");
        sr.reveal(".work__grid");

        //stats
        sr.reveal(".stats");
        sr.reveal(".stats__item", {
          distance: "100px",
          interval: 100,
        });

        //news
        sr.reveal(".news__title");
        sr.reveal(".news__subtitle");
        sr.reveal(".new__item", {
          distance: "100px",
          interval: 100,
          delay: 100,
        });

        //contact
        sr.reveal(".contact__container");
        sr.reveal(".contact__text", { delay: 100 });

        //footer
        sr.reveal(".footer__item", {
          distance: "100px",
          interval: 100,
          delay: 100,
        });
        sr.reveal(".footer__copyright");
      });
    }
  }, []);

  return (
    <>
    <Head>
        <title>Paula Penaflor | Home</title>
        <meta name="description" content="Paula Peñaflor, an experienced Business Developer, helps clients with home purchases, refinancing, FHA loans, jumbo loans, and more. Visit our site for expert mortgage advice and personalized financial solutions." />
        <meta name="keywords" content="Loan Officer, Business, Mortgage, Real Estate, Finance, Home Purchase, Refinance, FHA Loans, Jumbo Loans, Paula Penaflor, Paula Peñaflor" />
        <meta property="og:url" content="https://paulapenaflor.com" />
        <meta property="og:title" content="Paula Penaflor" />
        <meta property="og:description" content="Paula Peñaflor, an experienced Business Developer, helps clients with home purchases, refinancing, FHA loans, jumbo loans, and more. Visit our site for expert mortgage advice and personalized financial solutions." />
        <meta property="og:image" content="https://paulapenaflor.com/images/opengraph.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Paula Peñaflor Open Graph Image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paula Penaflor | Business Developer" />
        <meta name="twitter:description" content="Paula Peñaflor, an experienced Business Developer, helps clients with home purchases, refinancing, FHA loans, jumbo loans, and more. Visit our site for expert mortgage advice and personalized financial solutions." />
        <meta name="twitter:image" content="https://paulapenaflor.com/images/opengraph.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
    <Navbar />
      <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        <div>
          <Hero />
          <Steps />
          <About />
          {/*<Testimonial />*/}
          <Stats />
          <Contact />
          <Form />
          <Footer />
        </div>
      </main>
    </>
  );
}
