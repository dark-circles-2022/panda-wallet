import { Button, Icon, Text } from '@chakra-ui/react';

interface Props {
  icon: any;
  prompt: string;
  color: string;
  bg: string;
}

const PrimaryButton = ({ icon, prompt, color, bg }: Props) => {
  return (
    <Button
      color={color}
      backgroundColor={bg}
      rightIcon={<Icon as={icon} />}
      borderRadius={'full'}
      _hover={{ background: bg }}
    >
      {prompt}
    </Button>
  );
};

export default PrimaryButton;
