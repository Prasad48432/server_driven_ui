import "@/styles/globals.css";
import { Layout } from "@/components";
import Head from "next/head";
import { getHeaderRes, getFooterRes, getAllEntries, getHomePageEntries } from "@/helper";
import App from "next/app";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

function MyApp(props) {
  const { Component, pageProps, header, footer, entries } = props;
  const { page, posts, archivePost, blogPost } = pageProps;

  const metaData = (seo) => {
    const metaArr = [];
    for (const key in seo) {
      if (seo.enable_search_indexing) {
        metaArr.push(
          <meta
            name={
              key.includes("meta_")
                ? key.split("meta_")[1].toString()
                : key.toString()
            }
            content={seo[key].toString()}
            key={key}
          />
        );
      }
    }
    return metaArr;
  };

  const blogList = posts?.concat(archivePost);

  return (
    <>
      <Head>
        <meta
          name="application-name"
          content="Spotlight Page"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />
        <meta name="theme-color" content="#317EFB" />
        <title>Spotlight Page</title>
        {page?.seo && page.seo.enable_search_indexing && metaData(page.seo)}
      </Head>
      <div className={`${montserrat.variable} montserrat`}>
      <Layout
        header={header}
        footer={footer}
        page={page}
        blogPost={blogPost}
        blogList={blogList}
        entries={entries}
      >
        <Component {...pageProps} />
      </Layout>
      </div>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // Get default App props first
  const appProps = await App.getInitialProps(appContext);

  // Fetch header, footer, and entries data
  const header = await getHeaderRes();
  const footer = await getFooterRes();
  const entries = await getAllEntries();

  return { ...appProps, header, footer, entries };
};

export default MyApp;
