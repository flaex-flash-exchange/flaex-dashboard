import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Flaex</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Dashboard</div>
    </div>
  );
};

export default Home;
