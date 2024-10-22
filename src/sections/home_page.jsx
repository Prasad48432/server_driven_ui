"use client";
import React from "react";
import "@smastrom/react-rating/style.css";
import { Hero, ShowIdea, BlogGrid } from "@/components";

const HomePage = (props) => {
  const { getEntry, contentTypeUid, entryUid, locale, layout, blogres } = props;
  const homePageVisuals = layout.visuals.home_page;
  const ideaSections = Object.keys(homePageVisuals).filter((key) =>
    key.startsWith("idea_section_")
  );

  const allBlogs = blogres;
  const matchedBlogs =
    getEntry.featured_blogs[0].home_featured_blogs.blog_list;

  const featuredBlogUIDs = matchedBlogs.map((blog) => blog.uid);

  const featuredBlogs = allBlogs.filter((blog) =>
    featuredBlogUIDs.includes(blog.uid)
  );


  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <Hero getEntry={getEntry} layout={layout} />
      {ideaSections.map((sectionKey, index) => (
        <ShowIdea
          key={index}
          layout={homePageVisuals[`idea_section_${index+1}`]}
          section={getEntry.hero_idea_sections[index]}
        />
      ))}
      <BlogGrid
        getEntry={getEntry.featured_blogs[0].home_featured_blogs}
        featuredBlogs={featuredBlogs}
        layout={layout.visuals.home_page.blog_grids_1}
      />
    </div>
  );
};

export default HomePage;
