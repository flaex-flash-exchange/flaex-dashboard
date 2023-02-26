import { useModalContext } from "context/ModalContext";
import React from "react";
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
  content: string;
  type?: string;
}) => {
  const { closeModals } = useModalContext();

  const handleDismiss = () => {
    closeModals();
  };

  return (
    <div className="min-w-[250px] px-3 py-5">
      <div className="mt-2 all-center">
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
        <div className="text-[14px] text-center font-semibold max-w-[220px] mt-6">
          {content}
        </div>
        <a
          href={`https://goerli.etherscan.io/tx/${hash}`}
          className="w-full text-center justify-center cursor-pointer mt-7 flex items-center font-normal gap-2 text-[12px] hover:underline hover:decoration-solid duration-200"
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
            className=" bg-flaex-button text-center hover:bg-flaex-hover-text hover:bg-opacity-80 duration-300 rounded-[10px] px-8 py-2.5"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCallback;
