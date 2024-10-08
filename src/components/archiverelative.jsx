import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

export default function ArchiveRelative({ blogs }) {
  return (
    <>
      {blogs?.map((blog, idx) => (
        <Link href={blog.url} key={idx}>
          <div className="w-[90vw] min-h-48 lg:w-full col-span-1 gap-3 rounded-lg flex flex-col items-center justify-center border border-gray-700 p-4 text-primarytext">
            <h4 className="text-lg font-semibold" {...blog.$?.title}>{blog.title}</h4>
            {typeof blog.body === "string" && (
              <div className="text-primarytext/80" {...blog.$?.body}>{parse(blog.body.slice(0, 80))}</div>
            )}
          </div>
        </Link>
      ))}
    </>
  );
}
