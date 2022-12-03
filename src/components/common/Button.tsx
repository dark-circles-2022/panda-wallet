import { Button, ChakraProps, Icon } from '@chakra-ui/react';
import { FC, HTMLAttributes } from 'react';

interface Props {
  icon: any;
  prompt: string;
  color?: string;
  bg?: string;
}

export const PrimaryButton: FC<HTMLAttributes<HTMLButtonElement> & ChakraProps & Props> = ({
  icon,
  prompt,
  bg,
  ...props
}) => {
  return (
    <Button
      size={'sm'}
      backgroundColor={bg ? bg : 'black'}
      rightIcon={
        <Icon
          ml="0.75rem"
          as={icon}
        />
      }
      borderRadius={'full'}
      _hover={{ background: bg ? bg : 'black' }}
      fontWeight="400"
      fontSize="0.75rem"
      {...props}
    >
      {prompt}
    </Button>
  );
};

export const OutlineButton: FC<HTMLAttributes<HTMLButtonElement> & ChakraProps & Props> = ({
  icon,
  prompt,
  bg,
  ...props
}) => {
  return (
    <Button
      size={'sm'}
      backgroundColor={bg ? bg : 'input.bg.default'}
      _hover={{ background: bg ? bg : 'input.bg.focus' }}
      border="2px solid"
      borderColor="icon.border.100"
      borderRadius={'full'}
      fontWeight="400"
      fontSize="0.75rem"
      rightIcon={
        <Icon
          ml="0.75rem"
          as={icon}
        />
      }
      {...props}
    >
      {prompt}
    </Button>
  );
};

export const SecondaryButton: FC<HTMLAttributes<HTMLButtonElement> & ChakraProps & Props> = ({
  icon,
  prompt,
  bg,
  ...props
}) => {
  return (
    <Button
      size={'sm'}
      rightIcon={
        <Icon
          ml="0.75rem"
          as={icon}
        />
      }
      borderRadius={'full'}
      backgroundColor={bg ? bg : 'input.bg.default'}
      _hover={{ background: bg ? bg : 'input.bg.focus' }}
      fontWeight="400"
      fontSize="0.75rem"
      {...props}
    >
      {prompt}
    </Button>
  );
};

export default PrimaryButton;
