import { CircularProgress, Flex } from '@chakra-ui/react';

const SocialLogin = () => {
  return (
    <Flex
      w="full"
      h="full"
      justify="center"
      alignItems="center"
    >
      <CircularProgress
        isIndeterminate
        color="black"
      />
    </Flex>
  );
};

export default SocialLogin;
