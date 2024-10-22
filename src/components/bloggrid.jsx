import React from "react";
import { BlogCard } from "@/components";

const BlogGrid = (props) => {
  const { getEntry, featuredBlogs, layout } = props;

  const emptyDivCount = layout?.no_of_grid_columns
    ? Math.max(layout.no_of_grid_columns - featuredBlogs.length, 0)
    : 0;

  return (
    <div
      style={{
        backgroundColor: layout?.background_color || "#0a0a0a",
      }}
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      <div className="max-w-7xl flex flex-col items-center justify-center gap-1">
        <h1
          className="font-bold"
          style={{
            color: layout?.title_font_color || "#ededed",
            fontSize: layout?.title_font_size
              ? `${layout.title_font_size}rem`
              : "2.5rem",
          }}
        >
          {getEntry?.feature_blogs_title || "Default Title"}
        </h1>
        <h1
          style={{
            color: layout?.desc_font_color || "rgb(237 237 237 / 0.8)",
            fontSize: layout?.desc_font_size
              ? `${layout.desc_font_size}rem`
              : "1.25rem",
          }}
          className="mb-8"
        >
          {getEntry?.featured_blogs_subtitle || "Default Subtitle"}
        </h1>
        <div
          style={{
            gridTemplateColumns: `repeat(${
              layout?.no_of_grid_columns || 3
            }, minmax(0, 1fr))`,
          }}
          className="grid w-full gap-4"
        >
          {featuredBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} layout={layout} />
          ))}
          {Array.from({ length: emptyDivCount }).map((_, index) => (
            <div
              style={{
                backgroundColor: layout?.blog_card_color || "#171717",
              }}
              key={`empty-${index}`}
              className="col-span-1 rounded-lg text-primarytext flex items-center justify-center"
            >
              No Data
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
