import OnboardingLayout from '../../layout/OnboardingLayout';
import { Flex, Text } from '@chakra-ui/react';
import { BiWalletAlt as Wallet } from 'react-icons/bi';
import { AiOutlineCloudDownload as Recover } from 'react-icons/ai';
import BigIconButton from '../../components/common/BigIconButton';
import { useNavigate } from 'react-router';

const Onboard = () => {
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      title="Hey! 👋"
      subtext="Let's get you all settled"
      currentStep={1}
      totalSteps={5}
      isBackButtonVisible={false}
      isStepNumberVisible
      canSkip={false}
      navigateTo={''}
    >
      <Flex
        direction={'column'}
        justify="space-around"
        align={'center'}
        gap="4"
      >
        <BigIconButton
          icon={Wallet as any}
          title="Create"
          subtext="Shiny new wallet"
          isFirstTime
          onClick={() => {
            navigate('/create');
          }}
        />

        <Text>OR</Text>

        <BigIconButton
          icon={Recover as any}
          title="Recover"
          subtext="Recover an existing wallet"
          isFirstTime={false}
          onClick={() => navigate('/recover')}
        />
      </Flex>
    </OnboardingLayout>
  );
};

export default Onboard;
