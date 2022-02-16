import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

const Index: NextPage = () => {
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
                onClick={() => {
                  // l1 wallet connect
                  alert("hoge");
                }}
              />
            ))}
          </Box>
        ))}
      </Box>

      <Link href="/l2">
        <a>L2</a>
      </Link>
    </Box>
  )
}

export default Index;
