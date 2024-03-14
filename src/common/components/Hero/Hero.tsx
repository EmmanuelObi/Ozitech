"use client";

import { DM_Serif_Display } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import React from "react";
import { heroAssets } from "@/assets/images";
import useMediaQuery from "@/common/customHooks/useMediaQuery";

export const DM_Serifa = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  const isBreakpoint: any = useMediaQuery(500);
  return (
    <div
      id="home"
      className="max-w-4xl min-h-screen bg-white flex flex-col items-center justify-center mt-8 md:mt-0"
    >
      <Image
        className="absolute opacity-80"
        src={heroAssets.lines}
        priority
        alt="lines"
      />
      <Image
        className="absolute"
        src={isBreakpoint ? heroAssets.iconsM : heroAssets.icons}
        priority
        alt="icons"
      />
      <p className="text-black w-2/3 md:w-full text-3xl md:text-6xl text-center font-medium font-matter-medium">
        We believe you deserve {!isBreakpoint && <br />} the best{" "}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "website",
            1000, // wait 1s before replacing "website" with "iOS app"
            "iOS app",
            1000,
            "android app",
            1000,
            "cross platform app",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className={`text-primary-blue italic font-normal ${DM_Serifa.className}`}
          repeat={Infinity}
        />
      </p>
      <p className="text-primary-grey px-4 lg:px-0 text-sm md:text-base font-normal text-center my-10">
        Empower your business with our top-notch software solutions. Elevate
        online presence and engage <br /> customers through our advanced mobile
        apps and websites.
      </p>
      <a href="#quotes" className="z-10">
        <button className="hover:bg-blue-600 transition bg-primary-blue text-white font-matter font-normal text-base w-32 h-12 rounded-full">
          Get quote
        </button>
      </a>
    </div>
  );
};

export default Hero;
