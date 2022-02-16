import type { NextPage } from "next";
import Router from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useStarknet } from "@starknet-react/core";
import { useWeb3React } from "@web3-react/core";
import { Box, Button, Heading } from "@chakra-ui/react";
import { injected } from "../../connectors"

const ensLogo = "https://cryptologos.cc/logos/ethereum-name-service-ens-logo.svg"

const Map: NextPage = () => {
  const { account: sAccount } = useStarknet();
  const { activate } = useWeb3React();
  const [map, setMap] = useState([
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
    [ "", "", "", "", "", "", "", "", "", "" ],
  ])

  return (
    <Box>
      {sAccount && (
        <Box>
          <Heading as="h5" size="md">ΦMap</Heading>
          {map.map((row, i) => (
            <Box key={i} _after={{ clear: "both", content: "''", display: "table" }}>
              {row.map((land, j) => (
                <Button
                  key={j}
                  variant="outline"
                  size="md"
                  colorScheme="gray"
                  borderRadius="none"
                  padding={0}
                  onClick={() => {
                    if (land === "x") {
                      Router.push("/land");
                    } else {
                      try {
                        activate(injected, undefined, true)
                        .then(() => {
                          alert("L1 Tx");
                          const copied = JSON.parse(JSON.stringify(map));
                          copied[i][j] = "x";
                          setMap(copied);
                        })
                      } catch (error) {

                      }
                    }
                  }}
                >
                  {land && (
                    <Image src={ensLogo} width={24} height={24} />
                  )}
                </Button>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Map;
