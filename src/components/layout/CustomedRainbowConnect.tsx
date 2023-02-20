import { ConnectButton } from "@rainbow-me/rainbowkit";
import AntDropDown from "components/common/AntCommon/AntDropdown";
import AntImage from "components/common/AntCommon/AntImages";
import BaseButton from "components/common/BaseButton";
import Link from "next/link";
import styled from "styled-components";
import { handleCopyToClipboard } from "util/commons";
import { useAccount, useDisconnect, useEnsName } from "wagmi";

export function CustomedRainbowConnect() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  const onCopyAddress = (address: string) => {
    handleCopyToClipboard(`${address}`);
  };

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return <BaseButton onButtonClick={openConnectModal} />;
              }

              if (chain.unsupported) {
                return (
                  <BaseButton onButtonClick={openChainModal}>
                    Wrong network
                  </BaseButton>
                );
              }

              return (
                <div className="flex items-center px-2 font-semibold duration-200 rounded-xl py-1 text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border ">
                  <div className="overflow-hidden truncate w-42">
                    <AntDropDown
                      className="test-motmi"
                      title={ensName ? `${ensName} (${address})` : address}
                      options={[
                        {
                          key: "1",
                          label: (
                            <DropboxItem
                              onClick={() => onCopyAddress(`${address}`)}
                            >
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
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

const DropboxItem = styled.div`
  color: white;
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
