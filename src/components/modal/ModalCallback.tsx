import { useModalContext } from "context/ModalContext";
import React from "react";
import { ReactElement } from "react";
import {
  FaExternalLinkAlt,
  FaRegCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const ModalCallback = ({
  hash,
  content,
  type = "success",
}: {
  hash: string;
  content: string | ReactElement;
  type?: string;
}) => {
  const { closeModals } = useModalContext();

  const handleDismiss = () => {
    closeModals();
  };

  return (
    <div className="w-[250px] h-[240px] pb-[2px]">
      <div className="mt-2 flex flex-col justify-between items-center h-full">
        <div>
          <div
            className={`${
              type === "success" ? "text-flaex-green" : "text-flaex-red"
            } flex justify-center`}
          >
            {type === "success" ? (
              <FaRegCheckCircle size={32} />
            ) : (
              <FaTimesCircle size={32} />
            )}
          </div>
          <div className="text-[16px] text-center font-semibold max-w-[240px] h-[105px] h-full mt-6">
            {content}
          </div>
        </div>

        <div className="h-full">
          <a
            href={`https://goerli.etherscan.io/tx/${hash}`}
            className="w-full text-center justify-center cursor-pointer flex items-center italic font-normal gap-2 text-[12px] hover:underline hover:decoration-solid duration-200"
            target="blank"
          >
            View Transaction
            <span>
              <FaExternalLinkAlt />
            </span>
          </a>
          <div className="mt-3.5 text-center">
            <button
              onClick={() => handleDismiss()}
              className=" bg-flaex-button text-center font-semibold hover:bg-flaex-hover-text hover:bg-opacity-80 duration-300 rounded-[10px] px-8 py-2.5"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCallback;
