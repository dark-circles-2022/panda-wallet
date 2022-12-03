import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { IbalancesAPI } from '../../interfaces/IbalancesAPI';

const TokenInfo = ({ token }: { token: IbalancesAPI }) => (
  <Flex
    w="full"
    p="0.5rem"
    justify="space-between"
    align={'center'}
  >
    <Flex
      align={'center'}
      justify="start"
    >
      <Image
        src={token.logo_url}
        fallbackSrc="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        w="1.5rem"
        h="1.5rem"
        borderRadius={'full'}
      />
      <Box ml="0.75rem">
        <Text
          fontSize={'0.9rem'}
          fontWeight={500}
        >
          {token.contract_name}
        </Text>
        <Text
          fontSize={'0.6rem'}
          fontWeight={400}
          color="text.main.200"
        >
          {token.balance}
          <Text
            as="span"
            fontWeight={500}
            ml="0.25rem"
          >
            {token.contract_ticker_symbol}
          </Text>
        </Text>
      </Box>
    </Flex>
    <Flex
      direction={'column'}
      align="end"
    >
      <Text
        fontSize={'0.9rem'}
        fontWeight={500}
      >
        ${token.price_usd}
      </Text>
      <Text
        fontSize={'0.65rem'}
        color={Number(token.change_24h_p) >= 0 ? 'success' : 'danger'}
      >
        {token.change_24h_p}%
      </Text>
    </Flex>
  </Flex>
);

export default TokenInfo;
