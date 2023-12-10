"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

const projectId = '385e63d0600cb1853dce878de2b590fa'

const chains = [
  {
    chainId: 80001,
    name: 'Mumbai',
    currency: 'MATIC',
    explorerUrl: 'https://mumbai.polygonscan.com',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com'
  },
  {
    chainId: 1442,
    name: 'Polygon zkEVM Testnet',
    currency: 'ETH',
    explorerUrl: 'https://explorer.public.zkevm-test.net',
    rpcUrl: 'https://rpc.public.zkevm-test.net'
  }
]

const metadata = {
  name: 'Tribes',
  description: 'Decentralized Social Platform',
  url: '',
  icons: ['']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: chains,
  projectId,
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'Poppins, sans-serif',
    '--w3m-accent': '#000000',
    '--w3m-color-mix': '#959cd0',
    '--w3m-color-mix-strength': 40,
    '--w3m-font-size-master': '12px',
    '--w3m-border-radius-master': '4px',

  }
})

interface Web3ModalProviderProps {
  children: React.ReactNode;
}

export function Web3ModalProvider({ children }: Web3ModalProviderProps) {
  return children;
}
