import React, { useState, useEffect } from "react";
import { onEntryChange } from "@/contentstack-sdk";
import { HomePage } from "@/sections";
import { getPageRes, getLayout, getBlogListRes } from "@/helper";

export default function Home(props) {
  const { page, entryUrl, layout, blogres } = props;
  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl, "home_page");
      if (!entryRes) throw new Error("Status code 404");
      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, []);
  return getEntry ? (
    <div className="flex flex-col items-center justify-center">
      <HomePage
        getEntry={getEntry}
        contentTypeUid="home_page"
        entryUid={getEntry.uid}
        locale={getEntry.locale}
        layout={layout[0].page_layout}
        blogres={blogres}
      />
    </div>
  ) : (
    <>Loading...</>
  );
}

export async function getServerSideProps(context) {
  try {
    const entryRes = await getPageRes(context.resolvedUrl, "home_page");
    const layout = await getLayout();
    const blogres = await getBlogListRes();
    return {
      props: {
        entryUrl: context.resolvedUrl || null,
        page: entryRes || null,
        layout: layout || null,
        blogres: blogres || null,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
