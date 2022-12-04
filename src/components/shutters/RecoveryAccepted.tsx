import { Box, Flex, Text } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon';
import { MdClose as Close } from 'react-icons/md';
import { BsSlashCircle } from 'react-icons/bs';
import { SecondaryButton } from '../common/Button';
import { useNavigate } from 'react-router';

// @ts-ignore
const RecoveryAccepted = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <Box
          position={'absolute'}
          borderTopRadius={'1rem'}
          h="31rem"
          w="full"
          borderTop={'2px solid'}
          borderColor="icon.border.50"
          bgColor={'white'}
          zIndex={100}
          bottom={0}
          pb="5rem"
        >
          <Flex
            p="1rem"
            justify={'space-between'}
            align="center"
          >
            <Text>Recovery Request</Text>
            <ButtonIcon
              displayIcon={Close as any}
              variant={'semi-solid'}
              ariaLabel={'close'}
              boxSize="1.5rem"
              onClick={onClose}
            />
          </Flex>
          <Flex
            direction="column"
            p="1rem"
          >
            <Text fontSize={'0.85rem'}>
              You have accepted the access request of Harsh.eth to access their wallet, harshwallet1.eth.
            </Text>
            <Text fontSize={'0.85rem'}>Harsh says, thank you!</Text>
            <Text
              fontSize={'1.2rem'}
              fontWeight={600}
              my="1rem"
            >
              Request Details
            </Text>
            <Box mb="0.5rem">
              <Text fontSize={'0.65rem'}>Location</Text>
              <Text fontSize={'0.85rem'}>Mumbai, India</Text>
            </Box>
            <Box mb="0.5rem">
              <Text fontSize={'0.65rem'}>Time Requested</Text>
              <Text fontSize={'0.85rem'}>2 Dec, 14:40</Text>
            </Box>
            <Box mb="0.5rem">
              <Text fontSize={'0.65rem'}>Security Phrase</Text>
              <Text fontSize={'0.85rem'}>Panda Wallet is epic</Text>
            </Box>
            <Flex
              w="full"
              justifyContent="end"
              mt="1.5rem"
            >
              <SecondaryButton
                prompt="Skip"
                onClick={onClose}
                icon={BsSlashCircle}
                color="danger"
              />
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default RecoveryAccepted;
