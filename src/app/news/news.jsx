import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

function News() {
  return (
    <sections className="news mt-[80px] xl:mt-[150px] relative z-20">
      {/**Text */}
      <div className="max-w-[810px] mx-auto text-center mb-[52px]">
        <h2 className="news__title h2 mb-3">News title</h2>
        <p className="news__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          debitis deserunt non laudantium facilis. Odio minima saepe eos rem
          laudantium laborum, quas est ab facere aliquid corporis, blanditiis
          praesentium natus!
        </p>
      </div>
      <div className="flex justify-center">
        {/**grid */}
        <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
          {/**item */}
          <div className="new__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
            <Image
              src="/images/about.png"
              width={3600 / 4}
              height={2400 / 4}
              alt=""
              className="mb-5"
            />
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base">22 June, 2022</p>
                <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:background-white transition-all">
                  <div className="flex justify-center items-center">
                    <RiArrowRightSLine className="text-3xl text-primary" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/**item */}
          <div className="new__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
            <Image
              src="/images/about.png"
              width={3600 / 4}
              height={2400 / 4}
              alt=""
              className="mb-5"
            />
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base">22 June, 2022</p>
                <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:background-white transition-all">
                  <div className="flex justify-center items-center">
                    <RiArrowRightSLine className="text-3xl text-primary" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/**item */}
          <div className="new__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
            <Image
              src="/images/about.png"
              width={3600 / 4}
              height={2400 / 4}
              alt=""
              className="mb-5"
            />
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base">22 June, 2022</p>
                <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:background-white transition-all">
                  <div className="flex justify-center items-center">
                    <RiArrowRightSLine className="text-3xl text-primary" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </sections>
  );
}

export default News;
