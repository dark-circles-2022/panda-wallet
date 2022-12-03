import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Input,
  Flex,
  Text,
} from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon';
import { IoIosClose as Close } from 'react-icons/io';
import { MutableRefObject } from 'react';

// @ts-ignore
function Notifications({ isOpen, onClose, notifRef }) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={notifRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex>
              <Text
                fontSize={'0.8rem'}
                fontWeight={600}
              >
                Notifications
              </Text>
              <ButtonIcon
                displayIcon={Close as any}
                variant={'semi-solid'}
                ariaLabel={'Close'}
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Notifications;
