import { Grid, Text, Box, Flex } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon/index';
import { FiShare as Share } from 'react-icons/fi';
import { MdContentCopy as Copy } from 'react-icons/md';
import { ImQrcode as QrCode } from 'react-icons/im';

const UserInfoCard = () => {
  return (
    <Grid
      h={'2.5rem'}
      templateRows={'repeat(3, 1fr)'}
      templateColumns={'repeat(4, 1fr))'}
      gap={4}
    >
      <Text>Balances</Text>
      <Box>
        <Text>Addess</Text>
        <Text>Name</Text>
      </Box>
      <QrCode />
      <Flex>
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
    </Grid>
  );
};

export default UserInfoCard;
