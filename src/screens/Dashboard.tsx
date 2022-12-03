import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { balancesAPI } from '../config/axiosConfig';
import { BigNumber } from 'bignumber.js';
import { formattedNum } from '../utils/numberFormatter';

interface IbalancesAPI {
  balance: string;
  balance_24h: string;
  // contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  logo_url: string;
  price_usd: string;
  change_24h_p: string;
  // quote: number;
}

const Dashboard = () => {
  const chain_id = 80001;
  const address = '0x657D3C03e450E4815f3411Aa26713A2A90e9Ad83';

  const [balances, setBalances] = useState<IbalancesAPI[]>();

  useEffect(() => {
    balancesAPI
      .get(`/${chain_id}/address/${address}/balances_v2/`)
      .then((res) => {
        // console.log(res.data.data.items);
        const balanceData = res.data.data.items.map((asset: any) => {
          const multiplier = new BigNumber(10 ** asset.contract_decimals);
          const balance = formattedNum(new BigNumber(asset.balance).div(multiplier).toString());
          const balance_24h = formattedNum(new BigNumber(asset.balance_24h).div(multiplier).toString());
          const quote = new BigNumber(asset.quote);
          const quote_24h = new BigNumber(asset.quote_24h);
          const hundred = new BigNumber(100);
          const change_24h_p = formattedNum(quote.minus(quote_24h).div(quote_24h).multipliedBy(hundred).toString());
          const price_usd = formattedNum(new BigNumber(asset.balance).div(multiplier).multipliedBy(quote).toString());
          return {
            balance,
            balance_24h,
            contract_name: asset.contract_name,
            contract_ticker_symbol: asset.contract_ticker_symbol,
            logo_url: asset.logo_url,
            price_usd,
            change_24h_p,
          };
        });
        console.log(balanceData);

        setBalances(balanceData);
      })
      .catch((err) => console.log(err));
  }, []);
  return <Text>{JSON.stringify(balances)}</Text>;
};

export default Dashboard;
