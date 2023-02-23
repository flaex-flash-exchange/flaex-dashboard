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
const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984';
const JSON_RPC_URL = 'https://cloudflare-eth.com';

const tokenList = {
  "name": "Uniswap Labs Default",
  "timestamp": "2023-02-17T16:13:29.462Z",
  "version": {
    "major": 8,
    "minor": 2,
    "patch": 0
  },
  "tags": {},
  "logoURI": "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
  "keywords": [
    "uniswap",
    "default"
  ],
  "tokens": [
    {
      "chainId": 5,
      "address": "0x1D2708636EA8E69f8c3766B973be331D175172aB",
      "name": "WETH",
      "symbol": "WETH",
      "decimals": 18
    },
    {
      "chainId": 5,
      "address": "0x61D6aF87F88dd282b07eA7E1de69e27C6ac18Adb",
      "name": "DAI",
      "symbol": "DAI",
      "decimals": 18
    }
  ]
};

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
