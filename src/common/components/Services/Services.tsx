"use client";

import Image from "next/image";
import React from "react";
import { DM_Serifa } from "../Hero/Hero";
import { heroAssets } from "@/assets/images";
import useMediaQuery from "@/common/customHooks/useMediaQuery";

const Services = () => {
  const isBreakpoint: any = useMediaQuery(500);
  return (
    <div
      id="services"
      className="w-full min-h-screen bg-services-bg pt-16 lg:pt-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start justify-center px-6 lg:px-0">
        <button className="font-normal border-1 border-pill-border text-pill-grey transition bg-transparent font-matter text-base w-28 h-12 rounded-full">
          Services
        </button>
        <p className="text-black my-3 text-xl md:text-3xl text-left font-medium font-matter-medium">
          What you can{" "}
          <span
            className={`text-primary-blue italic font-normal ${DM_Serifa.className}`}
          >
            expect
          </span>{" "}
          from us
        </p>
        <p className="text-services-grey lg:px-0 text-sm md:text-base font-normal text-left">
          Drive results with our focused services. {isBreakpoint && <br />}
          Tailoring solutions to {!isBreakpoint && <br />}
          elevate your business.
        </p>

        <div className="w-full flex-col flex lg:flex-row justify-between items-center my-16">
          <div className="rounded-2xl bg-card-teal lg:min-w-96 max-w-96 min-h-64">
            <div className="min-h-24 p-6">
              <Image src={heroAssets.clean} alt="customize" />
            </div>
            <div className="bg-black p-6 rounded-b-2xl min-h-40">
              <p className="text-white text-lg">Customisability</p>
              <p className="text-card-grey text-base mt-3">
                We know that every client has a unique taste. Hence, we’ve made
                customisation as seamless as possible.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-card-blue lg:min-w-96 max-w-96 my-4 lg:my-0 lg:mx-4 min-h-64">
            <div className="min-h-24 p-6">
              <Image src={heroAssets.secure} alt="security" />
            </div>
            <div className="bg-black p-6 rounded-b-2xl min-h-40">
              <p className="text-white text-lg">Security</p>
              <p className="text-card-grey text-base mt-3">
                Rest easy knowing that your applications are our top priority.
                We are committed to securing your digital products.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-card-lime lg:min-w-96 max-w-96 min-h-64">
            <div className="min-h-24 p-6">
              <Image src={heroAssets.maintain} alt="maintenance" />
            </div>
            <div className="bg-black p-6 rounded-b-2xl min-h-40">
              <p className="text-white text-lg">Maintenance</p>
              <p className="text-card-grey text-base mt-3">
                Need reliable app maintenance? Our comprehensive maintenance
                package has you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
