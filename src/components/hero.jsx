"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Spotlight } from "@/components";
import Image from "next/image";

const Hero = (props) => {
  const { getEntry, layout } = props;

  // Safely access getEntry and layout properties
  const bannerTitle = getEntry?.title || "";
  const words = bannerTitle ? bannerTitle.split(" ") : [];
  const description = getEntry?.multi_line || "";
  const heroLayout = layout?.visuals?.home_page?.hero_component_1 || {};

  const formattedDescription = description
    .split(/(Ideas|Innovations|Projects|Startups)/)
    .map((part, index) => {
      if (
        part === "Ideas" ||
        part === "Innovations" ||
        part === "Projects" ||
        part === "Startups"
      ) {
        return (
          <span
            style={{
              color: heroLayout?.desc_font_color || "#ededed",
            }}
            key={index}
            className="font-semibold"
          >
            {part}
          </span>
        );
      }
      return part;
    });

  return (
    <div
      style={{
        backgroundColor: heroLayout?.background_color || "#0a0a0a",
      }}
      className="min-h-screen mt-24 lg:mt-0 w-[96vw] lg:w-full h-full flex flex-col items-center justify-center gap-16 lg:gap-12"
    >
      <div className="max-w-7xl h-full">
        <Spotlight
          className="top-[-7rem] lg:-top-40 left-[-5px] md:left-[6rem] md:-top-20"
          fill="white"
        />
        <div className="h-full w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start p-2">
            {bannerTitle && (
              <h1
                style={{
                  color: heroLayout?.title_font_color || "#ededed",
                  fontSize: heroLayout?.title_font_size
                    ? `${heroLayout.title_font_size}rem`
                    : "3rem",
                }}
                className="font-extrabold leading-[2.25rem] tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start"
              >
                <span className="relative mb-1">
                  {words.slice(0, 3).join(" ")}
                </span>
                {words.length > 3 && (
                  <span className="whitespace-nowrap relative ">
                    <span className="mr-2.5 lg:mr-5">{words[3]}</span>
                    {words[4] && (
                      <span className="relative whitespace-nowrap">
                        <span className="absolute bg-white/15 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1">
                          {" "}
                        </span>
                        <span className="relative">{words[4]}</span>
                      </span>
                    )}
                  </span>
                )}
              </h1>
            )}
            {description && (
              <p
                style={{
                  color: heroLayout?.desc_font_color || "#ededed",
                  fontSize: heroLayout?.desc_font_size
                    ? `${heroLayout.desc_font_size}rem`
                    : "1.25rem",
                }}
                className="opacity-80 leading-relaxed"
              >
                {formattedDescription}
              </p>
            )}
            {description && (
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                <span className="border text-primarytext border-primarytext hover:border-white/50 flex items-center gap-2 hover:gap-3 transition-all duration-300 justify-center font-semibold px-6 py-2 bg-accentcolor rounded-full text-xl cursor-pointer">
                  Get Started <FaArrowRight />
                </span>
              </div>
            )}
          </div>
          {getEntry?.hero_image && (
            <div className="w-full h-full lg:w-1/2 flex items-center justify-center">
              <Image
                src={getEntry.hero_image.url}
                alt={getEntry.hero_image.title}
                width={800}
                height={450}
                className="rounded-lg opacity-80 w-[80%]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
