import { useEffect } from "react";
import { useStarknet } from "@starknet-react/core";
import { Box, Button } from "@chakra-ui/react";

const WalletConnect = () => {
  const { account, connectBrowserWallet, error } = useStarknet();

  useEffect(() => {
    connectBrowserWallet();
  },[])
  return (
    <Box>
      {!account ? (
        <Button size="md" onClick={() => connectBrowserWallet()}
        >
          Connect Wallet
        </Button>
      ) : (
        <Button size="md">
          {account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : "No Account"}
        </Button>
      )}
    </Box>
  )
}

export default WalletConnect;
