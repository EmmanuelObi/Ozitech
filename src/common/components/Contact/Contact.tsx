"use client";
import React from "react";
import Image from "next/image";
import { heroAssets } from "@/assets/images";
import useMediaQuery from "@/common/customHooks/useMediaQuery";

const Contact = () => {
  const isBreakpoint: any = useMediaQuery(500);
  return (
    <div id="contact" className="w-full bg-white py-16 lg:py-32 px-5 lg:px-0">
      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row bg-contact-blue rounded-contact min-h-96 items-center justify-evenly py-10 lg:py-0">
        <Image
          className="absolute lg:block top-0 right-0 rounded-tr-contact"
          src={isBreakpoint ? heroAssets.ballM : heroAssets.ball}
          priority
          alt="lines"
        />
        <div className="w-full lg:w-1/4 flex flex-col items-center my-5 lg:items-start justify-center">
          <button className="font-normal border-1 border-pill-border text-white transition bg-transparent font-matter text-base px-6 min-w-28 h-12 rounded-full">
            Reach out to us
          </button>
          <p className="text-white my-4 text-xl md:text-3xl text-left font-medium font-matter-medium">
            Contact us
          </p>
          <p className="text-contact-grey lg:px-0 text-sm md:text-md font-normal text-center lg:text-left">
            Having troubles? reach out to us now <br /> through these mediums
          </p>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col items-center my-5 lg:items-start justify-between lg:border-r-1 border-nav-border">
          <Image src={heroAssets.mail} alt="mail" />
          <p className="text-white my-4 text-xl md:text-xl text-left font-medium font-matter-medium">
            Send an email
          </p>
          <p className="text-contact-grey lg:px-0 text-sm md:text-md font-normal text-left">
            hello@ozitech.com
          </p>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col items-center my-5 lg:items-start justify-between ">
          <Image src={heroAssets.call} alt="call" />
          <p className="text-white my-4 text-xl md:text-xl text-left font-medium font-matter-medium">
            Drop a phone call
          </p>
          <p className="text-contact-grey lg:px-0 text-sm md:text-md font-normal text-left">
            +44 - 740 - 71979
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
