import { Grid, Text, Box, Flex, GridItem } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon/index';
import { FiShare as Share } from 'react-icons/fi';
import { MdContentCopy as Copy } from 'react-icons/md';
import { ImQrcode as QrCode } from 'react-icons/im';

const UserInfoCard = () => {
  return (
    <Grid
      h={'10rem'}
      templateRows={'repeat(3, 1fr)'}
      templateColumns={'repeat(4, 1fr))'}
      gap={4}
      p="1rem"
      mx="0.5rem"
      borderRadius={'lg'}
      border="2px solid"
      borderColor={'icon.border.50'}
      mt="5rem"
    >
      <GridItem
        rowSpan={2}
        colSpan={2}
      >
        <Text>Balances</Text>
      </GridItem>
      <Box
        as={GridItem}
        rowSpan={1}
        colSpan={2}
      >
        <Text>Addess</Text>
        <Text>Name</Text>
      </Box>
      <GridItem
        rowSpan={2}
        colSpan={1}
      >
        <QrCode />
      </GridItem>

      <Flex
        as={GridItem}
        rowSpan={1}
        colSpan={1}
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
    </Grid>
  );
};

export default UserInfoCard;
