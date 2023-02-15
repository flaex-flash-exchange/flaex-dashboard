import { ConnectButton } from '@rainbow-me/rainbowkit';
import AntDropDown from 'components/common/AntCommon/AntDropdown';
import { useState } from 'react';
import { useAccount, useDisconnect, useEnsName } from 'wagmi';
import { handleCopyToClipboard } from "util/commons";
import styled from "styled-components";
import AntImage from 'components/common/AntCommon/AntImages';
import Link from 'next/link';


export function CustomedRainbowConnect() {
    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { disconnect } = useDisconnect();
  
    const [walletConnected, setWalletConnected] = useState(false);
  
    const onCopyAddress = (address: string) => {
      handleCopyToClipboard(`${address}`);
    };
  
    const openModelCustom  = () => {
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
    };
    return (
        <ConnectButton.Custom>
              {({
                account,
                chain,
                // openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated');
        
                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button onClick={openConnectModal} type="button">
                            Connect Wallet
                          </button>
                        );
                      }
        
                      if (chain.unsupported) {
                        return (
                          <button onClick={openChainModal} type="button">
                            Wrong network
                          </button>
                        );
                      }
        
                      return (
                        <div style={{ display: 'flex', gap: 12 }}>
                          <button
                            onClick={openChainModal}
                            style={{ display: 'flex', alignItems: 'center' }}
                            type="button"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 12,
                                  height: 12,
                                  borderRadius: 999,
                                  overflow: 'hidden',
                                  marginRight: 4,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                  />
                                )}
                              </div>
                            )}
                            {chain.name}
                          </button>
        
                          <button onClick={openModelCustom} type="button">
                            {account.displayName}
                            {/* {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''} */}
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
        );
}

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



