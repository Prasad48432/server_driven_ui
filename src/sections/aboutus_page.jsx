import React from "react";
import { AboutusBanner, TeamSection } from "@/components";

const AboutusPage = (props) => {
  const { getEntry, contentTypeUid, entryUid, locale, layout } = props;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <AboutusBanner getEntry={getEntry} />
      <TeamSection getEntry={getEntry} />
    </div>
  );
};

export default AboutusPage;
