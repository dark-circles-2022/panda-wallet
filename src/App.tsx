import * as React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import OnboardingLayout from './layout/Onboarding';
import theme from './theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      maxW="320px"
      maxH="568px"
      w="320px"
      h="568px"
      m="auto"
      borderRadius={'1.25rem'}
      overflow="hidden"
      boxShadow="0px 4px 40px rgba(0, 0, 0, 0.1)"
    >
      <OnboardingLayout
        title={'Hey! 👋'}
        subtext={"Let's get you all settled"}
        currentStep={1}
        totalSteps={2}
        isBackButtonVisible={true}
        isStepNumberVisible={true}
        canSkip={false}
      />
    </Box>
  </ChakraProvider>
);
