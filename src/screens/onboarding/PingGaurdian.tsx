// @ts-nocheck
import OnboardingLayout from '../../layout/OnboardingLayout';
import { Box, Flex, Text, useRadio, useRadioGroup, VStack } from '@chakra-ui/react';
import GaurdianPing from '../../components/common/Gaurdian';
import { useWeb3Context } from '../../contexts/Web3Context';
import { useEffect, useState } from 'react';

const PingGaurdian = () => {
  const { complexAccountContract } = useWeb3Context();

  const [guardians, setGuardians] = useState(['0xd52dBd85B950c8bFD4ba4e12800C66D08837609f']);

  useEffect(() => {
    complexAccountContract?.getGuardians().then((res) => {
      console.log(res);
      setGuardians(res);
    });
  }, [complexAccountContract]);

  return (
    <OnboardingLayout
      title="Request"
      subtext="Gaurdians sieze the day"
      currentStep={2}
      totalSteps={2}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
      navigateTo={'/recover/2'}
    >
      <Flex direction="column">
        <Text
          textAlign={'left'}
          fontSize={'0.8rem'}
          ml="1rem"
        >
          Ping gaurdians for recovery
        </Text>
        {guardians?.map((guardian, index) => (
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
          You need at least 50% out of guardians to accept your request.
        </Text>
      </Flex>
    </OnboardingLayout>
  );
};

export default PingGaurdian;
