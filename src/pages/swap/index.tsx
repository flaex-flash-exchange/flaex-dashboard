import type { NextPage } from "next";
import {
  SupportedLocale,
  SUPPORTED_LOCALES,
  SwapWidget,
  Theme,
} from "@uniswap/widgets";

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import "@uniswap/widgets/fonts.css";
import { useProvider, useSigner } from "wagmi";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Web3Provider } from "@ethersproject/providers";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { contractAddress } from "constants/contractAddress";
import tokenList from "../../util/tokenList";

const Index: NextPage = () => {
  const { openConnectModal } = useConnectModal();
  const [isMouted, setIsMouted] = useState(false);

  useEffect(() => {
    setIsMouted(true);
  }, []);

  const { data: signer } = useSigner();

  const theme: Theme = {
    accent: "#BD905A",
    primary: "#fff",
    secondary: "gray",
    interactive: "#BD905A",
    container: "transparent",
    module: "#2B3A55",
    outline: "#BD905A",
    dialog: "#1e283b",
    fontFamily: "Source Serif Pro",
    borderRadius: 0.8,
  };

  return (
    <div className="center-all">
      {isMouted && (
        <div className="bg-border-flaex flex justify-center w-fit p-6">
          <SwapWidget
            tokenList={tokenList.tokens}
            onConnectWalletClick={openConnectModal}
            provider={signer?.provider as Web3Provider}
            defaultOutputTokenAddress={contractAddress.WETH}
            defaultInputTokenAddress={contractAddress.USDT}
            theme={theme}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
