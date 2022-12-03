import OnboardingLayout from '../layout/OnboardingLayout';
import PrimaryButton from '../components/common/Button';
import { Box, Flex, Text, useRadio, useRadioGroup, VStack } from '@chakra-ui/react';
import { BiWalletAlt as Wallet } from 'react-icons/bi';
import { AiOutlineCloudDownload as Recover } from 'react-icons/ai';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';
import BigIconButton from '../components/common/BigIconButton';
import { redirect, useNavigate } from 'react-router';

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
      totalSteps={3}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
    >
      <VStack {...group}>
        <Text
          textAlign={'left'}
          w="full"
          fontSize={'0.8rem'}
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
                as="span"
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
        borderWidth="1px"
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
