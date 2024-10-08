import React from "react";
import {
  Hero,
  ShowIdea,
  TeamSection,
  AboutusBanner,
  Services,
  BlogSection,
  BlogBanner,
} from ".";

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
            <BlogBanner
              blogBanner={component.hero_banner}
              key={`component-${key}`}
            />
          ) : (
            <Hero banner={component.hero_banner} key={`component-${key}`} />
          );
        }
        if (component.section1) {
          return (
            <ShowIdea section={component.section1} key={`component-${key}`} />
          );
        }
        if (component.section2) {
          return (
            <ShowIdea section={component.section2} key={`component-${key}`} />
          );
        }
        if (component.section3) {
          return (
            <ShowIdea section={component.section3} key={`component-${key}`} />
          );
        }
        if (component.aboutus_banner) {
          return (
            <AboutusBanner
              aboutusbanner={component.aboutus_banner}
              key={`component-${key}`}
            />
          );
        }
        if (component.our_team) {
          return (
            <TeamSection
              ourTeam={component.our_team}
              key={`component-${key}`}
            />
          );
        }
        if (component.from_blog) {
          return (
            <BlogSection
              fromBlog={component.from_blog}
              key={`component-${key}`}
            />
          );
        }
        if (component.section_with_buckets) {
          return (
            <Services
              services={component.section_with_buckets}
              key={`component-${key}`}
            />
          );
        }
      })}
    </div>
  );
};

export default RenderComponents;
