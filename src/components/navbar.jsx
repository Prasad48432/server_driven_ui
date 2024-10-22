import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { onEntryChange } from "@/contentstack-sdk";
import { getHeaderRes } from "@/helper";

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
    <nav
      className={`bg-transparent montserrat w-full top-0 left-0 z-50 fixed bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30`}
    >
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
                  router.asPath === list.url.href ? "active" : "";
                return (
                  <li
                    key={list.label}
                    className="group py-2 px-3 md:p-0  transition-all  duration-300 ease-in-out"
                  >
                    <Link
                      href={list.url.href}
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
