import { Flex, Text, Box } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon/index';
import { BiBell } from 'react-icons/bi';
import * as PushAPI from '@pushprotocol/restapi';
import * as ethers from 'ethers';

const GaurdianPing = ({ guardian }: { guardian: string }) => {
  const sendNotification = async () => {
    const PK = '17d938bf4c27dd945729a2bcf9049efa70e3c8adec80e6d376bb1e03f5aa137b'; // channel private key
    const Pkey = `0x${PK}`;
    const signer = new ethers.Wallet(Pkey);
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: `[SDK-TEST] notification TITLE:`,
          body: `[sdk-test] notification BODY`,
        },
        payload: {
          title: `Recover Wallet`,
          body: `${'0x65...d83'} wants to recover their wallet, review request`,
          cta: 'review',
          img: '',
        },
        recipients: 'eip155:80001:0x6b531D03dEF4d25e3fc300b88c032a1f620D22B0', // recipient address
        channel: 'eip155:80001:0x657D3C03e450E4815f3411Aa26713A2A90e9Ad83', // your channel address
        env: 'staging',
      });

      // apiResponse?.status === 204, if sent successfully!
      console.log('API repsonse: ', apiResponse);
    } catch (err) {
      console.error('Error: ', err);
    }
  };
  return (
    <Flex
      cursor="pointer"
      borderRadius="full"
      border="2px solid"
      borderColor={'icon.border.50'}
      align="center"
      justify={'space-between'}
      p="0.5rem"
      my="0.25rem"
    >
      <Box>
        <Text
          ml="1rem"
          fontSize={'1rem'}
          fontWeight={400}
          color={'text.main.200'}
        >
          {guardian.toString().slice(0, 6)}...{guardian.toString().slice(-6, -1)}
        </Text>
      </Box>

      <ButtonIcon
        displayIcon={BiBell as any}
        variant="semi-solid"
        ariaLabel="Ping Gaurdian"
        onClick={() => sendNotification()}
      />
    </Flex>
  );
};

export default GaurdianPing;
