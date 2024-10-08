import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { onEntryChange } from "@/contentstack-sdk";
import { getHeaderRes } from "@/helper";
import parse from "html-react-parser";
import Marquee from "react-fast-marquee";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ header, entries }) => {
  const router = useRouter();
  const [getHeader, setHeader] = useState(header);

  function buildNavigation(ent, hd) {
    let newHeader = { ...hd };
    if (ent.length !== newHeader.navigation_menu.length) {
      ent.forEach((entry) => {
        const hFound = newHeader?.navigation_menu.find(
          (navLink) => navLink.label === entry.title
        );
        if (!hFound) {
          newHeader.navigation_menu?.push({
            label: entry.title,
            page_reference: [
              { title: entry.title, url: entry.url, $: entry.$ },
            ],
            $: {},
          });
        }
      });
    }
    return newHeader;
  }

  async function fetchData() {
    try {
      if (header && entries) {
        const headerRes = await getHeaderRes();
        const newHeader = buildNavigation(entries, headerRes);
        setHeader(newHeader);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (header && entries) {
      onEntryChange(() => fetchData());
    }
  }, [header]);
  const headerData = getHeader ? getHeader : undefined;

  return (
    <nav className="bg-primarybg montserrat bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 w-full top-0 left-0 z-50 fixed">
      {/* <span className="h-4 text-primarytext text-center border-b border-gray-400">
        <Marquee pauseOnHover>
          {headerData?.notification_bar.show_announcement &&
            typeof headerData.notification_bar.announcement_text ===
              "string" && (
              <div {...headerData.notification_bar.$?.announcement_text}>
                {parse(headerData.notification_bar.announcement_text)}
              </div>
            )}
        </Marquee>
      </span> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          {headerData && (
            <Link href="/" className="" title="Spotlight">
              <img
                className="h-[2.4rem] lg:h-12"
                src={headerData.logo.url}
                alt={headerData.title}
                title={headerData.title}
                {...headerData.logo.$?.url}
              />
            </Link>
          )}
        </span>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex font-medium rounded-lg md:space-x-8 md:flex-row items-center justify-center">
            {headerData &&
              headerData.navigation_menu.map((list) => {
                const className =
                  router.asPath === list.page_reference[0].url ? "active" : "";
                return (
                  <li
                    key={list.label}
                    className="group py-2 px-3 md:p-0  transition-all  duration-300 ease-in-out"
                    {...list.page_reference[0].$?.url}
                  >
                    <Link
                      href={list.page_reference[0].url}
                      className={`bg-left-bottom ${
                        className === "active"
                          ? "underline text-[#fcff4d]"
                          : "text-primarytext hover:text-primarytext/80 bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]"
                      }  transition-all duration-300 ease-out`}
                    >
                      {list.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import parse from "html-react-parser";
// import Tooltip from "./tool-tip";
// import { onEntryChange } from "../contentstack-sdk";
// import { getHeaderRes } from "../helper";
// import Skeleton from "react-loading-skeleton";
// import { HeaderProps, Entry, NavLinks } from "../typescript/layout";

// export default function Header({
//   header,
//   entries,
// }: {
//   header: HeaderProps;
//   entries: Entry;
// }) {
//   const router = useRouter();
//   const [getHeader, setHeader] = useState(header);

//   function buildNavigation(ent: Entry, hd: HeaderProps) {
//     let newHeader = { ...hd };
//     if (ent.length !== newHeader.navigation_menu.length) {
//       ent.forEach((entry) => {
//         const hFound = newHeader?.navigation_menu.find(
//           (navLink: NavLinks) => navLink.label === entry.title
//         );
//         if (!hFound) {
//           newHeader.navigation_menu?.push({
//             label: entry.title,
//             page_reference: [
//               { title: entry.title, url: entry.url, $: entry.$ },
//             ],
//             $: {},
//           });
//         }
//       });
//     }
//     return newHeader;
//   }

//   async function fetchData() {
//     try {
//       if (header && entries) {
//         const headerRes = await getHeaderRes();
//         const newHeader = buildNavigation(entries, headerRes);
//         setHeader(newHeader);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     if (header && entries) {
//       onEntryChange(() => fetchData());
//     }
//   }, [header]);
//   const headerData = getHeader ? getHeader : undefined;

//   return (
//     <header className="header">
//       <div className="note-div">
// {headerData?.notification_bar.show_announcement ? (
//   typeof headerData.notification_bar.announcement_text === "string" && (
//     <div {...(headerData.notification_bar.$?.announcement_text as {})}>
//       {parse(headerData.notification_bar.announcement_text)}
//     </div>
//   )
// ) : (
//   <Skeleton />
// )}
//       </div>
//       <div className="max-width header-div">
//         <div className="wrapper-logo">
//   {headerData ? (
//     <Link href="/" className="logo-tag" title="Contentstack">
//       <img
//         className="logo"
//         src={headerData.logo.url}
//         alt={headerData.title}
//         title={headerData.title}
//         {...(headerData.logo.$?.url as {})}
//       />
//     </Link>
//   ) : (
//     <Skeleton width={150} />
//   )}
//         </div>
//         <input className="menu-btn" type="checkbox" id="menu-btn" />
//         <label className="menu-icon" htmlFor="menu-btn">
//           <span className="navicon" />
//         </label>
//         <nav className="menu">
//           <ul className="nav-ul header-ul">
// {headerData ? (
//   headerData.navigation_menu.map((list) => {
//     const className =
//       router.asPath === list.page_reference[0].url ? "active" : "";
//     return (
//       <li
//         key={list.label}
//         className="nav-li"
//         {...(list.page_reference[0].$?.url as {})}
//       >
//         <Link
//           href={list.page_reference[0].url}
//           className={className}
//         >
//           {list.label}
//         </Link>
//       </li>
//     );
//   })
// ) : (
//   <Skeleton width={300} />
// )}
//           </ul>
//         </nav>

//         <div className="json-preview">
//           <Tooltip
//             content="JSON Preview"
//             direction="top"
//             dynamic={false}
//             delay={200}
//             status={0}
//           >
//             <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//               <img src="/json.svg" alt="JSON Preview icon" />
//             </span>
//           </Tooltip>
//         </div>
//       </div>
//     </header>
//   );
// }
