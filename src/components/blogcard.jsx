import React from "react";
import parse from "html-react-parser";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import moment from "moment";

const BlogCard = ({ blog, layout }) => {
  const truncatedTitle = blog.title.substr(0, 28);
  let body = blog.body && blog.body.substr(0, 200);
  return (
    <div
      style={{
        backgroundColor: layout?.blog_card_color || "#171717",
      }}
      className=" col-span-1 rounded-lg flex flex-col gap-2 p-4 items-center justify-center"
    >
      <Link href={blog.url}>
        <img src={blog.featured_image.url} className="rounded-lg mb-1" />
      </Link>
      <Link href={blog.url}>
        <h1
          title={blog.title}
          className="cursor-pointer text-base font-semibold text-primarytext"
        >
          {truncatedTitle}...
        </h1>
      </Link>
      <strong className="text-primarytext/80">
        {moment(blog.date).format("ddd, MMM D YYYY")}
      </strong>
      <span className="text-sm text-primarytext">{parse(body)}</span>
      <Link href={blog.url}>
        <p className="cursor-pointer text-sm font-semibold text-primarytext gap-2 flex items-center justify-center">
          Read More <IoIosArrowForward />
        </p>
      </Link>
    </div>
  );
};

export default BlogCard;
