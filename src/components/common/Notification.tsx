import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { PrimaryButton } from './Button';

const Notification = ({
  icon,
  title,
  subtext,
  date,
  url,
  cost,
  cta,
}: {
  icon: any;
  title: string;
  subtext: string;
  date?: Date;
  url?: string;
  cost?: string;
  cta?: string;
}) => {
  return (
    <Flex
      w="full"
      px="1rem"
      py="0.6rem"
      align="center"
    >
      <Flex
        w="75%"
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
        </Box>
      </Flex>
      <Button
        variant={'outline'}
        borderRadius={'full'}
        size="xs"
        colorScheme="black"
      >
        {cta}
      </Button>
    </Flex>
  );
};

export default Notification;
