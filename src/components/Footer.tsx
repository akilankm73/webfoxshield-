import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';
import { socialMedia } from "@/src/data";
// import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
      <h1 className="heading lg:max-w-[45vw]">
        Be A Part Of <span className="text-purple">The Next Era Of Cybersecurity</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Thinkinfo Expert Solutions focuses on identifying and neutralizing phishing, malware, and data breaches, along with secure data inspection. With contributions from cybersecurity specialists, we’re on a mission to enhance online safety for everyone.
        </p>
        {/* <a href="/pricing">
          <MagicButton
            title="Pricing"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
      </div>


      <div className="flex flex-col md:flex-row justify-between items-center mt-16 mb-8 md:mb-0">
  
  {/* Copyright Text */}
  <p className="md:text-base text-sm md:font-normal font-light whitespace-nowrap mt-4 md:mt-0">
    Copyright © 2025 ThinkInfo Expert Solutions
  </p>
   
  {/* terms and condition */}
  <div className="flex items-center justify-center gap-9 w-full mt-4 md:mt-0 md:justify-end">
  <a
    href="/termsandconditions"
    // target="_blank"
    rel="noopener noreferrer"
    className="w-[240px] h-[50px] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 md:w-[200px] md:h-[40px] md:static"
  >
    <span className="text-white text-md md:text-sm">Terms & conditions</span>
  </a>
</div>
  {/* Privacy Policy Section */}
  <div className="flex items-center justify-center gap-9 w-full mt-4 md:mt-0 md:justify-end md:mr-4">
    <a
      href="/privacy"
      // target="_blank"
      rel="noopener noreferrer"
      className="w-[240px] h-[50px] cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 md:w-[200px] md:h-[40px] md:static"
    >
      <span className="text-white text-md md:text-sm">Privacy Policy</span>
    </a>
</div>

  {/* Social Media Icons */}
  <div className="flex items-center gap-6 md:gap-3 mt-10 md:mt-0">
    {socialMedia.map((info) => (
      <a
        key={info.id}
        href={info.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 md:w-8 md:h-8"
      >
        <img src={info.img} alt="icons" width={20} height={20} className="md:w-6 md:h-6"/>
      </a>
    ))}
  </div>
</div>

    </footer>
  );
};

export default Footer;