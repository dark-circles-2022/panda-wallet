import { Flex, Text, Box } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon/index';
import { BiBell } from 'react-icons/bi';

const GaurdianPing = ({ guardian }: { guardian: { name: string; address: string } }) => (
  <Flex
    cursor="pointer"
    borderRadius="full"
    border="2px solid"
    borderColor={'icon.border.50'}
    align="center"
    justify={'space-around'}
    p="0.5rem"
    my="0.25rem"
  >
    <Box>
      <Text fontWeight={'600'}>{guardian?.name}</Text>
      <Text
        fontSize={'0.8rem'}
        fontWeight={400}
        color={'text.main.200'}
      >
        {guardian?.address}
      </Text>
    </Box>

    <ButtonIcon
      displayIcon={BiBell as any}
      variant="semi-solid"
      ariaLabel="Ping Gaurdian"
    />
  </Flex>
);

export default GaurdianPing;
