import { ethers } from 'ethers';
import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { useEffect } from 'react';
import { scwAbi } from '../abi/scw';

interface Web3ContextInterface {
  eoaProvider: ethers.providers.Provider | null;
  setEoaProvider: (provider: ethers.providers.Web3Provider) => void;
  contractAddress: string;
  // eoaSigner: ethers.Signer | null;
  // setEoaSigner :(ethers.Signer)=>void;
}

const Web3Context = createContext<Web3ContextInterface>({
  eoaProvider: null,
  setEoaProvider: () => {},
  contractAddress: '',
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

  const [contractAddress, setContractAddress] = useState<string>('0xEb5fCbB0944a060C00c9Df9B8b1845800D5060EC');

  useEffect(() => {
    if (eoaProvider) {
      console.log('eoaProvider', eoaProvider);
      // change contract address
      const scwContract = new ethers.Contract('0xEb5fCbB0944a060C00c9Df9B8b1845800D5060EC', scwAbi, eoaProvider);

      const scwAddress = scwContract.address;
      setContractAddress(scwAddress);
    }
  }, [eoaProvider]);

  useEffect(() => {
    setEoaProvider(new ethers.Wallet(eoaAddressPvtKey).provider);
  }, [eoaAddressPvtKey]);
  return (
    <Web3Context.Provider
      value={{
        // eoaSigner,
        eoaProvider,
        setEoaProvider,
        contractAddress,
        // setEoaSigner
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
