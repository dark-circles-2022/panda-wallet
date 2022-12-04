import OnboardingLayout from '../../layout/OnboardingLayout';
import { Flex } from '@chakra-ui/react';
import { BiWalletAlt as Wallet } from 'react-icons/bi';
import Eth from '../../assets/Icons/CurrencyEth.svg';
import BigIconButton from '../../components/common/BigIconButton';

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
      navigateTo="/loading"
    >
      <Flex
        direction={'column'}
        justify="space-around"
        align={'center'}
        gap="4"
      >
        <BigIconButton
          icon={Wallet as any}
          title="On Ramp"
          subtext="Add using Fiat"
          isFirstTime
          onClick={() => {}}
        />

        <span>or</span>

        <BigIconButton
          icon={Eth as any}
          title="Transfer"
          subtext="From existing account"
          isFirstTime={false}
          onClick={() => {}}
        />
      </Flex>
    </OnboardingLayout>
  );
};

export default AddFunds;
