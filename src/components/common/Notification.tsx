import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { FaRegHandshake as Handshake } from 'react-icons/fa';

const Notification = ({
  key,
  icon = Handshake as any,
  title,
  subtext,
  date,
  url,
  cost,
  cta,
  scheme,
  onRecoverOpen,
  onClose,
}: {
  key: any;
  icon?: any;
  title: string;
  subtext: string;
  date?: string;
  url?: string;
  cost?: string;
  cta?: string;
  scheme?: string;
  onRecoverOpen?: () => {};
  onClose?: () => {};
}) => {
  return (
    <Flex
      w="full"
      px="1rem"
      py="0.6rem"
      align="center"
      justify={'space-between'}
    >
      <Flex
        w="70%"
        align="center"
      >
        <Icon
          as={icon}
          boxSize="1.5rem"
        />
        <Box ml="0.5rem">
          <Text
            fontWeight={600}
            mb="-0.25rem"
            fontSize={'0.9rem'}
          >
            {title}
          </Text>
          <Text fontSize={'0.65rem'}>{subtext}</Text>
          <Flex>
            {date && <Text fontSize={'0.5rem'}>{date}</Text>}
            {url && (
              <Text
                fontSize={'0.5rem'}
                ml="1rem"
              >
                {url}
              </Text>
            )}
          </Flex>
        </Box>
      </Flex>
      {cta && (
        <Button
          variant={'outline'}
          borderRadius={'full'}
          size="xs"
          colorScheme={scheme === 'danger' ? 'red' : 'green'}
          // @ts-ignore
          onClick={() => {
            // @ts-ignore
            onClose();
            // @ts-ignore
            onRecoverOpen();
          }}
        >
          {cta}
        </Button>
      )}
    </Flex>
  );
};

export default Notification;
