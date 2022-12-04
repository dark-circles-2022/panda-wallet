import { CircularProgress, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let a = setTimeout(() => {
      navigate('/create/done');
    }, 3000);
  }, [navigate]);
  return (
    <Flex
      w="full"
      h="full"
      justify="center"
      alignItems="center"
      flexDir="column"
    >
      <Image
        h="12"
        w="12"
        src="logo.png"
        alt="panda-logo"
        mb="4"
      />
      <Text textAlign="center">
        Please wait, <br />
        we are loading your wallet!
      </Text>

      <CircularProgress
        mt="8"
        isIndeterminate
        color="black"
      />
    </Flex>
  );
};

export default Loading;
