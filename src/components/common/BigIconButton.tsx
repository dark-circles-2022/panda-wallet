import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';

const BigIconButton = ({
  icon,
  title,
  subtext,
  isFirstTime,
}: {
  icon: any;
  title: string;
  subtext: string;
  isFirstTime: boolean;
}) => {
  return (
    <Button
      cursor={'pointer'}
      as={Flex}
      position="relative"
      justify="center"
      align="center"
      w="80%"
      h="6rem"
      py="0.75rem"
      px="1rem"
      border="2px solid"
      borderColor={'icon.border.50'}
      m="1rem auto"
    >
      {isFirstTime && (
        <Text
          position={'absolute'}
          px="0.5rem"
          py="0.3rem"
          background={'black'}
          color={'white'}
          top="-0.5rem"
          left={'1rem'}
          fontSize={'0.6rem'}
          borderRadius={'full'}
        >
          First Time?
        </Text>
      )}
      <Icon
        as={icon}
        boxSize={'3rem'}
        mr="1rem"
      />
      <Box>
        <Text fontSize={'1.5rem'}>{title}</Text>
        <Text
          fontSize={'0.8rem'}
          color="blackAlpha.700"
          fontWeight={400}
        >
          {subtext}
        </Text>
      </Box>
    </Button>
  );
};

export default BigIconButton;
