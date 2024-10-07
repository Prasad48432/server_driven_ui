import React, { useState, useEffect } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import { onEntryChange } from "@/contentstack-sdk";
import { getFooterRes } from "@/helper";

export default function Footer({ footer, entries }) {
  const [getFooter, setFooter] = useState(footer);

  function buildNavigation(ent, ft) {
    let newFooter = { ...ft };
    if (ent.length !== newFooter.navigation.link.length) {
      ent.forEach((entry) => {
        const fFound = newFooter?.navigation.link.find(
          (nlink) => nlink.title === entry.title
        );
        if (!fFound) {
          newFooter.navigation.link?.push({
            title: entry.title,
            href: entry.url,
            $: entry.$,
          });
        }
      });
    }
    return newFooter;
  }

  async function fetchData() {
    try {
      if (footer && entries) {
        const footerRes = await getFooterRes();
        const newfooter = buildNavigation(entries, footerRes);
        setFooter(newfooter);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [footer]);

  const footerData = getFooter ? getFooter : undefined;

  return (
    <footer className="bg-primarybg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {footerData && footerData.logo ? (
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={footerData.logo.url}
                alt={footerData.title}
                title={footerData.title}
                {...footer.logo.$?.url}
                className="h-[2.4rem] lg:h-12"
              />
            </Link>
          ) : (
            <p className="text-primarytext">Loading</p>
          )}
          <ul className="flex flex-wrap items-center justify-center font-medium text-primarytext">
            {footerData ? (
              footerData.navigation.link.map((menu) => (
                <li
                  className="group text-primarytext hover:text-primarytext/80 transition-all  duration-300 ease-in-out"
                  key={menu.title}
                  {...menu.$?.title}
                >
                  <Link
                    className="bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out me-4 md:me-6"
                    href={menu.href}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-primarytext">Loading</p>
            )}
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto  lg:my-8" />
        {footerData && typeof footerData.copyright === "string" ? (
          <span
            className="block text-sm text-primarytext sm:text-center"
            {...footer.$?.copyright}
          >
            {parse(footerData.copyright)}
          </span>
        ) : (
          <div className="copyright">
            <p className="text-primarytext">Loading</p>
          </div>
        )}
      </div>
    </footer>

    // <footer>
    //   <div className="max-width footer-div">
    //     <div className="col-quarter">
    // {footerData && footerData.logo ? (
    //   <Link href="/" className="logo-tag">
    //     <img
    //       src={footerData.logo.url}
    //       alt={footerData.title}
    //       title={footerData.title}
    //       {...(footer.logo.$?.url)}
    //       className="logo footer-logo"
    //     />
    //   </Link>
    // ) : (
    //   <p className="text-primarytext">Loading</p>
    // )}
    //     </div>
    //     <div className="col-half">
    //       <nav>
    //         <ul className="nav-ul">
    // {footerData ? (
    //   footerData.navigation.link.map((menu) => (
    //     <li
    //       className="footer-nav-li"
    //       key={menu.title}
    //       {...menu.$?.title}
    //     >
    //       <Link href={menu.href}>{menu.title}</Link>
    //     </li>
    //   ))
    // ) : (
    //   <Skeleton width={300} />
    // )}
    //         </ul>
    //       </nav>
    //     </div>
    //     <div className="col-quarter social-link">
    //       <div className="social-nav">
    //         {footerData ? (
    //           footerData.social?.social_share.map((social) => (
    //             <a
    //               href={social.link.href}
    //               title={social.link.title}
    //               key={social.link.title}
    //             >
    //               {social.icon && (
    //                 <img
    //                   src={social.icon.url}
    //                   alt={social.link.title}
    //                   {...(social.icon.$?.url)}
    //                 />
    //               )}
    //             </a>
    //           ))
    //         ) : (
    //             <p className="text-primarytext">Loading</p>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // {footerData && typeof footerData.copyright === "string" ? (
    //   <div className="copyright" {...(footer.$?.copyright)}>
    //     {parse(footerData.copyright)}
    //   </div>
    // ) : (
    //   <div className="copyright">
    //     <p className="text-primarytext">Loading</p>
    //   </div>
    // )}
    // </footer>
  );
}
