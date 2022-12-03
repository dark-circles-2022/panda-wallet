import { CircularProgress, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import SocialLogin, { getSocialLoginSDK } from '@biconomy/web3-auth';
import { useWeb3Context } from '../../contexts/Web3Context';

import erc20ABI from './abis/erc20.abi.json';

type StateType = {
  provider?: any;
  web3Provider?: ethers.providers.Web3Provider | null;
  ethersProvider?: ethers.providers.Web3Provider | null;
  address?: string;
  chainId?: number;
};
const initialState: StateType = {
  provider: null,
  web3Provider: null,
  ethersProvider: null,
  address: '',
  chainId: 80001,
};

const SocialLoginScreen = () => {
  const [web3State, setWeb3State] = useState<StateType>(initialState);
  const { provider, web3Provider, ethersProvider, address, chainId } = web3State;
  const [loading, setLoading] = useState(false);
  const [socialLoginSDK, setSocialLoginSDK] = useState<SocialLogin | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);

  const [eoaProvider, setEoaProvider] = useState<any>();

  // if wallet already connected close widget
  useEffect(() => {
    if (socialLoginSDK && socialLoginSDK.provider) {
      socialLoginSDK.hideWallet();
    }
  }, [address, socialLoginSDK]);

  useEffect(() => {
    (async () => {
      if (!socialLoginSDK?.web3auth?.provider) return;
      const provider = new ethers.providers.Web3Provider(socialLoginSDK.web3auth.provider);
      const accounts = await provider.listAccounts();
      console.log(provider.getSigner());
      console.log('EOA address', accounts, provider);
    })();
  }, [socialLoginSDK]);

  const connect = useCallback(async () => {
    const socialLoginSDK = new SocialLogin();
    await socialLoginSDK.init('0x13881');
    // setSocialLoginSDK(socialLoginSDK);
    socialLoginSDK.showConnectModal();

    if (!socialLoginSDK.provider) {
      socialLoginSDK.showWallet();
    } else {
      console.log('already logged in');
      console.log(socialLoginSDK.provider);
      setEoaProvider(socialLoginSDK.provider);

      const walletProvider = new ethers.providers.Web3Provider(socialLoginSDK.provider);
      //   const erc20Interface = new ethers.utils.Interface(erc20ABI);

      //   const data = erc20Interface.encodeFunctionData('approve', [
      //     '0x682b1f3d1afa69ddfa5ff62c284894a19fd395b4',
      //     '2000000000000000000',
      //   ]);
      //   const tx1 = {
      //     to: '0xeaBc4b91d9375796AA4F69cC764A4aB509080A58',
      //     data: data,
      //   };

      console.log(walletProvider.getSigner);
    }
  }, []);

  useEffect(() => {
    connect();
  }, [connect]);

  //   const connect = useCallback(async () => {
  //     if (address) return;

  //     if (socialLoginSDK?.web3auth?.provider) {
  //       setLoading(true);
  //       console.info('socialLoginSDK.provider', socialLoginSDK.web3auth.provider);
  //       const web3Provider = new ethers.providers.Web3Provider(socialLoginSDK.web3auth.provider);
  //       const signer = web3Provider.getSigner();
  //       const gotAccount = await signer.getAddress();
  //       const network = await web3Provider.getNetwork();
  //       setWeb3State({
  //         provider: socialLoginSDK.provider,
  //         web3Provider: web3Provider,
  //         ethersProvider: web3Provider,
  //         address: gotAccount,
  //         chainId: Number(network.chainId),
  //       });
  //       setEoaProvider(web3Provider);
  //       setLoading(false);
  //       return;
  //     }
  //     if (socialLoginSDK) {
  //       socialLoginSDK.showWallet();
  //       return socialLoginSDK;
  //     }
  //     setLoading(true);
  //     const sdk = await getSocialLoginSDK();
  //     await sdk.init('0x13881');
  //     sdk.showConnectModal();

  //     sdk.showWallet();
  //     setSocialLoginSDK(sdk);
  //     setLoading(false);
  //     return socialLoginSDK;
  //   }, [address, socialLoginSDK]);

  //   const getUserInfo = useCallback(async () => {
  //     if (socialLoginSDK) {
  //       const userInfo = await socialLoginSDK.getUserInfo();
  //       console.log('userInfo', userInfo);
  //       setUserInfo(userInfo);
  //     }
  //   }, [socialLoginSDK]);

  // after metamask login -> get provider event
  useEffect(() => {
    const interval = setInterval(async () => {
      if (address) {
        clearInterval(interval);
      }
      if (socialLoginSDK?.provider && !address) {
        connect();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [address, connect, socialLoginSDK]);

  const disconnect = useCallback(async () => {
    if (!socialLoginSDK || !socialLoginSDK.web3auth) {
      console.error('Web3Modal not initialized.');
      return;
    }
    await socialLoginSDK.logout();
    setWeb3State({
      provider: null,
      web3Provider: null,
      ethersProvider: null,
      address: '',
      chainId: 800001,
    });

    setUserInfo(null);
    (window as any).getSocialLoginSDK = null;
    socialLoginSDK.hideWallet();
    setSocialLoginSDK(null);
  }, [socialLoginSDK]);

  return (
    <Flex
      w="full"
      h="full"
      justify="center"
      alignItems="center"
    >
      <CircularProgress
        isIndeterminate
        color="black"
      />
    </Flex>
  );
};

export default SocialLoginScreen;
