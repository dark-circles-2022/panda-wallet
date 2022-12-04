import { Box, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { balancesAPI } from '../config/axiosConfig';
import { BigNumber } from 'bignumber.js';
import { formattedNum } from '../utils/numberFormatter';
import BottomMenu from '../components/dashboard/BottomMenu';
import UserTopBar from '../components/dashboard/UserTopBar';
import UserInfoCard from '../components/dashboard/UserInfoCard';
import { IbalancesAPI } from '../interfaces/IbalancesAPI';
import AssetsList from '../components/dashboard/AssetsList';
import Notifications from '../components/shutters/Notifications';
import RecoveryReview from '../components/shutters/RecoveryReview';
import RecoveryAccepted from '../components/shutters/RecoveryAccepted';

const Dashboard = () => {
  const chain_id = 80001;
  const address = '0x657D3C03e450E4815f3411Aa26713A2A90e9Ad83';

  const [balances, setBalances] = useState<IbalancesAPI[]>();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { isOpen: isRecoverOpen, onOpen: onRecoverOpen, onClose: onRecoverClose } = useDisclosure();
  const { isOpen: isAcceptedOpen, onOpen: onAcceptedOpen, onClose: onAcceptedClose } = useDisclosure();

  useEffect(() => {
    balancesAPI
      .get(`/${chain_id}/address/${address}/balances_v2/`)
      .then((res) => {
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

  return (
    <Box
      h="full"
      w="full"
      bgColor={'white'}
      overflow={'auto'}
    >
      <UserTopBar
        onOpen={onOpen}
        onToggle={onToggle}
      />
      <Notifications
        isOpen={isOpen}
        onClose={onClose}
        onRecoverOpen={onRecoverOpen}
        onAcceptedOpen={onAcceptedOpen}
      />
      <RecoveryReview
        isOpen={isRecoverOpen}
        onClose={onRecoverClose}
        onAcceptedOpen={onAcceptedOpen}
      />
      <RecoveryAccepted
        isOpen={isAcceptedOpen}
        onClose={onAcceptedClose}
      />
      <UserInfoCard />
      <AssetsList balances={balances} />
      <BottomMenu />
    </Box>
  );
};

export default Dashboard;
