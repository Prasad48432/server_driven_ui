import React, { useState, useEffect } from "react";
import { onEntryChange } from "@/contentstack-sdk";
import { RenderComponents, BlogList, ArchiveRelative } from "@/components";
import { getPageRes, getBlogListRes } from "@/helper";

export default function Blog({ page, posts, archivePost, pageUrl }) {
  const [getBanner, setBanner] = useState(page);
  async function fetchData() {
    try {
      const bannerRes = await getPageRes(pageUrl);
      if (!bannerRes) throw new Error("Status code 404");
      setBanner(bannerRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, []);
  return (
    <>
      <div className="mt-28 mx-auto flex flex-col">
        <div className="flex mb-12 mx-auto flex-col items-center justify-center gap-2 max-w-[80%] lg:max-w-[60%]">
          <h2 className="text-center text-2xl lg:text-4xl text-primarytext font-semibold">
            Blogs
          </h2>
          <p className="text-center text-base lg:text-xl text-primarytext">
            Blogs from our Entrepreneur Community
          </p>
        </div>
        <div className="max-w-6xl grid gap-4 grid-cols-1 lg:grid-cols-3 mb-24 mx-auto">
          {posts ? (
            posts.map((blogList, index) => (
              <BlogList bloglist={blogList} key={index} />
            ))
          ) : (
            <p className="text-primarytext text-lg">Loading..</p>
          )}
        </div>
        <h2 className="text-center mb-12 placeholder:text-2xl lg:text-4xl text-primarytext font-semibold">
          Archived Blogs
        </h2>
        <div className="max-w-6xl grid gap-4 grid-cols-1 lg:grid-cols-3 mb-24 mx-auto">
          {archivePost ? (
            <ArchiveRelative blogs={archivePost} />
          ) : (
            <p className="text-primarytext text-lg">Loading..</p>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const page = await getPageRes(context.resolvedUrl);
    const result = await getBlogListRes();

    const archivePost = [];
    const posts = [];
    result.forEach((blogs) => {
      if (blogs.is_archived) {
        archivePost.push(blogs);
      } else {
        posts.push(blogs);
      }
    });
    return {
      props: {
        pageUrl: context.resolvedUrl,
        page,
        posts,
        archivePost,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}
