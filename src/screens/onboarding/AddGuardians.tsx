import OnboardingLayout from '../../layout/OnboardingLayout';
import { Box, Flex, Text } from '@chakra-ui/react';
import PasteInput from '../../components/common/PasteInput';

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
      navigateTo={'/create/3'}
    >
      <Flex direction={'column'}>
        <PasteInput
          placeholder="guardian.eth"
          label={'Fren 1'}
        />
        <PasteInput
          placeholder="guardian.eth"
          label={'Fren 2'}
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
          <strong>The more, the merrier!</strong> You can also register your other ethereum accounts as frens.
        </Text>
      </Box>
    </OnboardingLayout>
  );
};

export default AddGuardians;
