import type { AppProps } from "next/app";
import "assets/styles/global.scss";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "components/layout/LayoutWrapper";
import { ModalContextProvider } from "context/ModalContext";
import { ConfigProvider } from "antd";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { publicProvider } from "wagmi/providers/public";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { InjectedConnector } from "wagmi/connectors/injected";

function MyApp({ Component, pageProps }: AppProps) {
  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [
      alchemyProvider({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",
      }),
      publicProvider(),
    ],
  );

  const flaexWagmiClient = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "flaex",
        },
      }),
      // new InjectedConnector({
      //   chains,
      //   options: {
      //     name: "Injected",
      //     shimDisconnect: true,
      //   },
      // }),
    ],
    provider,
    // webSocketProvider,
  });

  return (
    <ConfigProvider
      direction="rtl"
      theme={{ token: { colorPrimary: "#1da57a" } }}
    >
      <Provider store={store}>
        <WagmiConfig client={flaexWagmiClient}>
          <ModalContextProvider>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              closeOnClick
              pauseOnHover={false}
              theme="light"
            />
            <LayoutWrapper>
              <Component {...pageProps} />
            </LayoutWrapper>
          </ModalContextProvider>
        </WagmiConfig>
      </Provider>
    </ConfigProvider>
  );
}

export default MyApp;
