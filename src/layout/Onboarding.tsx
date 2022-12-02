import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const OnboardingLayout = ({
  title,
  subtext,
  currentStep,
  totalSteps,
  isBackButtonVisible = true,
  isStepNumberVisible = true,
  canSkip = false,
  children,
}: {
  title: string;
  subtext: string;
  currentStep: number;
  totalSteps: number;
  isBackButtonVisible: boolean;
  isStepNumberVisible: boolean;
  canSkip?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <Box
      as={'section'}
      bgColor={'bg.onboarding'}
      h="100vh"
      w="100vw"
      color="white"
      p="8"
    >
      <Text
        fontSize={'2rem'}
        fontWeight={500}
        as="h1"
        mb="0.75rem"
      >
        {title}
      </Text>
      <Text
        fontSize={'1rem'}
        fontWeight={400}
        as="h2"
        color="whiteAlpha.700"
      >
        {subtext}
      </Text>

      <Box
        w="full"
        borderTopRadius={'lg'}
        bgColor={'white'}
        h="full"
      >
        {children}
      </Box>
    </Box>
  );
};

export default OnboardingLayout;
