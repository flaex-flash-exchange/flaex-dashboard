import "@rainbow-me/rainbowkit/styles.css";
import { ConfigProvider } from "antd";
import "assets/styles/global.scss";
import LayoutWrapper from "components/layout/LayoutWrapper";
import { ModalContextProvider } from "context/ModalContext";
import type { AppProps } from "next/app";
import RainbowProvider from "providers/Rainbowkit";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      direction="rtl"
      theme={{ token: { colorPrimary: "#1da57a", fontFamily: "inherit" } }}
    >
      <Provider store={store}>
        <RainbowProvider>
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
        </RainbowProvider>
      </Provider>
    </ConfigProvider>
  );
}

export default MyApp;
