import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Index.module.css'

const assets = {
  eth: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  aave: "https://cryptologos.cc/logos/aave-aave-logo.svg",
  curve: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.svg",
  uni: "https://cryptologos.cc/logos/uniswap-uni-logo.svg",
};
type Asset = keyof typeof assets;

type Object = Asset | ""

const Index: NextPage = () => {
  const [plane, setPlane] = useState<Object[][]>([
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
    <div className={styles.root}>
      <div className={styles.plane}>
        <h3>ΦLand</h3>
        {plane.map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((object, j) => (
              <button key={j} className={styles.square} onClick={() => {
                const copied = JSON.parse(JSON.stringify(plane))
                copied[i][j] = selected
                setPlane(copied)
              }}>
                {object && (
                  <Image src={assets[object]} width={24} height={24} />
                )}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.box}></div>

      <div className={styles.assets}>
      <h3>ΦObject</h3>
        {(Object.keys(assets) as Object[]).map((name, i) => (
          <button
            key={i}
            className={name === selected ? styles.asset_focus : styles.asset}
            onClick={() => setSelected(name)}
          >
            {name && (
              <Image src={assets[name]} width={24} height={24} />
            )}
          </button>
        ))}
      </div>
  </div>
  )
}

export default Index;
