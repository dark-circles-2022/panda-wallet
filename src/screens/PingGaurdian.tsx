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
      totalSteps={3}
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
      </Flex>
    </OnboardingLayout>
  );
};

export default PingGaurdian;
