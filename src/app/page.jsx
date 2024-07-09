"use client";

import { Playfair } from "next/font/google";
import { RiArrowRightLine, RiMenuFill, RiCompasses2Line } from "react-icons/ri";
import Image from "next/image";
import { useEffect } from "react";

const playfair = Playfair({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  useEffect(() => {
    const navTriggerBtn = document.getElementById("nav_trigger_btn");
    const navMenu = document.getElementById("nav_menu");

    const handleClick = () => {
      navMenu.classList.toggle("nav-is-open");
    };

    if (navTriggerBtn) {
      navTriggerBtn.addEventListener("click", handleClick);
    }

    return () => {
      if (navTriggerBtn) {
        navTriggerBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">

        {/*Grid img*/}
        <div className="xl:bg-grid fixed xl:bg-center xl:bg-repeat-y top-0 bottom-0 left-0 right-0 z-10"></div>

        {/*Hero section*/}
        <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center bg-opacity-75 bg-cover bg-no-repeat xl:rounded-bl-[290px] relative z-20">
          <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
            <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
              <h1 className={`${playfair.className} h1 mb-8`}>
                This is the hero title
              </h1>
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                voluptatum debitis a doloribus.
              </p>
              <button className="btn btn-primary mx-auto xl:mx-0">
                Button with link
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </section>

        {/*steps*/}
        <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
              {/*<div className="steps__step text-center">
                <div className="mb-4 justify-center flex">
                  <RiCompasses2Line className="text-5xl text-accent" />
                </div>
                <h3 className="h3 mb-5">Project Planning</h3>
                <p className="mb-5 max-w-md mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus natus culpa, harum enim maxime.
                </p>
                <a href="#" className="font-medium justify-center flex">
                  Read more
                  <RiArrowRightLine />
                </a>
              </div>
              <div className="steps__step text-center">
                <div className="mb-4 justify-center flex">
                  <RiCompasses2Line className="text-5xl text-accent" />
                </div>
                <h3 className="h3 mb-5">Project Planning</h3>
                <p className="mb-5 max-w-md mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus natus culpa, harum enim maxime.
                </p>
                <a href="#" className="font-medium justify-center flex">
                  Read more
                  <RiArrowRightLine />
                </a>
              </div>
              <div className="steps__step text-center">
                <div className="mb-4 justify-center flex">
                  <RiCompasses2Line className="text-5xl text-accent" />
                </div>
                <h3 className="h3 mb-5">Project Planning</h3>
                <p className="mb-5 max-w-md mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus natus culpa, harum enim maxime.
                </p>
                <a href="#" className="font-medium justify-center flex">
                  Read more
                  <RiArrowRightLine />
                </a>
              </div>*/}
              <div className="bg-pink-200">step1</div>
              <div className="bg-pink-200">step1</div>
              <div className="bg-pink-200">step1</div>
            </div>
          </div>
        </section>

        {/*about*/}
        <section className="about mt-[80px] xl:mt-[200px] relative z-20">
          <container className="container mx-auto xl:px-0">
            <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between gap-8 items-center xl:gap-[74px]">
              {/*Text*/}
              <div className="bg-pink-200 pl-44 flex-1 order-2 xl:order-none mx-auto max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-center gap-8">
                <h2 className="h2">A text title for the about section</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  harum tempore cumque quis ipsam adipisci ducimus, blanditiis
                  enim excepturi suscipit at quae minima eos nesciunt repellat,
                  nulla facere? Hic, officia.
                </p>
              </div>
              <div className="bg-pink-200 about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-screen-md xl-mx-0">
                <Image
                  src="/images/about.png"
                  alt=""
                  width={3600/10}
                  height={2400/10}
                  className="rounded-bl-[290px] rounded-tr-[200px]"
                ></Image>
              </div>
            </div>
          </container>
        </section>

        {/*auxiliar div */}
        <div className="h-[3000px]"></div>
      </main>
    </>
  );
}
