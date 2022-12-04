// @ts-nocheck
import OnboardingLayout from '../../layout/OnboardingLayout';
import { Box, Flex, Input, InputGroup, Text, useRadio, VStack } from '@chakra-ui/react';
import { useWeb3Context } from '../../contexts/Web3Context';

const WalletSelect = () => {
  const { recoverWalletAddress, setRecoverWalletAddress } = useWeb3Context();

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
      <VStack>
        <Text
          textAlign={'left'}
          fontSize={'0.8rem'}
          ml="1rem"
        ></Text>

        <Box py="0.5rem">
          <Text
            as="label"
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'end'}
            color={'black'}
            fontSize={'0.8rem'}
            mb={'0.25rem'}
            ml={'0.25rem'}
          >
            Enter wallet address to recover
          </Text>

          <InputGroup>
            <Input
              border={'2px solid'}
              borderColor={'icon.border.50'}
              type={'text'}
              bg="input.bg.default"
              _focus={{
                bg: 'input.bg.focus',
                border: '2px solid',
                borderColor: 'icon.border.50',
              }}
              _hover={{
                bg: 'input.bg.focus',
              }}
              _placeholder={{ color: 'text.placeholder' }}
              value={recoverWalletAddress}
              onChange={(e) => setRecoverWalletAddress(e.target.value)}
              borderRadius={'full'}
              variant={'filled'}
              color={'black'}
              h={'3rem'}
            />
          </InputGroup>
        </Box>
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
