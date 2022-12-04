import { Box, Flex, Text } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon';
import { MdClose as Close } from 'react-icons/md';
import { FaRegHandshake as Handshake } from 'react-icons/fa';
import Notification from '../common/Notification';
import { useEffect, useState } from 'react';
import * as PushAPI from '@pushprotocol/restapi';

// @ts-ignore
const Notifications = ({ isOpen, onClose }) => {
  const [notifs, setNotifs] = useState([]);
  useEffect(() => {
    PushAPI.user
      .getFeeds({
        user: 'eip155:80001:0x6b531D03dEF4d25e3fc300b88c032a1f620D22B0', // user address in CAIP
        env: 'staging',
      })
      .then((notifications) => {
        console.log(notifications);
        setNotifs(notifications);
      });
  }, []);
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
            {notifs &&
              notifs.map((notif, i) => {
                // @ts-ignore
                if (notif.message) {
                  return (
                    <Notification
                      key={i}
                      icon={Handshake as any}
                      // @ts-ignore
                      title={notif.title}
                      // @ts-ignore
                      subtext={notif.message}
                      // @ts-ignore
                      cta={notif.cta}
                      scheme={'danger'}
                    />
                  );
                }
              })}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Notifications;
