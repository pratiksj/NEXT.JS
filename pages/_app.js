import "@/styles/globals.css";
import { AnecdoteContextProvider } from "@/context/AnecdoteContext";

export default function App({ Component, pageProps }) {
  return (
    <AnecdoteContextProvider>
      <Component {...pageProps} />
    </AnecdoteContextProvider>
  );
}
