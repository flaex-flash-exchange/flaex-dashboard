// import Image from "next/image";
import { useModalContext } from "context/ModalContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  //   useEnsAvatar,
  useEnsName,
} from "wagmi";

import AntDropDown from "components/common/AntCommon/AntDropdown";
import AntImage from "components/common/AntCommon/AntImages";
import BaseButton from "components/common/BaseButton";
import { IConnectWalletBtn } from "constants/interface";
import Link from "next/link";
import styled from "styled-components";
import { handleCopyToClipboard } from "util/commons";

export function Connectbutton() {
  const { address, isConnected } = useAccount();
  //   const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  const [walletConnected, setWalletConnected] = useState(false);

  const onCopyAddress = (address: string) => {
    handleCopyToClipboard(`${address}`);
  };

  useEffect(() => {
    if (isConnected) {
      setWalletConnected(true);
      return;
    }
    setWalletConnected(false);
  }, [isConnected]);

  if (walletConnected) {
    return (
      <div className="flex items-center px-2 font-semibold duration-200 rounded-xl py-1 text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border ">
        <div className="overflow-hidden truncate w-32">
          <AntDropDown
            className="test-motmi"
            title={ensName ? `${ensName} (${address})` : address}
            options={[
              {
                key: "1",
                label: (
                  <DropboxItem onClick={() => onCopyAddress(`${address}`)}>
                    <AntImage src="/images/header/copy.svg" />
                    <span>Copy Address</span>
                  </DropboxItem>
                ),
              },
              {
                key: "2",
                label: (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://etherscan.io/address/${address}`}
                  >
                    <a target="_blank">
                      <DropboxItem>
                        <AntImage src="/images/header/explorer.svg" />
                        <span>View on Explorer</span>
                      </DropboxItem>
                    </a>
                  </Link>
                ),
              },
              {
                key: "3",
                label: (
                  <DropboxItem onClick={() => disconnect()}>
                    <AntImage src="/images/header/disconnect.svg" />
                    <span>Disconnect</span>
                  </DropboxItem>
                ),
              },
            ]}
          />
        </div>
      </div>
    );
    // return (
    //   <div>
    //     <Dropdown
    //       title={
    //         <div className="flex items-center px-2 font-semibold duration-200 rounded-xl py-1 text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border ">
    //           <div className="overflow-hidden truncate w-32">
    //             {ensName ? `${ensName} (${address})` : address}
    //           </div>
    //           <div>
    //             <FaAngleDown />
    //           </div>
    //         </div>
    //       }
    //       data={mockDataSetting}
    //       width={"min-w-[120px]"}
    //       classItem="py-2 px-4 cursor-pointer hover:text-flaex-primary duration-200 text-sm"
    //       sizeIcon={18}
    //       bottomLength="-bottom-5"
    //     />
    //   </div>
    // );
  }

  return <ConnectWalletBtn />;
}

export const ConnectWalletBtn = (props: IConnectWalletBtn) => {
  const { extendClass } = props;
  const { pushModal } = useModalContext();
  return (
    <BaseButton
      moreClass={extendClass}
      onButtonClick={() => pushModal(<ModalConnectWallet />)}
    />
  );
};

const ModalConnectWallet = () => {
  const { closeModals } = useModalContext();

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <div className="min-w-[250px]">
      <div className="text-lg font-light">Connect With</div>
      <div className="grid gap-2.5 mt-6">
        {connectors.map((connector: any, idx: number) => {
          return (
            <BtnInModalConnect
              key={connector.id}
              onClick={
                !connector.ready
                  ? () => null
                  : () => {
                      connect({ connector });
                      closeModals();
                    }
              }
            >
              <div className="img-wrapper">
                <Image
                  src={mockDataWallet[idx].icon}
                  width={30}
                  height={30}
                  alt={connector.name}
                />
              </div>
              {connector.name}
              {!connector.ready && " (unsupported)"}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (connecting)"}
            </BtnInModalConnect>
          );
        })}
        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
};

const BtnInModalConnect = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  .img-wrapper {
    background-color: white;
    border-radius: 5px;
    padding: 5px 5px 0 5px;
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DropboxItem = styled.div`
  color: white;
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const mockDataWallet = [
  {
    value: "metamask",
    label: "MetaMask Wallet",
    icon: "/images/metamask_icon.png",
  },
  {
    value: "coinbase",
    label: "Coinbase Wallet",
    icon: "/images/coinbase_icon.png",
  },
];
