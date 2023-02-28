import Modal from "components/modal/Modal";
import React, { createContext, useContext, useState } from "react";

const uid = (() => {
  let i = 0;
  return () => `${i++}`;
})();

export const ModalContext = createContext<any>({});
export const ModalContextProvider = ({ children }: any) => {
  const [modals, setModals] = useState<JSX.Element[]>([]);
  const [dataModal, setDataModal] = useState();

  const handleDataModal = (data: any) => {
    setDataModal(data);
    console.log("handle data modal");
  };

  const closeModals = () => {
    setModals([]);
  };

  const close = (key: any, content: JSX.Element) => {
    setModals((modals) => {
      return modals.map((modal) => {
        if (modal.key !== key) return modal;
        return (
          <Modal
            key={key}
            isVisible={false}
            content={content}
            onClose={() => close(key, content)}
          />
        );
      });
    });

    setTimeout(() => {
      setModals((modals) => {
        return modals.filter((modal) => modal.key !== key);
      });
    }, 300);
  };

  const pushModal = (content: JSX.Element, hiddenClose: boolean) => {
    const key = uid();

    const modal = (
      <Modal
        key={key}
        isVisible={true}
        content={content}
        onClose={() => close(key, content)}
        hiddenClose={hiddenClose}
      />
    );

    setModals((modals) => [...modals, modal]);
  };

  const value = { modals, pushModal, close, closeModals, handleDataModal };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
