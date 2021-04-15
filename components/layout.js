import Head from "next/head";
import Header from "./header";

export default function Layout({ children, page }) {
  const isHome = page === "Home" ? true : false;

  return (
    <>
      <Head>
        <title>al redux</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="al redux" />
        <meta property="og:image" content="" />
        <meta name="og:title" content="al redux" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" href="/fonts/mvboli.ttf" as="font" crossOrigin="" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header isHome={isHome}/>
      <main>{children}</main>
    </>
  );
}
