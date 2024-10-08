import React from "react";

const AboutusBanner = ({ aboutusbanner }) => {
  return (
    <div className="max-w-6xl mx-auto  mt-24 mb-24 flex flex-col items-center justify-center">
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
      <div className="max-w-6xl mx-auto divide-y lg:divide-y-0 lg:divide-x divide-dashed mt-6 mb-24 flex flex-col lg:flex-row items-center justify-center">
        <div className="w-[85%] lg:w-1/3 flex gap-4 flex-col items-center justify-center px-0 lg:px-4 py-4 lg:py-0">
          <h1 className="text-primarytext text-2xl font-semibold">
            {aboutusbanner.mission_headline}
          </h1>
          <p className="text-primarytext/80 text-lg">
            {aboutusbanner.mission_description}
          </p>
        </div>
        <div className="w-[90%] lg:w-1/3 flex gap-4 flex-col items-center justify-center px-0 lg:px-4 py-4 lg:py-0">
          <h1 className="text-primarytext text-2xl font-semibold">
            {aboutusbanner.vision_headline}
          </h1>
          <p className="text-primarytext/80 text-lg">
            {aboutusbanner.vision_description}
          </p>
        </div>
        <div className="w-[90%] lg:w-1/3 flex gap-4 flex-col items-center justify-center px-0 lg:px-4 py-4 lg:py-0">
          <h1 className="text-primarytext text-2xl font-semibold">
            {aboutusbanner.history_headline}
          </h1>
          <p className="text-primarytext/80 text-lg">
            {aboutusbanner.history_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutusBanner;
