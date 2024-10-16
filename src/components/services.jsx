import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const Services = ({ services }) => {
  return (
    <div className="max-w-7xl flex flex-col items-center justify-center mt-28">
      <div className="flex flex-col items-center justify-center gap-4 mb-12 max-w-[80%] lg:max-w-[90%]" >
        {services.title_h2 && (
          <h2
            className="text-2xl lg:text-4xl font-semibold text-primarytext"
            {...services.$?.title_h2}
          >
            {services.title_h2}
          </h2>
        )}
        {services.description && (
          <p className="text-sm lg:text-base text-center lg:w-[70%] text-primarytext/80" {...services.$?.description}>
            {services.description}
          </p>
        )}
      </div>
      <div className="grid gap-4 grid-flow-row-dense grid-cols-1 lg:grid-cols-3"
      >
        {services.buckets?.map((bucket, index) => (
          <div
            className="w-[90vw] lg:w-full flex border border-dashed border-gray-700 flex-col items-center justify-center p-2 rounded-lg"
            key={index}
          >
            {bucket.icon && (
              <img
                {...bucket.icon.$?.url}
                src={bucket.icon.url}
                alt="Service Icon"
                className="rounded-lg mb-4"
              />
            )}

            {bucket.title_h3 ? (
              <h3
                className="text-[#fcff4d] text-start text-xl lg:text-2xl font-semibold"
                {...bucket.$?.title_h3}
              >
                {bucket.title_h3}
              </h3>
            ) : (
              ""
            )}
            {typeof bucket.description === "string" && (
              <div
                className="text-primarytext/80 text-sm lg:text-base w-[90%] text-center mb-3"
                {...bucket.$?.description}
              >
                {parse(bucket.description)}
              </div>
            )}
            {bucket.call_to_action.title ? (
              <Link
                href={
                  bucket.call_to_action.href ? bucket.call_to_action.href : "#"
                }
              >
                {`${bucket.call_to_action.title} -->`}
              </Link>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
