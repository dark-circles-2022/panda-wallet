import { Text, Box, Flex } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon/index';
import { FiShare as Share } from 'react-icons/fi';
import { MdContentCopy as Copy } from 'react-icons/md';
import { ImQrcode as QrCode } from 'react-icons/im';

const UserInfoCard = () => {
  return (
    <Flex
      h={'10rem'}
      p="1rem"
      mx="0.5rem"
      borderRadius={'lg'}
      border="2px solid"
      borderColor={'icon.border.50'}
      mt="4.5rem"
      bgColor={'black'}
      color="white"
    >
      <Flex
        direction={'column'}
        w="50%"
        justify="space-between"
      >
        <Text
          fontSize="2rem"
          fontWeight={700}
        >
          $43.37
        </Text>
        <Box>
          <Text fontSize={'0.65rem'}>0x01012012e140asdfaqf1</Text>
          <Text fontWeight={600}>pushkr.pnd</Text>
        </Box>
      </Flex>

      <Flex
        direction="column"
        w="50%"
        justify={'space-between'}
        align="end"
      >
        <Flex
          justify="center"
          align="cetner"
          p="1rem"
          borderRadius={'1rem'}
          bgColor={'white'}
          color="black"
        >
          <QrCode size={'2rem'} />
        </Flex>
        <Flex
          w="full"
          justify={'end'}
          align="center"
          gap="1rem"
        >
          <ButtonIcon
            displayIcon={Share as any}
            variant="semi-solid"
            ariaLabel="share"
          />
          <ButtonIcon
            displayIcon={Copy as any}
            variant="semi-solid"
            ariaLabel="copy"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserInfoCard;
