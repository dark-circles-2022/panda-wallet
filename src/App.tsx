import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import OnboardingLayout from './layout/Onboarding';
import theme from './theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <OnboardingLayout
      title={'Hey!'}
      subtext={"Let's get you all settled"}
      currentStep={1}
      totalSteps={2}
      isBackButtonVisible={true}
      isStepNumberVisible={true}
      canSkip={false}
    />
  </ChakraProvider>
);
