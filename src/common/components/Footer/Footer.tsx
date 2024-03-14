import React from "react";
import Image from "next/image";
import { heroAssets } from "@/assets/images";

const Footer = () => {
  return (
    <div id="footer" className="w-full">
      {/* <div className="w-full bg-footer-bg py-10 px-5 lg:px-0">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="flex flex-col items-start justify-center">
            <p className="text-white my-4 text-xl md:text-xl text-left font-medium font-matter-medium">
              Get to know more
            </p>
            <p className="text-footer-grey lg:px-0 text-sm md:text-md font-normal text-center lg:text-left">
              Contact our support team to know more
            </p>
          </div>
          <button className="mt-10 lg:mt-0 font-normal border-1 border-pill-border text-white transition bg-transparent font-matter text-base px-6 min-w-28 h-12 rounded-full">
            Contact support
          </button>
        </div>
      </div> */}
      <div className="w-full bg-rights-bg py-16 lg:py-16 px-5 lg:px-0">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between border-t-1 border-footer-border pt-7">
          <div className="flex items-center justify-center">
            <a
              href="https://www.instagram.com/ozitech__?igsh=MWwzMWJjbjZ2bG9ldg=="
              target="_blank"
            >
              <Image className="mx-2" src={heroAssets.twitter} alt="twitter" />
            </a>
            <a
              href="https://www.instagram.com/ozitech__?igsh=MWwzMWJjbjZ2bG9ldg=="
              target="_blank"
            >
              <Image
                className="mx-2"
                src={heroAssets.linkedin}
                alt="linkedin"
              />
            </a>
            <a
              href="https://www.instagram.com/ozitech__?igsh=MWwzMWJjbjZ2bG9ldg=="
              target="_blank"
            >
              <Image className="mx-2" src={heroAssets.insta} alt="instagram" />
            </a>
          </div>

          <p className="mt-10 lg:mt-0 text-sm text-rights-grey text-center">
            © 2024{" "}
            <a href="/collab-server/network" className="hover:underline">
              Ozi-tech Technologies.
            </a>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
