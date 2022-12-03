import { Box, Flex, Text } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon';
import { MdClose as Close } from 'react-icons/md';
import { BiCloset } from 'react-icons/bi';
import Notification from '../common/Notification';

// @ts-ignore
const Notifications = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Box
          position={'absolute'}
          borderTopRadius={'1rem'}
          h="calc(100vh - 5rem)"
          w="full"
          borderTop={'2px solid'}
          borderColor="icon.border.50"
          bgColor={'white'}
          zIndex={10}
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
              icon={BiCloset as any}
              title={'test test test'}
              subtext={'loremipsum doloer monez'}
              cta={'revieve'}
            />
            <Notification
              icon={BiCloset as any}
              title={'test test test'}
              subtext={'loremipsum doloer monez'}
              cta={'revieve'}
            />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Notifications;
