import { BlockNumberView } from "components/BlockNumber";
import AntImage from "components/common/AntCommon/AntImages";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col flex-1   md:px-4 md:py-4 md:pt-0 md:pb-8 lg:px-12 xl:px-12 2xl:px-24">
        <div className="flex-1"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <BlockNumberView />
        </div>
      </div>
      <div className="bg-[#010C1A] py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-2 px-4 md:px-2 relative">
            <div className="md:ml-0 lg:ml-16">
              <div className="flex items-center gap-1">
                <AntImage src="/images/logo.svg" width={45} height={45} />
                <span className={`text-[24px] leading-[50px] tracking-[3px]`}>
                  flæx
                </span>
              </div>
              <div className="gap-3.5 flex items-center mt-[10px]">
                <AntImage src="/images/tele_icon.png" width={25} height={25} />
                <AntImage
                  src="/images/twitter_icon.png"
                  width={25}
                  height={25}
                />
                <AntImage
                  src="/images/medium_icon.png"
                  width={25}
                  height={25}
                />
              </div>
            </div>

            {mockData.map((col, idx) => {
              return (
                <div key={idx}>
                  <h4 className="text-sm font-semibold">{col.title}</h4>
                  <div className="mt-[6px]">
                    {col.listItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-xs font-light mt-1 hover:text-flaex-primary hover:text-opacity-90"
                      >
                        <Link href="">{item}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const mockData = [
  { title: "Products", listItems: ["Margin Trade", "Invest", "Staking"] },
  { title: "Developers", listItems: ["Whitepaper", "Github", "Audit"] },
  { title: "Company", listItems: ["Team", "Roadmap", "Contact us"] },
];
