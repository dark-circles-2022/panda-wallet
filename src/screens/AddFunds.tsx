import OnboardingLayout from '../layout/Onboarding';
import PrimaryButton from '../components/common/Button';
import { Box, Flex, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react';
import { BiWalletAlt as Wallet } from 'react-icons/bi';
import { BsCheck as Check } from 'react-icons/bs';
import Eth from '../assets/Icons/CurrencyEth.svg';
import BigIconButton from '../components/common/BigIconButton';

const AddFunds = () => {
  return (
    <OnboardingLayout
      title="Add Funds"
      subtext="Add funds to your wallet"
      currentStep={5}
      totalSteps={5}
      isBackButtonVisible
      isStepNumberVisible
      canSkip
    >
      <Flex
        direction={'column'}
        justify="space-around"
        align={'center'}
      >
        <BigIconButton
          icon={Wallet as any}
          title="On Ramp"
          subtext="Add using Fiat"
          isFirstTime
        />
        <Text>OR</Text>
        <BigIconButton
          icon={Eth as any}
          title="Transfer"
          subtext="From existing account"
          isFirstTime={false}
        />
      </Flex>
      <Flex
        position={'absolute'}
        bottom={'1.5rem'}
        right={'1.5rem'}
      >
        <PrimaryButton
          icon={Check as any}
          prompt={'finish'}
          color={'white'}
          bg={'black'}
        />
      </Flex>
    </OnboardingLayout>
  );
};

export default AddFunds;
