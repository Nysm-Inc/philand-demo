import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

const assets = {
  eth: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  aave: "https://cryptologos.cc/logos/aave-aave-logo.svg",
  curve: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.svg",
  uni: "https://cryptologos.cc/logos/uniswap-uni-logo.svg",
};
type Asset = keyof typeof assets;

type Object = Asset | ""

const Index: NextPage = () => {
  const [land, setLand] = useState<Object[][]>([
    [ "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "" ]
  ])

  const [selected, setSelected] = useState<Object>("");

  return (
    <Flex>
      <Box>
        <Heading as="h5" size="md">ΦLand</Heading>
          {land.map((row, i) => (
            <Box key={i} _after={{ clear: "both", content: "''", display: "table" }}>
              {row.map((object, j) => (
                <Button
                  key={j}
                  variant="outline"
                  size="md"
                  colorScheme="gray"
                  borderRadius="none"
                  padding={0}
                  onClick={() => {
                    const copied = JSON.parse(JSON.stringify(land))
                    copied[i][j] = selected
                    setLand(copied)
                  }}
                >
                  {object && (
                    <Image src={assets[object]} width={20} height={20} />
                  )}
                </Button>
              ))}
            </Box>
          ))}
      </Box>

      <Spacer />

      <Box>
        <Heading as="h5" size="md">ΦObject</Heading>
        {(Object.keys(assets) as Object[]).map((name, i) => (
          <Button
            key={i}
            variant="outline"
            isActive={name === selected}
            onClick={() => setSelected(name)}
          >
            {name && (
              <Image src={assets[name]} width={24} height={24} />
            )}
          </Button>
        ))}
      </Box>
    </Flex>
  )
}

export default Index;
