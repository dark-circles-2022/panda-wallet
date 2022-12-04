// @ts-nocheck
import { ethers } from 'ethers';
import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { useEffect } from 'react';
import { scwAbi } from '../abi/scw';
import { deployerAbi } from '../abi/deployer';
import { complexAccountAbi } from '../abi/complexAccount';

interface Web3ContextInterface {
  eoaProvider: ethers.providers.Provider | null;
  setEoaProvider: (provider: ethers.providers.Web3Provider) => void;
  contractAddress: string;
  // eoaSigner: ethers.Signer | null;
  // setEoaSigner :(ethers.Signer)=>void;
  deployerContract: ethers.Contract | null;
  complexAccountContract: ethers.Contract | null;
}

const Web3Context = createContext<Web3ContextInterface>({
  eoaProvider: null,
  setEoaProvider: () => {},
  contractAddress: '',
  // eoaSigner: null,
  // setEoaSigner :()=>{},
  deployerContract: null,
  complexAccountContract: null,
});

export const useWeb3Context = () => useContext(Web3Context);

export const Web3ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  // const [eoaSigner, setEoaSigner] = useState(null);
  const [eoaProvider, setEoaProvider] = useState<ethers.providers.Provider | null>(null);
  const [eoaAddress, setEoaAddress] = useState<ethers.providers.Provider | null>(null);
  const [deployerContract, setDeployerContract] = useState<ethers.Contract | null>(null);
  const [complexAccountContract, setComplexAccountContract] = useState<ethers.Contract | null>(null);
  const deployerAddress = '0xA49Ee42f15034882060851Db5c37180501248F7B';

  const eoaAddressPvtKey =
    localStorage.getItem('eoaAddressPvtKey') || ethers.Wallet.createRandom().privateKey.toString();

  localStorage.setItem('eoaAddressPvtKey', eoaAddressPvtKey.toString());

  const [contractAddress, setContractAddress] = useState<string>('0x0605DA2F0B7717c8494F94A9473A12b8acBe1077');

  const [recoverWalletAddress, setRecoverWalletAddress] = useState('');

  const [recoveryFrens, setRecoveryFrens] = useState('');

  const deployWallet = async () => {
    await deployerContract.deployAccount([eoaAddress], ['0xd52dBd85B950c8bFD4ba4e12800C66D08837609f']);
  };

  useEffect(() => {
    if (eoaProvider) {
      console.log('eoaProvider', eoaProvider);
      // change contract address
      const scwContract = new ethers.Contract('0x0605DA2F0B7717c8494F94A9473A12b8acBe1077', scwAbi, eoaProvider);
      setDeployerContract(new ethers.Contract(deployerAddress, deployerAbi, eoaProvider));
      setComplexAccountContract(
        new ethers.Contract('0x0605DA2F0B7717c8494F94A9473A12b8acBe1077', complexAccountAbi, eoaProvider)
      );
      const scwAddress = scwContract.address;
      setContractAddress(scwAddress);
    }
  }, [eoaProvider]);

  useEffect(() => {
    setEoaProvider(new ethers.Wallet(eoaAddressPvtKey).provider);
    setEoaAddress(new ethers.Wallet(eoaAddressPvtKey).address);
  }, [eoaAddressPvtKey]);
  return (
    <Web3Context.Provider
      value={{
        // eoaSigner,
        eoaProvider,
        setEoaProvider,
        // setEoaSigner,
        deployerContract,
        complexAccountContract,
        contractAddress,
        recoverWalletAddress,
        setRecoverWalletAddress,
        recoveryFrens,
        setRecoveryFrens,
        deployWallet,
        // setEoaSigner
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
