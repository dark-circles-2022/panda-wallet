import { useState } from 'react';
import { MdContentPaste as Paste } from 'react-icons/md';
import ButtonIcon from '../ButtonIcon/index';
import { InputRightElement, Box, Input, InputGroup, Text } from '@chakra-ui/react';

const PasteInput = ({ label }: { label: string }) => {
  const [value, setValue] = useState('');
  return (
    <Box
      px="0.75rem"
      py="0.5rem"
    >
      <Text
        color={'black'}
        fontSize={'0.8rem'}
        mb={'0.25rem'}
        ml={'0.25rem'}
      >
        {label}
      </Text>
      <InputGroup>
        <Input
          border={'2px solid'}
          borderColor={'icon.border.50'}
          type={'text'}
          bg="input.bg.default"
          _focus={{
            bg: 'input.bg.focus',
            border: '2px solid',
            borderColor: 'icon.border.50',
          }}
          _hover={{
            bg: 'input.bg.focus',
          }}
          placeholder="Vitalik Buterin"
          _placeholder={{ color: 'text.placeholder' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          borderRadius={'full'}
          variant={'filled'}
          color={'black'}
          h={'3rem'}
        />
        <InputRightElement
          width="3rem"
          h={'3rem'}
        >
          <ButtonIcon
            displayIcon={Paste as any}
            ariaLabel="Toggle Show Password"
            variant="semi-solid"
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default PasteInput;
