'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface MetaMaskProviderProps {
  children: ReactNode;
}

interface MetaMaskContextValues {
  account: string | null;
  connectMetaMask: () => Promise<void>;
  disconnectMetaMask: () => void;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

const MetaMaskContext = createContext<MetaMaskContextValues | undefined>(undefined);

export function useMetaMask(): MetaMaskContextValues {
  const context = useContext(MetaMaskContext);
  if (!context) {
    throw new Error("useMetaMask deve ser usado dentro de um MetaMaskProvider");
  }
  return context;
}

export function MetaMaskProvider({ children }: MetaMaskProviderProps) {

  const [account, setAccount] = useState<string | null>(null);

  const checkWalletConnection = async () => {
    try {
      const accounts = await window.ethereum?.request({
        method: "eth_accounts",
      });

      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);

      } else {
        console.warn("MetaMask is not connected.");
        setAccount(null);
      }
    } catch (error) {
      console.error("Error checking MetaMask connection:", error);
      setAccount(null);
    }
  };

  const connectMetaMask = async () => {
    try {
      const accounts = await window.ethereum?.request({
        method: "eth_requestAccounts",
      });

      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);

      } else {
        console.warn("User denied MetaMask account access.");
        setAccount(null);
      }
    } catch (error) {
      console.error("MetaMask connection error:", error);
      setAccount(null);
    }
  };

  const disconnectMetaMask = () => {
    setAccount(null);
  };

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const value: MetaMaskContextValues = {
    account,
    connectMetaMask,
    disconnectMetaMask,
  };

  return (
    <MetaMaskContext.Provider value={value}>
      {children}
    </MetaMaskContext.Provider>
  );
}
