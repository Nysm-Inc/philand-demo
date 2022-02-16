import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { StarknetProvider } from "@starknet-react/core";
import { Layout } from "../components/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StarknetProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </StarknetProvider>
  )
}

export default App;
