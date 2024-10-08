import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import BlogList from "./bloglist";

export default function BlogSection(props) {
  const fromBlog = props.fromBlog;

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 mb-12">
        {fromBlog.title_h2 && (
          <h2
            className="text-primarytext text-2xl lg:text-4xl font-semibold"
            {...fromBlog.$?.title_h2}
          >
            {fromBlog.title_h2}
          </h2>
        )}
        {fromBlog.view_articles && (
          <Link
            href={fromBlog.view_articles.href}
            className="text-primarytext/80 text-lg lg:text-xl"
            {...fromBlog.view_articles.$?.title}
          >
            {fromBlog.view_articles.title}
          </Link>
        )}
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mb-24">
        {fromBlog.featured_blogs.map((blog, index) => (
          <BlogList bloglist={blog} key={index} />
        ))}
      </div>
    </div>
  );
}
