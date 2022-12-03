import { useState } from 'react';
import { MdContentPaste as Paste } from 'react-icons/md';
import ButtonIcon from '../ButtonIcon/index';
import { InputRightElement, Box, Input, InputGroup, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';

const PasteInput = ({ label, setGuardian }: { label: string; setGuardian: any }) => {
  const [value, setValue] = useState('');
  const [invalid, setInvalid] = useState(false);
  const handleSubmit = async () => {
    // const provider = new ethers.providers.AlchemyProvider('goerli', 'SPd7VteBVbgcrj2NqjUd-xVJtdfcQUn6');
    // const resolver = await provider.getResolver('ankit.eth');
    // console.log(resolver);
    // console.log(provider);
  };
  const updateVal = async (e: any) => {
    if (e.target.value.slice(-4) !== '.eth') {
      setInvalid(false);
      return;
    }
    const provider = new ethers.providers.AlchemyProvider('goerli', 'SPd7VteBVbgcrj2NqjUd-xVJtdfcQUn6');
    const resolver = await provider.getResolver(e.target.value);
    console.log(e.target.value);
    console.log(resolver);
    if (!resolver) {
      setInvalid(true);
      return;
    }
    setGuardian(resolver!.address);
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
          isInvalid={invalid}
          type="text"
          border="2px solid"
          borderColor="icon.border.50"
          placeholder="Enter password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => updateVal(e)}
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
            onClick={() => handleSubmit()}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default PasteInput;
