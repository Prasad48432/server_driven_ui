"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Spotlight } from "@/components";
import Link from "next/link";

const Hero = (props) => {
  const banner = props.banner;
  const bannerTitle = banner.banner_title;
  const words = bannerTitle.split(" ");
  const description = banner?.banner_description;
  const avatarUrls = [
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Jameson&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Jack&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Mason&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Adrian&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
  ];

  const formattedDescription = description
    .split(/(Ideas|Portfolio)/)
    .map((part, index) => {
      if (part === "Ideas" || part === "Portfolio") {
        return (
          <span
            style={{
              color: banner?.accent_color ? banner.accent_color : "#000",
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
        background: banner?.bg_color ? banner.bg_color : "",
      }}
      className="mt-24 lg:mt-32 w-[96vw] lg:w-full h-full max-w-7xl ml-0 lg:ml-12 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-12"
    >
      <Spotlight
        className="-top-40 left-0 md:left-[6rem] md:-top-20"
        fill="white"
      />
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start p-2">
        {banner.banner_title && (
          <h1
            style={{
              color: banner?.text_color ? banner.text_color : "#000",
            }}
            className="font-extrabold text-[1.8rem] leading-[2.25rem] lg:text-5xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start"
          >
            <span className="relative mb-1">{words.slice(0, 3).join(" ")}</span>
            <span className="whitespace-nowrap relative ">
              <span className="mr-2.5 lg:mr-5">{words[3]}</span>
              <span className=" relative whitespace-nowrap">
                <span className="absolute bg-white/15 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1">
                  {" "}
                </span>
                <span
                  style={{
                    color: banner?.accent_color ? banner.accent_color : "#000",
                  }}
                  className="relative"
                >
                  {words[4]}
                </span>
              </span>
            </span>
          </h1>
        )}
        {banner.banner_description ? (
          <p
            style={{
              color: banner?.text_color ? banner.text_color : "#000",
            }}
            className="text-[0.85rem] lg:text-xl opacity-80 leading-relaxed"
          >
            {formattedDescription}
          </p>
        ) : (
          ""
        )}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
          <span
            style={{
              color: banner?.text_color ? banner.text_color : "#000",
            }}
            className="border border-primarytext hover:border-white/50 flex items-center gap-2 hover:gap-3 transition-all duration-300 justify-center font-semibold px-6 py-2 bg-accentcolor rounded-full text-xl cursor-pointer"
          >
            Get Started <FaArrowRight />
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center align-center gap-2  md:gap-6">
          <div className="-space-x-5 avatar-group justify-center  lg:justify-start">
            {avatarUrls.map((url, index) => (
              <div
                key={index}
                className="avatar bg-gray-600 rounded-full w-12 h-12"
              >
                <img
                  src={url}
                  alt={`Avatar ${index + 1}`}
                  className="w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-1">
            <div className="relative inline-flex">
              <Rating style={{ width: 100 }} value={4.25} readOnly />
            </div>
            <div className="text-base text-primarytext">
              <span className="font-semibold  mr-1">290</span>
              <span className="opacity-70">Entrepreneurs joined!</span>
            </div>
          </div>
        </div>
      </div>
      {banner.banner_image ? (
        <div className="w-full h-full lg:w-1/2 flex items-center justify-center">
          <img
            src={banner.banner_image.url}
            alt={banner.banner_image.filename}
            className="rounded-lg w-[80%] opacity-80"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Hero;
