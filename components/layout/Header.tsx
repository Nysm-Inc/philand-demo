import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { WalletConnect } from "../wallet"

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">Φ</Link>
      </Heading>

      <Box marginLeft="auto">
        <WalletConnect />
      </Box>
    </Flex>
  );
};

export default Header;
