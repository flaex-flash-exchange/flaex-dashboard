import type { NextPage } from "next";
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget } from '@uniswap/widgets';

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css';
import { useProvider, useSigner } from "wagmi";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Web3Provider } from '@ethersproject/providers';

import {
  useConnectModal,
} from '@rainbow-me/rainbowkit';
import { contractAddress } from "constants/contractAddress";
import tokenList from "./tokenList";
const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984';
const JSON_RPC_URL = 'https://cloudflare-eth.com';


const Index: NextPage = () => {
  const { openConnectModal } = useConnectModal();
  const [isMouted, setIsMouted] = useState(false);

  useEffect(()=>{
    setIsMouted(true);
  },[]);

  const { data : signer} = useSigner();
  return ( 
    <>
    {isMouted && (
      <div >
            <SwapWidget 
                tokenList={tokenList.tokens}
                onConnectWalletClick={openConnectModal}
                provider={signer?.provider as Web3Provider}
                defaultOutputTokenAddress={contractAddress.WETH}
                defaultInputTokenAddress={contractAddress.DAI}
           />
          </div>
    )}
  </>
  );
};

export default Index;
