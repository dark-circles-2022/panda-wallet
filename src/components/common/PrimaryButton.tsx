import { Button, Icon, Text } from '@chakra-ui/react';

interface Props {
  icon: any;
  prompt: string;
}

const PrimaryButton = ({ icon, prompt }: Props) => {
  return (
    <Button
      color={'white'}
      backgroundColor={'black'}
      rightIcon={<Icon as={icon} />}
      borderRadius={'full'}
      _hover={{ background: 'black' }}
    >
      {prompt}
    </Button>
  );
};

export default PrimaryButton;
