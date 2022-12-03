import OnboardingLayout from '../layout/OnboardingLayout';
import PasswordInput from '../components/common/PasswordInput';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordError =
    confirmPassword && password && password !== confirmPassword
      ? 'Passwords do not match'
      : confirmPassword.length < 8 && confirmPassword
      ? 'Must be at least 8 characters'
      : '';

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
        <PasswordInput
          label={'Add Password'}
          value={password}
          setValue={setPassword}
        />
        <PasswordInput
          label={'Confirm Password'}
          value={confirmPassword}
          setValue={setConfirmPassword}
          error={passwordError}
        />
      </Flex>
      <Box
        color="black"
        px=".75rem"
        mt="1.5rem"
      >
        <Text
          fontSize={'0.75rem'}
          color="blackAlpha.700"
          mb=".75rem"
        >
          What is Password?
        </Text>
        <Text
          fontSize={'0.75rem'}
          color="blackAlpha.600"
        >
          Passwords <strong>secure</strong> your wallet, they are <strong>unique for each device</strong> and{' '}
          <strong>not transferrable</strong>.
        </Text>
      </Box>
    </OnboardingLayout>
  );
};

export default SetPassword;
