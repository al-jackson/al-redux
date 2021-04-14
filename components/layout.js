import Head from "next/head";
// import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>al redux</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="al redux"
        />
        <meta property="og:image" content="" />
        <meta name="og:title" content="al redux" />
        <meta name="twitter:card" content="summary_large_image" />  
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      {/* <Header /> */}
      <main>{children}</main>
    </>
  );
}