"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "900"] });

// 1. Get projectId
const projectId = '385e63d0600cb1853dce878de2b590fa'

// 2. Set chains
const mainnet = {
  chainId: 80001,
  name: 'Mumbai',
  currency: 'MATIC',
  explorerUrl: 'https://mumbai.polygonscan.com',
  rpcUrl: 'https://rpc-mumbai.maticvigil.com'
}

// 3. Create modal
const metadata = {
  name: 'Tribes',
  description: 'Decentralized Social Platform',
  url: '',
  icons: ['']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family' : 'Poppins, sans-serif',
    '--w3m-accent'	: '#000000',
    '--w3m-color-mix': '#959cd0',
    '--w3m-color-mix-strength': 40,
    '--w3m-font-size-master': '12px',
    '--w3m-border-radius-master' : '4px',

  }
})

interface Web3ModalProviderProps {
    children: React.ReactNode;
  }

export function Web3ModalProvider({ children }:  Web3ModalProviderProps) {
  return children;
}
