import React, { useState, useEffect } from "react";
import { onEntryChange } from "@/contentstack-sdk";
import { getPageRes, getLayout } from "@/helper";
import { ServicesPage } from "@/sections";

export default function Services(props) {
  const { page, entryUrl, layout } = props;
  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl, "services_page");
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
      <ServicesPage
        getEntry={getEntry}
        contentTypeUid="services_page"
        entryUid={getEntry.uid}
        locale={getEntry.locale}
        layout={layout[0].page_layout}
      />
    </div>
  ) : (
    <>Loading...</>
  );
}

export async function getServerSideProps(context) {
  try {
    const entryRes = await getPageRes(context.resolvedUrl, "services_page");
    const layout = await getLayout();
    return {
      props: {
        entryUrl: context.resolvedUrl || null,
        page: entryRes || null,
        layout: layout || null,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
