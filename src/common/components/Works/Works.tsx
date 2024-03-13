"use client";
import Image from "next/image";
import React from "react";
import { DM_Serifa } from "../Hero/Hero";
import { heroAssets } from "@/assets/images";
import useMediaQuery from "@/common/customHooks/useMediaQuery";

const Works = () => {
  const isBreakpoint: any = useMediaQuery(500);
  return (
    <div id="portfolio" className="w-full min-h-screen bg-white pt-16 lg:pt-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-6 lg:px-0">
        <button className="font-normal border-1 border-pill-border text-pill-grey transition bg-transparent font-matter text-base w-28 h-12 rounded-full">
          Works
        </button>
        <p className="text-black my-4 text-xl md:text-3xl text-center font-medium font-matter-medium">
          We don&apos;t just talk,{" "}
          <span
            className={`text-primary-blue italic font-normal ${DM_Serifa.className}`}
          >
            we deliver.
          </span>{" "}
        </p>
        <p className="text-services-grey lg:px-0 text-sm md:text-md font-normal text-center">
          Dive into our showcase of works—a testament to our dedication{" "}
          {!isBreakpoint && <br />} to delivering exceptional results. Each
          project embodies our {!isBreakpoint && <br />} commitment to
          innovation and client satisfaction.
        </p>

        <div className="w-full flex-col flex lg:flex-row justify-between items-center my-16">
          <div className="rounded-full w-full md:w-3/5 lg:w-2/5 my-3 min-h-64">
            <div className="min-h-24 w-full">
              <Image
                src={heroAssets.work}
                alt="work"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain", // cover, contain, none
                }}
              />
            </div>
            <div className="bg-work-card-bg p-6 rounded-b-3xl min-h-40 border-1 border-pill-border">
              <p className="text-card-text text-lg">DateSpot</p>
              <p className="text-work-grey text-base mt-3">
                DateSpot provides you will top-notch date location spots closest
                to you. You never have to worry anymore
              </p>
            </div>
          </div>
          <div className="rounded-full w-full md:w-3/5 lg:w-2/5 my-3 min-h-64">
            <div className="min-h-24 w-full">
              <Image
                src={heroAssets.work}
                alt="work"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain", // cover, contain, none
                }}
              />
            </div>
            <div className="bg-work-card-bg p-6 rounded-b-3xl min-h-40 border-1 border-pill-border">
              <p className="text-card-text text-lg">DateSpot</p>
              <p className="text-work-grey text-base mt-3">
                DateSpot provides you will top-notch date location spots closest
                to you. You never have to worry anymore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
