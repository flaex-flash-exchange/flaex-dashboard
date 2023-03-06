
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BottomContent from "../components/pages/dashboard/BottomContent";
import TopContent from "../components/pages/dashboard/TopContent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Flaex</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <TopContent />
        </div>

        <div className="mt-6">
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-[30px] font-bold">Stats</h1>
              <div className="relative w-14 h-14 md:w-[25px] md:h-[25px] ">
                <Image src="/images/logo.svg" alt="logo" layout="fill" />
              </div>
            </div>
            <p>
              Flaex Total Stats start from 01 Sep 2024. For detailed stats:
              https://flaex.com.
            </p>
          </div>

          <div className="mt-4">
            <BottomContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;