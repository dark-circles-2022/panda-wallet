import OnboardingLayout from '../layout/OnboardingLayout';
import { Box, Flex, Text, useRadio, useRadioGroup, VStack } from '@chakra-ui/react';

const WalletSelect = () => {
  const wallets = [
    { name: 'wallet1', address: '0x1010101001010' },
    { name: 'wallet2', address: '0x1010101001010' },
    { name: 'wallet3', address: '0x1010101001010' },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'wallet',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <OnboardingLayout
      title="Recover"
      subtext="We found your wallets!"
      currentStep={1}
      totalSteps={2}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
      navigateTo={'/recover/1'}
    >
      <VStack {...group}>
        <Text
          textAlign={'left'}
          fontSize={'0.8rem'}
          ml="1rem"
        >
          Select a wallet to recover
        </Text>
        {wallets.map((wallet) => {
          const radio = getRadioProps({ wallet });
          return (
            <WalletOption
              key={wallet.name}
              {...radio}
            >
              <Text fontWeight={'600'}>{wallet.name}</Text>
              <Text
                fontSize={'0.8rem'}
                fontWeight={400}
                ml="0.5rem"
                color={'text.main.200'}
              >
                {wallet.address}
              </Text>
            </WalletOption>
          );
        })}
      </VStack>
    </OnboardingLayout>
  );
};

// @ts-ignore
const WalletOption = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderRadius="full"
        border="2px solid"
        borderColor={'icon.border.50'}
        align={'end'}
        _checked={{
          borderColor: 'icon.border.200',
          outline: 'none',
        }}
        _focus={{
          boxShadow: 'outline',
          outline: 'none',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Flex>
    </Box>
  );
};

export default WalletSelect;
