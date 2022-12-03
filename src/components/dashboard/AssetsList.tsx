import { Flex, Text } from '@chakra-ui/react';
import { IbalancesAPI } from '../../interfaces/IbalancesAPI';
import TokenInfo from './TokenInfo';

const AssetsList = ({ balances }: { balances: IbalancesAPI[] | undefined }) => {
  return (
    <Flex
      direction="column"
      overflow={'scroll'}
      px="0.5rem"
      mt={'1rem'}
    >
      <Text
        ml="1rem"
        fontWeight={600}
      >
        Assets
      </Text>
      {balances?.map((token, id) => (
        <TokenInfo
          key={id}
          token={token}
        />
      ))}
    </Flex>
  );
};

export default AssetsList;
