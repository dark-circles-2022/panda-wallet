import { BiHomeSmile as Home, BiScan as Scan } from 'react-icons/bi';
import { FaRegPaperPlane as Telegram } from 'react-icons/fa';
import { AiOutlineCompass as Explore } from 'react-icons/ai';
import { RiSettingsLine as Settings } from 'react-icons/ri';
import { Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react';

const BottomMenu = () => {
  const menuItems = [
    { icon: Home as any, name: 'Home', highlight: false },
    { icon: Telegram as any, name: 'Telegram', highlight: false },
    { icon: Scan as any, name: 'Scanner', highlight: true },
    { icon: Explore as any, name: 'Explore', highlight: false },
    { icon: Settings as any, name: 'Settings', highlight: false },
  ];
  return (
    <Grid
      bg="white"
      position={'absolute'}
      bottom={0}
      templateColumns={'repeat(5, 1fr)'}
      gap={4}
      px={'1rem'}
      py={'0.75rem'}
      w="full"
      zIndex={9999}
      borderTop="2px solid"
      borderColor={'icon.border.50'}
    >
      {menuItems.map((item, index) => (
        <GridItem
          key={index}
          as={Flex}
          direction="column"
          alignItems={'center'}
          group={item.name}
          bg={item.highlight ? 'black' : 'white'}
          borderRadius="full"
          color={item.highlight ? 'white' : 'black'}
          p={'0.65rem'}
        >
          <Icon
            as={item.icon}
            boxSize={'1.2rem'}
          />
          {/* <Text
            opacity={0}
            fontSize={'0.65rem'}
            _groupHover={{ opacity: 1 }}
          >
            {item.name}
          </Text> */}
        </GridItem>
      ))}
    </Grid>
  );
};

export default BottomMenu;
