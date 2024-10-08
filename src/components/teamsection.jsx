import React from "react";
import Image from "next/image";

export default function TeamSection({ ourTeam }) {
  return (
    <div className="max-w-7xl mt-28 flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-4 max-w-[80%] lg:max-w-[60%]">
        {ourTeam.title_h2 && (
          <h2
            className="text-center text-2xl lg:text-4xl text-primarytext font-semibold"
            {...ourTeam.$?.title_h2}
          >
            {ourTeam.title_h2}
          </h2>
        )}
        {ourTeam.description ? (
          <p
            className="text-center text-base lg:text-xl text-primarytext"
            {...ourTeam.$?.description}
          >
            {ourTeam.description}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center text-primarytext">
        {ourTeam.employees?.map((employee, index) => (
          <div
            className="flex flex-col gap-3 items-center justify-center"
            key={index}
          >
            {employee.image && (
              <div className="w-[85vw] lg:w-[250px] h-[320px] relative">
                <Image
                  alt={employee.image.filename}
                  src={employee.image.url}
                  {...employee.image.$?.url}
                  fill 
                  className="rounded-lg object-cover"
                />
              </div>
            )}
            <div className="flex flex-col items-center justify-start ">
              {employee.name && (
                <h3 className="text-xl font-semibold" {...employee.$?.name}>
                  {employee.name}
                </h3>
              )}
              {employee.designation && (
                <p className="text-base" {...employee.$?.designation}>
                  {employee.designation}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
