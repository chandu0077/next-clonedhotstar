import "../styles/globals.css";
import type { AppProps } from "next/app";
import MovieProvider from "@/store/MovieProvider";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}

export default MyApp;
