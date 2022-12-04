import { Text, Box, Flex, useClipboard } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon/index';
import { FiShare as Share } from 'react-icons/fi';
import { MdContentCopy as Copy } from 'react-icons/md';
import { ImQrcode as QrCode } from 'react-icons/im';
import { useWeb3Context } from '../../contexts/Web3Context';

const UserInfoCard = () => {
  const { contractAddress } = useWeb3Context();
  const { onCopy, value, setValue, hasCopied } = useClipboard(contractAddress);

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
          <Text
            as="span"
            fontSize={'0.65rem'}
            textOverflow="ellipsis"
            w="10ch"
          >
            {contractAddress.toString().slice(0, 6) + '...' + contractAddress.toString().slice(-6, -1)}
          </Text>
          {/* <Text fontWeight={600}>pushkr.pnd</Text> */}
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
            onClick={onCopy}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserInfoCard;
