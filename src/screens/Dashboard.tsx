import { Box } from '@chakra-ui/react';
import BottomMenu from '../components/common/BottomMenu';
import UserTopBar from '../components/common/UserTopBar';

const Dashboard = () => {
  return (
    <Box
      bgColor={'white'}
      h="full"
      w="full"
    >
      <UserTopBar />
      Dashboard
      <BottomMenu />
    </Box>
  );
};

export default Dashboard;
