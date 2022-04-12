import type { AppProps } from "next/app";

import "../styles/global.scss";
import "../styles/icons.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
