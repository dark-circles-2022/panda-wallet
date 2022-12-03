import { Grid, Text, Box, GridItem } from '@chakra-ui/react';
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
    <Box m="0 auto">
      <Text
        textAlign={'left'}
        fontSize={'0.8rem'}
        ml="1rem"
      >
        Share
      </Text>
      <Grid
        templateColumns={'repeat(4, 1fr)'}
        gap="0.5rem"
        alignItems={'center'}
        justifyContent="center"
      >
        {socials.map((social, index) => (
          <ButtonIcon
            displayIcon={social.icon}
            key={index}
            mx="auto"
            variant="semi-solid"
            ariaLabel={social.label}
            onClick={social.onClick}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Socials;
