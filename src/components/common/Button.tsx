import { Button, ChakraProps, Icon } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  icon: any;
  prompt: string;
  color: string;
  bg: string;
}

const PrimaryButton: FC<ChakraProps & Props> = ({ icon, prompt, color, bg, ...props }) => {
  return (
    <Button
      size={'sm'}
      color={color}
      backgroundColor={bg}
      rightIcon={<Icon as={icon} />}
      borderRadius={'full'}
      _hover={{ background: bg }}
      fontWeight="400"
      {...props}
    >
      {prompt}
    </Button>
  );
};

export default PrimaryButton;
