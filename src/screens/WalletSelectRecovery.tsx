import OnboardingLayout from '../layout/Onboarding';
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
        {wallets.map((wallet) => {
          const radio = getRadioProps({ wallet });
          return (
            <WalletOption
              key={wallet.name}
              {...radio}
            >
              {`${wallet.name}/${wallet.address}`}
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
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          borderColor: 'icon.border.100',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default WalletSelect;
