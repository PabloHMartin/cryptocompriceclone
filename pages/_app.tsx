import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { I18nProvider } from "../lib/context/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Component {...pageProps} />
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
