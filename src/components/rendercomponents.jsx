import React from "react";
import { Hero } from ".";

const RenderComponents = (props) => {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key) => {
        if (component.hero_banner) {
          return blogPost ? (
            // <BlogBanner
            //   blogBanner={component.hero_banner}
            //   key={`component-${key}`}
            // />
            <>Blog Banner</>
          ) : (
            // <HeroBanner
            //   banner={component.hero_banner}
            //   key={`component-${key}`}
            // />
            <Hero banner={component.hero_banner} key={`component-${key}`} />
          );
        }
      })}
    </div>
  );
};

export default RenderComponents;
