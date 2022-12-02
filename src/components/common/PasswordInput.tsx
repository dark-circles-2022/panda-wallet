import { Icon, IconButton, Input, InputGroup, InputRightElement, Text, Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import { RiEyeCloseLine as Hide, RiEyeLine as Show } from 'react-icons/ri';

const PasswordInput = ({ label }: { label: string }) => {
  const [shown, setShown] = useState(false);
  const [value, setValue] = useState('');

  const handleClickShowPassword = () => {
    setShown(!shown);
  };

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
          type={shown ? 'text' : 'password'}
          border="2px solid"
          borderColor="icon.border.50"
          placeholder="Enter password"
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
            displayIcon={shown ? (Hide as any) : (Show as any)}
            ariaLabel="Toggle Show Password"
            variant="semi-solid"
            onClick={handleClickShowPassword}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default PasswordInput;
