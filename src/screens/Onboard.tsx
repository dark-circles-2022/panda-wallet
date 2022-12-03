import OnboardingLayout from '../layout/Onboarding';
import PrimaryButton from '../components/common/Button';
import { Flex, Text } from '@chakra-ui/react';
import { BiWalletAlt as Wallet } from 'react-icons/bi';
import { AiOutlineCloudDownload as Recover } from 'react-icons/ai';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';
import BigIconButton from '../components/common/BigIconButton';

const Onboard = () => {
  return (
    <OnboardingLayout
      title="Hey! 👋"
      subtext="Let’s get you all settled"
      currentStep={1}
      totalSteps={5}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
    >
      <Flex
        direction={'column'}
        justify="space-around"
        align={'center'}
      >
        <BigIconButton
          icon={Wallet as any}
          title="Create"
          subtext="Shiny new wallet"
          isFirstTime
        />
        <Text>OR</Text>
        <BigIconButton
          icon={Recover as any}
          title="Recover"
          subtext="Recover an existing wallet"
          isFirstTime={false}
        />
      </Flex>
    </OnboardingLayout>
  );
};

export default Onboard;
