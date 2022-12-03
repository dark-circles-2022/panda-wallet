import OnboardingLayout from '../../layout/OnboardingLayout';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import PrimaryButton, { SecondaryButton } from '../../components/common/Button';

const ConfirmSocial = () => {
  const navigate = useNavigate();
  return (
    <OnboardingLayout
      title="Social Login"
      subtext="Your convenience matters!"
      heading="Use Social Login?"
      currentStep={2}
      totalSteps={5}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
    >
      <Flex flexDir="column">
        <Box
          color="black"
          px=".75rem"
          mt="1.5rem"
          mb="8"
        >
          <Text
            fontSize={'0.75rem'}
            color="blackAlpha.700"
            mb=".75rem"
          >
            What is Social Login?
          </Text>
          <Text
            fontSize={'0.75rem'}
            color="blackAlpha.600"
          >
            Using social login, you would be able to login to your wallet using your social media accounts. This would
            make it easier for you to login to your wallet on new devices.
          </Text>
        </Box>

        <Flex
          direction={'column'}
          gap="4"
          mt="auto"
        >
          <PrimaryButton
            onClick={() => {
              navigate('social-login');
            }}
            py={5}
            border="2px solid"
            borderRadius="full"
            borderColor={'icon.border.50'}
            color="white"
            icon={null}
            prompt={'Use Social Login'}
          />
          <SecondaryButton
            onClick={() => {
              navigate('/create/1');
            }}
            py={5}
            border="2px solid"
            borderRadius="full"
            borderColor={'icon.border.50'}
            icon={null}
            prompt={'Continue without Social Login'}
          />
        </Flex>
      </Flex>
    </OnboardingLayout>
  );
};

export default ConfirmSocial;
