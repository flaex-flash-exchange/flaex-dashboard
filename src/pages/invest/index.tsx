import MainInvest from "components/pages/invest/MainInvest";
import TopbarInvest from "components/pages/invest/TopbarInvest";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div>
      <TopbarInvest />
      <MainInvest />
    </div>
  );
};

export default Index;
