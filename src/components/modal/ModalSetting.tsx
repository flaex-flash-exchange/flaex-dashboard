import { useModalContext } from "context/ModalContext";
import { useState } from "react";

const ModalSetting = () => {
  const { closeModals, handleDataModal } = useModalContext();
  const [slippageValue, setSlippageValue] = useState();
  const [telegramValue, setTelegramValue] = useState("@luciuskrypt");

  const handleSubmitSetting = () => {
    closeModals();

    // transfer data to context in here
    handleDataModal();
  };

  return (
    <div className="min-w-[180px]">
      <div className="text-lg font-light">Settings</div>

      <div className="mt-6">
        <div>
          <div className="text-sm font-light">Allowed Slippage</div>
          <div className="flex items-center pr-2 justify-between mt-1.5 bg-flaex-bg-hover bg-opacity-50 ">
            <input
              className="bg-transparent w-full outline-none py-1 px-2"
              type="text"
              value={slippageValue}
              onChange={(e: any) => setSlippageValue(e.target.value)}
            />
            <div>%</div>
          </div>
        </div>

        <div>
          <div className="text-base font-light mt-2">Change Telegram</div>
          <div className="pr-2 mt-1.5 bg-flaex-bg-hover bg-opacity-50 ">
            <input
              className="bg-transparent w-full outline-none py-1 px-2"
              type="text"
              value={telegramValue}
              onChange={(e: any) => setTelegramValue(e.target.value)}
            />
            <div className="text-right text-xs font-extralight">
              Current Telegram Handle
            </div>
            <div className="text-[10px] font-normal text-right">
              @luciuskrypt
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSubmitSetting()}
            className=" w-full bg-flaex-button text-center hover:bg-flaex-hover-text hover:bg-opacity-80 duration-300 rounded px-2 py-1"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSetting;
