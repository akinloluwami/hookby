import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const colors = {
    brand: {
      accent: "#F45C43",
      dark1: "#1c1c1c",
      dark2: "#111111",
    },
  };

  const theme = extendTheme({ colors });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
