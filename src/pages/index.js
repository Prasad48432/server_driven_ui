import React, { useState, useEffect } from "react";
import { onEntryChange } from "@/contentstack-sdk";
import { Navbar, Content, RenderComponents, HomePage } from "@/components";
import { getPageRes } from "@/helper";

export default function Home(props) {
  const { page, entryUrl } = props;
  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl, 'home_page');
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
      <HomePage
        getEntry={getEntry}
        contentTypeUid="home_page"
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
    const entryRes = await getPageRes(context.resolvedUrl,'home_page');
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
