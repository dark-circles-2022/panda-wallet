import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface IbalancesAPI {
  balance: string;
  balance_24h: string;
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  logo_url: string;
  quote: number;
}

const TokenInfo = ({ token }: { token: IbalancesAPI }) => (
  <Flex
    w="full"
    p="1rem"
    justify="space-between"
    align={'center'}
  >
    <Flex
      align={'center'}
      justify="start"
    >
      <Image src={token.logo_url} />
      <Box ml="0.75rem">
        <Text fontWeight={600}>{token.contract_name}</Text>
        <Text
          fontWeight={400}
          color="text.main.200"
        >
          {token.balance}{' '}
          <Text
            as="span"
            fontWeight={500}
          >
            {token.contract_ticker_symbol}
          </Text>{' '}
        </Text>
      </Box>
    </Flex>
    <Flex
      direction={'column'}
      align="end"
    >
      <Text>${token.quote}</Text>
      <Text>{token.balance_24h}</Text>
    </Flex>
  </Flex>
);

export default TokenInfo;
