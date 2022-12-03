import { Flex, Icon, Box, Text } from '@chakra-ui/react';
import { BiUser as User, BiBell } from 'react-icons/bi';
import ButtonIcon from '../ButtonIcon';

// @ts-ignore
const UserTopBar = ({ notifRef, onOpen }) => {
  const user = {
    icon: User as any,
    name: 'Pushkar',
    walletName: 'pushkr.pnd',
    walletAddress: '0x001122334455',
    balance: 433.7,
  };

  return (
    <Flex
      w="full"
      p="1rem"
      justify="space-between"
      align={'center'}
      position={'absolute'}
      top={0}
      bgColor={'white'}
    >
      <Flex
        align={'center'}
        justify="start"
      >
        <Icon
          as={user.icon}
          boxSize="1.25rem"
        />
        <Box ml="0.5rem">
          <Text
            fontSize={'0.65rem'}
            color="font.main.200"
          >
            Welcome
          </Text>
          <Text
            fontSize={'0.8rem'}
            fontWeight={600}
          >
            {user.name}
          </Text>
        </Box>
      </Flex>
      <ButtonIcon
        displayIcon={BiBell as any}
        variant="semi-solid"
        ariaLabel="notifications"
        onClick={onOpen}
      />
    </Flex>
  );
};

export default UserTopBar;
