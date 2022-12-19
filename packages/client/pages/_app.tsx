import "../styles/globals.css";
import type { AppProps } from "next/app";
import i18next from "i18next";
// import "../i18n.init";
import "../i18next/i18n.init";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
