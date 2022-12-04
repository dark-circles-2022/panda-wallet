import { Text, Box, Flex } from '@chakra-ui/react';
import { FiTwitter as Twitter, FiShare2 as Share } from 'react-icons/fi';
import { HiQrcode as QrCode } from 'react-icons/hi';
import { MdContentCopy as Copy } from 'react-icons/md';
import ButtonIcon from '../ButtonIcon';

const Socials = () => {
  const socials = [
    { icon: Share as any, label: 'Share', onClick: () => null },
    { icon: Twitter as any, label: 'Twitter', onClick: () => null },
    { icon: QrCode as any, label: 'QrCode', onClick: () => null },
    { icon: Copy as any, label: 'Copy', onClick: () => null },
  ];
  return (
    <Box
      m="0 auto"
      w="full"
    >
      <Text
        textAlign={'left'}
        fontSize={'0.8rem'}
      >
        Share
      </Text>
      <Flex
        gap="0.5rem"
        alignItems={'center'}
        justifyContent="space-between"
      >
        {socials.map((social, index) => (
          <ButtonIcon
            displayIcon={social.icon}
            key={index}
            variant="semi-solid"
            ariaLabel={social.label}
            onClick={social.onClick}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Socials;
