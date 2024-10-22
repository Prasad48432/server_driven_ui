import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { onEntryChange } from "@/contentstack-sdk";
import { getHeaderRes } from "@/helper";

const Navbar = () => {
  const router = useRouter();
  const headerData = {
    navigation_menu: [
      {
        label: "Home",
        url: {
          href: "/",
        },
      },
      {
        label: "About Us",
        url: {
          href: "/about-us",
        },
      },
      {
        label: "Services",
        url: {
          href: "/services",
        },
      },
      {
        label: "Blog",
        url: {
          href: "/blog",
        },
      },
    ],
  };

  return (
    <nav
      className={`bg-transparent montserrat w-full top-0 left-0 z-50 fixed bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/" className="" title="Spotlight">
            <img
              className="h-[2.4rem] lg:h-12"
              src="/mainlogo.png"
              alt="Spotlight"
              title="Spotlight"
            />
          </Link>
        </span>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex font-medium rounded-lg md:space-x-8 md:flex-row items-center justify-center">
            {headerData.navigation_menu &&
              headerData.navigation_menu.map((list) => {
                const className =
                  router.asPath === list.url?.href ? "active" : "";
                return (
                  <li
                    key={list.label}
                    className="group py-2 px-3 md:p-0  transition-all  duration-300 ease-in-out"
                  >
                    <Link
                      href={list.url?.href}
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
