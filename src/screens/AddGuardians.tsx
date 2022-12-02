import OnboardingLayout from '../layout/Onboarding';
import PrimaryButton from '../components/common/Button';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';
import PasteInput from '../components/common/PasteInput';

const AddGuardians = () => {
  return (
    <OnboardingLayout
      title="Guardians"
      subtext="Your support system"
      heading="Recovery Frens"
      currentStep={3}
      totalSteps={5}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
    >
      <Flex direction={'column'}>
        <PasteInput label={'Fren 1'} />
        <PasteInput label={'Fren 2'} />
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
          How many frens?
        </Text>
        <Text
          fontSize={'0.65rem'}
          color="blackAlpha.700"
        >
          The more, the merrier!
        </Text>
        <Text
          fontSize={'0.65rem'}
          color="blackAlpha.600"
        >
          You can also register your other ethereum accounts as frens.
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

export default AddGuardians;
