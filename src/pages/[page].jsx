import React, { useState, useEffect } from "react";
import { onEntryChange } from "@/contentstack-sdk";
import { RenderComponents } from "@/components";
import { getPageRes } from "@/helper";

export default function Page(props) {
  const { page, entryUrl } = props;
  const [getEntry, setEntry] = useState(page);


  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl);
      if (!entryRes) throw new Error("Status code 404");
      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [page]);

  return getEntry.page_components ? (
    <div className={`flex flex-col items-center justify-center`}>
      <RenderComponents
        pageComponents={getEntry.page_components}
        contentTypeUid="page"
        entryUid={getEntry.uid}
        locale={getEntry.locale}
      />
    </div>
  ) : (
    <p className="text-primarytext text-lg">Loading..</p>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const entryUrl = params.page.includes("/")
      ? params.page
      : `/${params.page}`;
    const entryRes = await getPageRes(entryUrl);
    if (!entryRes) throw new Error("404");
    return {
      props: {
        entryUrl: entryUrl || null,
        page: entryRes || null,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
