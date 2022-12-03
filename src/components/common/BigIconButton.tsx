import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';

const BigIconButton = ({
  icon,
  title,
  subtext,
  isFirstTime,
  onClick,
}: {
  icon: any;
  title: string;
  subtext: string;
  isFirstTime: boolean;
  onClick: () => void;
}) => {
  return (
    <Flex
      cursor={'pointer'}
      as={Button}
      position="relative"
      justify="center"
      align="end"
      w="full"
      h="6rem"
      py="0.75rem"
      px="1rem"
      my="0.5rem"
      border="2px solid"
      borderColor={'icon.border.50'}
      borderRadius="1rem"
      onClick={() => onClick()}
      bgColor={'icon.bg.ghost.default'}
      _hover={{ bgColor: 'icon.bg.ghost.hover' }}
      outline={isFirstTime ? '2px solid #3B92F380' : 'none'}
    >
      {isFirstTime && (
        <Text
          position={'absolute'}
          px="0.5rem"
          py="0.3rem"
          background={'black'}
          color={'white'}
          top="-0.75rem"
          left={'1rem'}
          fontSize={'0.6rem'}
          borderRadius={'0.5rem'}
        >
          First Time?
        </Text>
      )}
      <Icon
        as={icon}
        boxSize={'3rem'}
        mr="2rem"
        color={'icon.border.200'}
      />
      <Box
        w="50%"
        overflowWrap={'break-word'}
        textAlign="left"
      >
        <Text
          color={'icon.border.200'}
          fontSize={'1.5rem'}
          mb="0.25rem"
        >
          {title}
        </Text>
        <Text
          fontSize={'0.8rem'}
          color={'icon.border.200'}
          fontWeight={400}
          w="5ch"
        >
          {subtext}
        </Text>
      </Box>
    </Flex>
  );
};

export default BigIconButton;
