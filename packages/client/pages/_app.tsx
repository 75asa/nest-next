import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../i18next/i18next";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
