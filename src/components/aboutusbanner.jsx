import React from "react";

const AboutusBanner = ({ getEntry }) => {
  const bannerRes = getEntry.components[1].about_us_banner.banner_parts;
  const title = getEntry.about_us_title;
  const description = getEntry.about_us_description;
  return (
    <div className="max-w-6xl mx-auto  mt-32 mb-28 flex flex-col items-center justify-center">
      <h1 className="text-primarytext text-4xl text-center font-bold mb-2">{title}</h1>
      <h1 className="text-primarytext text-xl text-center mb-12">{description}</h1>
      <div className="lg:flex w-full items-center justify-center hidden">
        <span className="w-1/3 h-12 flex items-center justify-center border border-dashed border-primarytext text-primarytext text-2xl font-bold">
          Mission
        </span>
        <span className="w-1/3 h-12 flex items-center justify-center border border-dashed border-primarytext text-primarytext text-2xl font-bold">
          Vision
        </span>
        <span className="w-1/3 h-12 flex items-center justify-center border border-dashed border-primarytext text-primarytext text-2xl font-bold">
          History
        </span>
      </div>
      <div className="max-w-6xl mx-auto divide-y lg:divide-y-0 lg:divide-x divide-dashed mt-6 flex flex-col lg:flex-row items-center justify-center">
        {bannerRes.map((banner, index) => (
          <div
            key={index}
            className="w-[85%] lg:w-1/3 flex gap-4 flex-col items-center justify-center px-0 lg:px-4 py-4 lg:py-0"
          >
            <h1 className="text-primarytext text-2xl font-semibold">
              {banner.part_headline}
            </h1>
            <p className="text-primarytext/80 text-lg">
              {banner.part_description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutusBanner;
