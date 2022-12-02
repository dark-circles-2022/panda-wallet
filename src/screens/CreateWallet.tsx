import OnboardingLayout from '../layout/Onboarding';
import PasswordInput from '../components/common/PasswordInput';
import PrimaryButton from '../components/common/Button';
import { Flex, Text, VStack } from '@chakra-ui/react';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';

const CreateWallet = () => {
  return (
    <OnboardingLayout
      title="Create"
      subtext="A new story awaits!"
      heading="Wallet Password"
      currentStep={2}
      totalSteps={5}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
    >
      <Flex direction={'column'}>
        <PasswordInput label={'Add Password'} />
        <PasswordInput label={'Confirm Password'} />
      </Flex>

      <VStack
        color="black"
        px="1.25rem"
        mt="1rem"
        align={'start'}
      >
        <Text fontSize={'0.8rem'}>What is Password?</Text>
        <Text fontSize={'0.65rem'}>Passwords secure your wallet, they are unique for each device.</Text>
      </VStack>
      <Flex
        position={'absolute'}
        bottom={'1.5rem'}
        right={'1.5rem'}
      >
        <PrimaryButton
          icon={Arrow as any}
          prompt={'next'}
          color={'white'}
          bg={'black'}
        />
      </Flex>
    </OnboardingLayout>
  );
};

export default CreateWallet;
