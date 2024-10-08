import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getPageRes, getBlogPostRes } from "@/helper";
import { onEntryChange } from "@/contentstack-sdk";
import { RenderComponents, ArchiveRelative } from "@/components";

export default function BlogPost({ blogPost, page, pageUrl }) {
  const [getPost, setPost] = useState({ banner: page, post: blogPost });
  console.log("post is", getPost);
  async function fetchData() {
    try {
      const entryRes = await getBlogPostRes(pageUrl);
      const bannerRes = await getPageRes("/blog");
      if (!entryRes || !bannerRes) throw new Error("Status: " + 404);
      setPost({ banner: bannerRes, post: entryRes });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [blogPost]);

  const { post, banner } = getPost;
  return (
    <div className="mt-32">
      <div className="max-w-7xl flex flex-col lg:flex-row gap-8 mx-auto items-start justify-center">
        <div className="w-[90vw] lg:w-[70%] flex flex-col mx-auto items-start justify-center">
          <img src={post?.featured_image.url} className="rounded-lg mb-3" />
          <article>
            {post && post.title ? (
              <h2
                className="text-xl lg:text-3xl font-semibold mb-2 text-[#fcff4d]"
                {...post.$?.title}
              >
                {post.title}
              </h2>
            ) : (
              <h2>
                <p className="text-primarytext text-lg">Loading..</p>
              </h2>
            )}
            {post && post.date ? (
              <p
                className="text-base lg:text-lg text-primarytext/80 mb-4"
                {...post.$?.date}
              >
                {moment(post.date).format("ddd, MMM D YYYY")},{" "}
                <strong {...post.author[0].$?.title}>
                  {post.author[0].title}
                </strong>
              </p>
            ) : (
              <p>
                <p className="text-primarytext text-lg">Loading..</p>
              </p>
            )}
            {post && post.body ? (
              <div className="text-primarytext/90" {...post.$?.body}>{parse(post.body)}</div>
            ) : (
              <p className="text-primarytext text-lg">Loading..</p>
            )}
          </article>
        </div>
        <div className="w-[90vw] lg:w-[30%] h-full flex flex-col mx-auto items-start justify-start text-primarytext">
          <h1 className="text-xl lg:text-2xl font-semibold mb-0.5">Related Posts</h1><p></p>
          <p className="text-primarytext/80 text-base lg:text-lg mb-6">Browse Some Related Posts</p>
          <div className="flex flex-col gap-4 items-center justify-center">
          <ArchiveRelative
            {...post.$?.related_post}
            blogs={post.related_post}
          />
          </div>
        </div>

        {/* <div className="blog-column-right">
          <div className="related-post">
            {banner && banner?.page_components[2].widget ? (
              <h2 {...banner?.page_components[2].widget.$?.title_h2}>
                {banner?.page_components[2].widget.title_h2}
              </h2>
            ) : (
              <h2>
                <p className="text-primarytext text-lg">Loading..</p>
              </h2>
            )}
            {post && post.related_post ? (
              <ArchiveRelative
                {...post.$?.related_post}
                blogs={post.related_post}
              />
            ) : (
              <p className="text-primarytext text-lg">Loading..</p>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
export async function getServerSideProps({ params }) {
  try {
    const page = await getPageRes("/blog");
    const posts = await getBlogPostRes(`/blog/${params.post}`);
    if (!page || !posts) throw new Error("404");

    return {
      props: {
        pageUrl: `/blog/${params.post}`,
        blogPost: posts,
        page,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}
