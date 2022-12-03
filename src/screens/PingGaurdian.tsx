import OnboardingLayout from '../layout/OnboardingLayout';
import { Box, Flex, Text, useRadio, useRadioGroup, VStack } from '@chakra-ui/react';
import GaurdianPing from '../components/common/Gaurdian';

const PingGaurdian = () => {
  const guardians = [
    { name: 'Vitakill', address: '0x00000000690000' },
    { name: 'ScamFree', address: '0x00000000000420' },
    { name: 'Nakoshi', address: '0x00000000990000' },
  ];

  return (
    <OnboardingLayout
      title="Request"
      subtext="Gaurdians sieze the day"
      currentStep={2}
      totalSteps={2}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
    >
      <Flex direction="column">
        <Text
          textAlign={'left'}
          fontSize={'0.8rem'}
          ml="1rem"
        >
          Ping gaurdians for recovery
        </Text>
        {guardians.map((guardian, index) => (
          <GaurdianPing
            key={index}
            guardian={guardian}
          />
        ))}
        <Text
          fontSize={'0.65rem'}
          color="text.main.200"
          mx="1rem"
          mt="0.5rem"
        >
          You need at least 2 out of _ guardians to accept your request.
        </Text>
      </Flex>
    </OnboardingLayout>
  );
};

export default PingGaurdian;
