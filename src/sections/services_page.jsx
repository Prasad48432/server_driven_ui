import React from "react";

const ServicesPage = (props) => {
  const { getEntry, contentTypeUid, entryUid, locale, layout } = props;
  const services = getEntry?.services_components[0].our_services;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl flex flex-col items-center justify-center mt-28">
        <div className="flex flex-col items-center justify-center gap-4 mb-12 max-w-[80%] lg:max-w-[90%]">
          {services.services_title && (
            <h2 className="text-2xl lg:text-4xl font-semibold text-primarytext">
              {services.services_title}
            </h2>
          )}
          {services.services_description && (
            <p className="text-sm lg:text-base text-center lg:w-[70%] text-primarytext/80">
              {services.services_description}
            </p>
          )}
        </div>
        <div className="grid gap-4 grid-flow-row-dense grid-cols-1 lg:grid-cols-3">
          {services.buckets?.map((bucket, index) => (
            <div
              className="w-[90vw] lg:w-full flex border border-dashed border-gray-700 flex-col items-center justify-center p-2 rounded-lg"
              key={index}
            >
              {bucket.image && (
                <img
                  src={bucket.image.url}
                  alt="Service Image"
                  className="rounded-lg mb-4"
                />
              )}

              {bucket.title ? (
                <h3 className="text-[#fcff4d] text-start text-xl lg:text-2xl font-semibold">
                  {bucket.title}
                </h3>
              ) : (
                ""
              )}
              {bucket.description ? (
                <div className="text-primarytext/80 text-sm lg:text-base w-[90%] text-center mb-3">
                  {bucket.description}
                </div>
              ) : (
                ""
              )}
              {bucket.call_to_action.title ? (
                <Link
                  href={
                    bucket.call_to_action.href
                      ? bucket.call_to_action.href
                      : "#"
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
    </div>
  );
};

export default ServicesPage;
