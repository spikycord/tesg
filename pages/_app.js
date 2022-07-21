import "../styles/globals.css";
import dynamic from "next/dynamic";
const ProgressBar = dynamic(() => import("../components/utils/ProgessBar"));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
