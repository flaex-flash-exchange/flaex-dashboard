import Image from "next/image";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div className="grid grid-cols-5 py-5 justify-between bg-[#010C1A]">
      <div className="col-span-2 pl-[120px]">
        <div className="flex items-center gap-1">
          <Image src="/images/logo.svg" width={45} height={45} alt="flaex" />
          <span className={`text-[24px] leading-[50px] tracking-[3px]`}>
            flæx
          </span>
        </div>

        <div className="gap-3.5 flex items-center mt-[10px]">
          <Image src="/images/tele_icon.png" width={25} height={25} />
          <Image src="/images/twitter_icon.png" width={25} height={25} />
          <Image src="/images/medium_icon.png" width={25} height={25} />
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
  );
};

export default Footer;

const mockData = [
  { title: "Products", listItems: ["Margin Trade", "Invest", "Staking"] },
  { title: "Developers", listItems: ["Whitepaper", "Github", "Audit"] },
  { title: "Company", listItems: ["Team", "Roadmap", "Contact us"] },
];
