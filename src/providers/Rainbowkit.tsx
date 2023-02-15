import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { IChildren } from "constants/interface";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const RainbowProvider = (props: IChildren) => {
  const { children } = props;

  const { chains, provider } = configureChains(
    [goerli],
    [
      alchemyProvider({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",
      }),
      publicProvider(),
    ],
  );

  const { connectors } = getDefaultWallets({
    appName: "TheFlaexClient",
    chains,
  });

  const flaexWagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={flaexWagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowProvider;
