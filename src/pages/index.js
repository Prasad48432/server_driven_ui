import React, { useState, useEffect } from "react";
import { onEntryChange } from "@/contentstack-sdk";
import { Navbar, Content, RenderComponents } from "@/components";
import { getPageRes } from "@/helper";

export default function Home(props) {
  const { page, entryUrl } = props;
  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl);
      console.log(entryRes);
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
    <div className={`flex flex-col items-center justify-center`}>
      <RenderComponents
        pageComponents={getEntry.page_components}
        contentTypeUid="page"
        entryUid={getEntry.uid}
        locale={getEntry.locale}
      />
    </div>
  ) : (
    <>Loading...</>
  );
}

export async function getServerSideProps(context) {
  try {
    const entryRes = await getPageRes(context.resolvedUrl);
    return {
      props: {
        entryUrl: context.resolvedUrl || null,
        page: entryRes || null,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
