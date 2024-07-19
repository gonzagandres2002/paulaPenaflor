import Image from "next/image";
import {
  RiWhatsappFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiMailFill,
} from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

export default function Socials() {
  return (
    <>
      <div className="socials-content py-4 bg-socials bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center">
          <Image
            src="/images/pau-min.JPG"
            alt="Profile Picture"
            height={300}
            width={300}
            className="rounded-full"
          />
        </div>
        <h2 className="font-bold text-2xl text-center mt-5 h2 leading-normal">
          Paula Peñaflor
        </h2>
        <p className="font-medium text-lg text-center">
          Business Developer
        </p>
        {/**Social items */}
        <div className="flex justify-center items-center mt-6">
          <a
            href="https://wa.me/13312508701?text=Hi%20Paula%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20loan%20services"
            target="_blank"
            className="cursor-pointer font-medium w-56 text-center bg-gray-600 rounded-full  hover:bg-orange-100 hover:text-twitter-blue  px-4 py-2 mb-2 sm:mb-0 text-white "
          >
            <span className="flex items-center justify-center">
              WHATSAPP <RiWhatsappFill className="ml-2" />
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center mt-2">
          <a
            href="https://www.facebook.com/profile.php?id=100094635926073"
            target="_blank"
            className="cursor-pointer font-medium w-56 text-center bg-gray-600 rounded-full  hover:bg-orange-100 px-4 py-2 mb-2 sm:mb-0 text-white "
          >
            <span className="flex items-center justify-center">
              FACEBOOK <RiFacebookBoxFill className="ml-2" />
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center mt-2">
          <a
            href="https://www.instagram.com/paulaapenaflor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="cursor-pointer font-medium w-56 text-center bg-gray-600 rounded-full  hover:bg-orange-100 px-4 py-2 mb-2 sm:mb-0 text-white "
          >
            <span className="flex items-center justify-center">
              INSTAGRAM <RiInstagramFill className="ml-2" />
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center mt-2">
          <a
            href="https://paupenaflor.netlify.app/"
            target="_blank"
            className="cursor-pointer font-medium w-56 text-center bg-gray-600 rounded-full  hover:bg-orange-100 px-4 py-2 mb-2 sm:mb-0 text-white "
          >
            <span className="flex items-center justify-center">
              WEBSITE <TbWorld className="ml-2" />
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center mt-2">
          <a
            href="mailto:ppenaflor@mfmbankers.com"
            className="cursor-pointer font-medium w-56 text-center bg-gray-600 rounded-full  hover:bg-orange-100 px-4 py-2 mb-2 sm:mb-0 text-white "
          >
            <span className="flex items-center justify-center">
              EMAIL <RiMailFill className="ml-2" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
