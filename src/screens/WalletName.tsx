import OnboardingLayout from '../layout/Onboarding';
import PrimaryButton from '../components/common/Button';
import { Box, Flex, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';
import { useState } from 'react';

const WalletName = () => {
  const [walletName, setWalletName] = useState('');
  return (
    <OnboardingLayout
      title="Wallet Name"
      subtext="You're just one word away"
      currentStep={4}
      totalSteps={5}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
    >
      <Flex direction={'column'}>
        <Box
          px="0.75rem"
          py="1rem"
        >
          <Text
            fontSize={'0.8rem'}
            mb={'0.25rem'}
            ml={'0.25rem'}
          >
            Wallet Name
          </Text>
          <InputGroup>
            <Input
              type="text"
              border="2px solid"
              borderColor="icon.border.50"
              placeholder="pushkr"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              borderRadius={'full'}
              variant={'filled'}
              color={'black'}
              h={'3rem'}
            />
            <InputRightAddon
              children=".pnd"
              borderRadius={'full'}
              h={'3rem'}
            />
          </InputGroup>
        </Box>
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
          What is Wallet Name?
        </Text>
        <Text
          fontSize={'0.65rem'}
          color="blackAlpha.600"
        >
          Wallet names are like <strong>usernames</strong>. You and your frens can{' '}
          <strong>quickly find and remember</strong> the wallet address.
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

export default WalletName;
