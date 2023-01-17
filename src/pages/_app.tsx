import type { AppProps } from "next/app";
import "assets/styles/global.scss";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "components/layout/LayoutWrapper";
import { ModalContextProvider } from "context/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default MyApp;
