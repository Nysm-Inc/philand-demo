import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { StarknetProvider } from "@starknet-react/core";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider, ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";
import { Layout } from "../components/layout";


const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider);
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <StarknetProvider>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </StarknetProvider>
    </Web3ReactProvider>
  )
}

export default App;
