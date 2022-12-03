import { Box, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { MdContentCopy as Copy } from 'react-icons/md';
import ButtonIcon from '../ButtonIcon/index';

const UserInfo = ({ label, value }: { label: string; value: string }) => (
  <Box my="0.5rem">
    <Text
      as="label"
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'end'}
      color={'black'}
      fontSize={'0.8rem'}
      mb={'0.25rem'}
      ml={'0.25rem'}
    >
      {label}
    </Text>

    <InputGroup>
      <Input
        border="2px solid"
        borderColor="icon.border.50"
        bg="input.bg.default"
        type="text"
        _focus={{
          bg: 'input.bg.focus',
          border: '2px solid',
          borderColor: 'icon.border.50',
        }}
        _hover={{
          bg: 'input.bg.focus',
        }}
        _placeholder={{ color: 'text.placeholder' }}
        borderRadius={'full'}
        variant={'filled'}
        color={'black'}
        h={'3rem'}
        textOverflow="ellipsis"
        value={value}
        isDisabled
      />
      <InputRightElement
        width="3rem"
        h={'3rem'}
      >
        <ButtonIcon
          displayIcon={Copy as any}
          ariaLabel="Paste copied"
          variant="semi-solid"
        />
      </InputRightElement>
    </InputGroup>
  </Box>
);

export default UserInfo;
