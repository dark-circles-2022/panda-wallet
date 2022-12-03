import { Box, Flex, Text } from '@chakra-ui/react';
import { MdContentCopy as Copy } from 'react-icons/md';
import ButtonIcon from '../ButtonIcon/index';

const UserInfo = ({ label, value }: { label: string; value: string }) => (
  <Box my="0.5rem">
    <Text
      fontSize={'0.8rem'}
      ml="1rem"
    >
      {label}
    </Text>
    <Flex
      borderRadius="full"
      border="2px solid"
      borderColor={'icon.border.50'}
      align="center"
      justify={'space-between'}
      py="0.25rem"
      px="0.75rem"
    >
      <Text ml="0.5rem">{value}</Text>
      <Flex>
        <ButtonIcon
          displayIcon={Copy as any}
          variant="semi-solid"
          ariaLabel="Copy"
        />
      </Flex>
    </Flex>
  </Box>
);

export default UserInfo;
