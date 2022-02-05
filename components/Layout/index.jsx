import NavBar from "../NavBar";
import Footer from "../Footer";

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <title>Poke-Next</title>
      </Head>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
