import { Box, Flex, Text } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon';
import { MdClose as Close } from 'react-icons/md';
import { FaRegHandshake as Handshake } from 'react-icons/fa';
import Notification from '../common/Notification';

// @ts-ignore
const Notifications = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Box
          position={'absolute'}
          borderTopRadius={'1rem'}
          h="31rem"
          w="full"
          borderTop={'2px solid'}
          borderColor="icon.border.50"
          bgColor={'white'}
          zIndex={100}
          bottom={0}
          pb="5rem"
        >
          <Flex
            p="1rem"
            justify={'space-between'}
            align="center"
          >
            <Text>Notifications</Text>
            <ButtonIcon
              displayIcon={Close as any}
              variant={'semi-solid'}
              ariaLabel={'close'}
              boxSize="1.5rem"
              onClick={onClose}
            />
          </Flex>
          <Flex direction="column">
            <Notification
              icon={Handshake as any}
              title={'Recover Wallet - Harsh'}
              subtext={'Harsh wants to recover their wallet, review request'}
              cta={'review'}
              scheme={'danger'}
            />
            <Notification
              icon={Handshake as any}
              title={'Wallet Recovered - Harsh'}
              subtext={"You helped your fren. Harsh's wallet has been recovered"}
              cta={'details'}
              scheme={'success'}
            />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Notifications;
