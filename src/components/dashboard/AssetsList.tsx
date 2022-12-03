import { Flex, Skeleton, Text } from '@chakra-ui/react';
import { IbalancesAPI } from '../../interfaces/IbalancesAPI';
import TokenInfo from './TokenInfo';

const AssetsList = ({ balances }: { balances: IbalancesAPI[] | undefined }) => {
  return (
    <Flex
      direction="column"
      overflow={'scroll'}
      px="0.5rem"
      mt={'1rem'}
      mb="5rem"
    >
      <Text
        ml="1rem"
        fontWeight={600}
      >
        Assets
      </Text>
      {!balances?.length && (
        <>
          <Skeleton
            height="2rem"
            w="95%"
            my="1rem"
            mx="auto"
          />
          <Skeleton
            height="2rem"
            w="95%"
            my="1rem"
            mx="auto"
          />
          <Skeleton
            height="2rem"
            w="95%"
            my="1rem"
            mx="auto"
          />
        </>
      )}
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
