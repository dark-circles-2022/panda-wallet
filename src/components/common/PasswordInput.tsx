import { Icon, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { ReactComponent as Show } from '../../assets/Icons/Eye.svg';
import { ReactComponent as Hide } from '../../assets/Icons/EyeClosed.svg';

const PasswordInput = () => {
  const [shown, setShown] = useState(false);
  const [value, setValue] = useState('');

  const handleClickShowPassword = () => {
    setShown(!shown);
  };

  return (
    <InputGroup size="md">
      <Input
        type={shown ? 'text' : 'password'}
        placeholder="Enter password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        borderRadius={'full'}
        variant={'filled'}
        colorScheme={'blackAlpha'}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          borderRadius={'full'}
          onClick={handleClickShowPassword}
          icon={shown ? <Hide /> : <Show />}
          aria-label={'create password'}
          size={'sm'}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
