import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { WalletStarknet } from "../wallet"

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="lg">
        <Link href="/">Φ</Link>
      </Heading>

      <Box marginLeft="auto">
        <WalletStarknet />
      </Box>
    </Flex>
  );
};

export default Header;
