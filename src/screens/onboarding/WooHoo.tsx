import Socials from '../../components/common/Socials';
import UserInfo from '../../components/common/UserInfo';
import OnboardingLayout from '../../layout/OnboardingLayout';
import { BsCheck as Check } from 'react-icons/bs';
import { Flex } from '@chakra-ui/react';
import { useWeb3Context } from '../../contexts/Web3Context';

const WooHoo = () => {
  const { contractAddress } = useWeb3Context();
  return (
    <OnboardingLayout
      title="Whoo Hoo!!"
      subtext="You have a brand new wallet!"
      currentStep={5}
      totalSteps={5}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
      nextPrompt={'finish'}
      nextIcon={Check as any}
      navigateTo={'/dashboard'}
    >
      <Flex
        gap="4"
        flexDir="column"
      >
        <UserInfo
          label={'Wallet Address'}
          value={contractAddress}
        />
        {/* <UserInfo
          label={'Wallet Name'}
          value={'pushkr.pnd'}
        /> */}
        <Socials />
      </Flex>
    </OnboardingLayout>
  );
};

export default WooHoo;
