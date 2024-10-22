import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ShowIdea({ layout, section }) {
  const sectionData = section.hero_idea_sections;
  return (
    <div
      style={{
        backgroundColor: layout.background_color || "#0a0a0a",
      }}
      className="w-full h-full"
    >
      <div
        key="key-contentstection"
        style={{
          display: "flex",
          flexDirection: layout.alignment === "reverse" ? "row" : "row-reverse",
        }}
        className={`h-auto lg:h-[85vh] max-w-7xl mx-auto items-center justify-center gap-8 px-4 py-8 mt-5`}
      >
        <div className="w-full  lg:w-1/2 items-center justify-center flex">
          <div className="border border-dashed border-gray-700 lg:border-2 lg:border-gray-700 rounded-2xl p-0 lg:p-1 w-[90vw] h-auto md:w-[450px] md:h-[450px]">
            <img
              src={sectionData.section_image.url}
              alt={sectionData.section_image.filename}
              key="key-image"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left p-4">
          {sectionData.title && (
            <h1
              style={{
                color: layout.title_font_color || "#ededed",
                fontSize: layout.title_font_size
                  ? `${layout.title_font_size}rem`
                  : "3rem",
              }}
              className="leading-[1] font-extrabold text-primarytext mb-4"
            >
              {sectionData.title}
            </h1>
          )}
          {sectionData.description && (
            <p
              style={{
                color: layout.desc_font_color || "rgb(237 237 237 / 0.7)",
                fontSize: layout.desc_font_size
                  ? `${layout.desc_font_size}rem`
                  : "1.25rem",
              }}
              className="leading-[1.75rem]"
            >
              {sectionData.description}
            </p>
          )}
          {sectionData.call_to_action ? (
            <Link
              href={sectionData.call_to_action.call_to_action.href}
              className="border border-primarytext text-primarytext mt-4 lg:mt-6 hover:border-white/50 flex items-center gap-2 hover:gap-3 transition-all duration-300 justify-center font-semibold px-6 py-2 rounded-full text-lg cursor-pointer"
            >
              {sectionData.call_to_action.call_to_action.title} <FaArrowRight />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { twMerge } from "tailwind-merge";

// const ShowIdea = () => {
//   return (
//     <div className="rubik">
//         <Idea1 />
//         <Idea2 />
//         <Idea3 />
//     </div>
//   );
// };

// export default ShowIdea;

// const Block = ({ className, ...rest }) => {
//   return <div className={twMerge("", className)} {...rest} />;
// };

// const Idea1 = () => (
//   <div className="bg-primarybg">
//     <div className="h-auto lg:h-[85vh] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-8 mt-5">
//       <div className="w-full lg:w-1/2 items-center justify-center flex">
//         <div className="border border-gray-600 lg:border-2 lg:border-gray-600 rounded-2xl p-0 lg:p-1 w-[90vw] h-auto md:w-[450px] md:h-[450px]">
//           <img
//             src="/holder.gif"
//             className="rounded-2xl"
//           />
//         </div>
//       </div>
//       <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left p-4">
//         <h1 className="text-2xl lg:text-5xl font-extrabold text-primarytext mb-4">
//           Share your Startup story with everyone
//         </h1>
//         <p className="text-lg lg:text-xl text-gray-400">
//           Profile gives the viewers a brief description of yourself and your
//           entrepreneurial journey which helps you connect with similar
//           entrepreneurs and grow together
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const Idea2 = () => (
//   <div className="bg-[#242424]">
//     <Block className="h-auto lg:h-[85vh] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-8 mt-5">
//       <div className="w-full lg:w-1/2 items-center justify-center flex">
//         <div className="border border-gray-600 lg:border-2 lg:border-gray-600 rounded-2xl p-0 lg:p-1 w-[90vw] h-auto md:w-[450px] md:h-[450px]">
//         <img
//             src="/holder.gif"
//             className="rounded-2xl"
//           />
//         </div>
//       </div>
//       <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left p-4">
//         <h1 className="text-2xl lg:text-5xl font-extrabold text-primarytext mb-4">
//           Add your Startup's and get ready to publish
//         </h1>
//         <p className="text-lg lg:text-xl text-gray-400">
//         A free startup page, accessible to everyone. Simply add your startup details and get ready to publish your page anytime
//         to showcase your project and Startups.
//         </p>
//       </div>
//     </Block>
//   </div>
// );

// const Idea3 = () => (
//   <div className="bg-primarybg">
//     <Block className="h-auto lg:h-[85vh] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-8 mt-5">
//       <div className="w-full lg:w-1/2 items-center justify-center flex">
//         <div className="border border-gray-600 lg:border-2 lg:border-gray-600 rounded-2xl p-0 lg:p-1 w-[90vw] h-auto md:w-[450px] md:h-[450px]">
//         <img
//             src="/holder.gif"
//             className="rounded-2xl"
//           />
//         </div>
//       </div>
//       <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left p-4">
//         <h1 className="text-2xl lg:text-5xl font-extrabold text-primarytext mb-4 tracking-wide">
//           Truly your own verified Audience
//         </h1>
//         <p className="text-lg lg:text-xl text-gray-400">
//           discover you true audience with advanced analytics features newsletter keeps
//           your audience up to date about your latest startup news
//         </p>
//       </div>
//     </Block>
//   </div>
// );
