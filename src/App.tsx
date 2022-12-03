import * as React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import OnboardingLayout from './layout/Onboarding';
import theme from './theme';
import CreateWallet from './screens/CreateWallet';
import AddGuardians from './screens/AddGuardians';
import WalletName from './screens/WalletName';
import BigIconButton from './components/common/BigIconButton';
import { SiPastebin } from 'react-icons/si';
import AddFunds from './screens/AddFunds';
import Onboard from './screens/Onboard';
import BottomMenu from './components/common/BottomMenu';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      maxW="20rem"
      maxH="35.5rem"
      w="20rem"
      h="35.5rem"
      m="auto"
      borderRadius={'1.25rem'}
      overflow="hidden"
      boxShadow="0px 4px 40px rgba(0, 0, 0, 0.1)"
      position={'relative'}
    >
      {/* <OnboardingLayout
        title={'Hey! 👋'}
        subtext={"Let's get you all settled"}
        currentStep={1}
        totalSteps={5}
        isBackButtonVisible={true}
        isStepNumberVisible={true}
        canSkip={false}
      /> */}
      {/* <CreateWallet /> */}
      {/* <AddGuardians /> */}
      {/* <WalletName /> */}
      {/* <AddFunds /> */}
      {/* <Onboard /> */}
      <BottomMenu />
    </Box>
  </ChakraProvider>
);
