import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({
  content,
  isVisible,
  onClose,
  hiddenClose = false,
}: {
  content: JSX.Element;
  onClose: () => void;
  isVisible: boolean;
  hiddenClose?: boolean;
}) => {
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className={`fixed inset-0  bg-flaex-border bg-opacity-5 backdrop-blur-sm center-all z-50 duration-300  ${
        isVisible ? "" : "scale-105"
      }`}
      onClick={(e) => handleClose(e)}
      id="wrapper"
    >
      <div className="relative">
        {!hiddenClose && (
          <div
            onClick={() => onClose()}
            className="absolute top-[10px] right-[10px] cursor-pointer hover:scale-105 duration-300"
          >
            <FaTimes size={20} />
          </div>
        )}
        <div className="bg-flaex-bg-primary py-3.5 px-3 rounded-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
