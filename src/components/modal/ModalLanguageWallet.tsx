import { useModalContext } from "context/ModalContext";
import Image from "next/image";

const ModalLanguageWallet = () => {
  const { closeModals } = useModalContext();

  const handleSelectedLanguage = (typeLanguage: string) => {
    closeModals();
    console.log(typeLanguage);
  };

  return (
    <div className="min-w-[180px]">
      <div className="text-lg font-light">Select Language</div>
      <div className="grid gap-2.5 mt-6">
        {mockDataLanguage.map((item, idx) => (
          <button
            onClick={() => handleSelectedLanguage(item.value)}
            className="flex w-full items-center hover:bg-flaex-bg-hover hover:bg-opacity-50 rounded-[10px] px-2 py-1"
            key={idx}
          >
            <Image
              width={32}
              height={32}
              objectFit="contain"
              src={item.icon}
              alt=""
            />
            <span className="ml-2 cursor-pointer duration-200 text-base font-semibold">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
export default ModalLanguageWallet;

const mockDataLanguage = [
  {
    value: "vietnam",
    label: "VietNamese",
    icon: "/images/vietnam.png",
  },
  {
    value: "english",
    label: "English",
    icon: "/images/united-kingdom.png",
  },
];
