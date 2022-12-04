import { ethers } from 'ethers';
import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { useEffect } from 'react';

interface Web3ContextInterface {
  eoaProvider: ethers.providers.Provider | null;
  setEoaProvider: (provider: ethers.providers.Web3Provider) => void;
  // eoaSigner: ethers.Signer | null;
  // setEoaSigner :(ethers.Signer)=>void;
}

const Web3Context = createContext<Web3ContextInterface>({
  eoaProvider: null,
  setEoaProvider: () => {},
  // eoaSigner: null,
  // setEoaSigner :()=>{},
});

export const useWeb3Context = () => useContext(Web3Context);

export const Web3ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  // const [eoaSigner, setEoaSigner] = useState(null);
  const [eoaProvider, setEoaProvider] = useState<ethers.providers.Provider | null>(null);

  const eoaAddressPvtKey =
    localStorage.getItem('eoaAddressPvtKey') || ethers.Wallet.createRandom().privateKey.toString();

  localStorage.setItem('eoaAddressPvtKey', eoaAddressPvtKey.toString());

  useEffect(() => {
    setEoaProvider(new ethers.Wallet(eoaAddressPvtKey).provider);
  }, [eoaAddressPvtKey]);
  return (
    <Web3Context.Provider
      value={{
        // eoaSigner,
        eoaProvider,
        setEoaProvider,
        // setEoaSigner
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
