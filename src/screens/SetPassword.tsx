import OnboardingLayout from '../layout/Onboarding';
import PasswordInput from '../components/common/PasswordInput';
import PrimaryButton from '../components/common/Button';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';

const SetPassword = () => {
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
      <Box
        color="black"
        px="1.5rem"
        mt="1.5rem"
      >
        <Text
          fontSize={'0.8rem'}
          color="blackAlpha.700"
        >
          What is Password?
        </Text>
        <Text
          fontSize={'0.65rem'}
          color="blackAlpha.600"
        >
          Passwords <strong>secure</strong> your wallet, they are <strong>unique for each device</strong>.
        </Text>
      </Box>
      {/* To be link to help */}
      <Text
        textDecor={'underline'}
        fontSize={'0.7rem'}
        color="blackAlpha.600"
        position={'absolute'}
        bottom={'3.75rem'}
        right={'2rem'}
        cursor={'pointer'}
      >
        need help?
      </Text>
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

export default SetPassword;
