import { ReactComponent as BackIcon } from '../assets/Icons/ArrowBendUpLeft.svg';
import { ChakraProps, Icon, IconButton } from '@chakra-ui/react';
import { FC, HTMLAttributes } from 'react';

const BackButton: FC<HTMLAttributes<HTMLButtonElement> & ChakraProps> = ({ ...props }) => (
  <IconButton
    w={'10'}
    h={'10'}
    p={'2'}
    icon={<Icon as={BackIcon as any} />}
    border="2px solid"
    bg="bg.icon.ghost.default"
    _hover={{
      bg: 'bg.icon.ghost.hover',
    }}
    borderRadius="50%"
    aria-label="Back"
    {...props}
  />
);

export default BackButton;
