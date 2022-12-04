import { Box, Flex, Text } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon';
import { MdClose as Close } from 'react-icons/md';
import { BsSlashCircle } from 'react-icons/bs';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';
import PrimaryButton, { SecondaryButton } from '../common/Button';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useWeb3Context } from '../../contexts/Web3Context';

// @ts-ignore
const RecoveryReview = ({ isOpen, onClose, onAcceptedOpen }) => {
  const { eoaProvider, setEoaProvider, contractAddress, complexAccountContract } = useWeb3Context();

  useEffect(() => {});
  const calculateSignature = (scwAddress: string, newSigner: string, nonce: string) => {
    const val = ethers.utils.solidityKeccak256(
      ['bytes'],
      [ethers.utils.solidityPack(['address', 'address', 'uint96'], [scwAddress, newSigner, nonce])]
    );
    // @ts-ignore
    const signer = eoaProvider.getSigner();
    return signer.signMessage(val);
  };

  const handleTransaction = async (scwAddress: string, newSigner: string, nonce: string) => {
    await complexAccountContract!.recoverWallet(newSigner, calculateSignature(scwAddress, newSigner, nonce));
  };
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
              Harsh.eth is requesting access to their wallet - harshwallet1.eth (0x31bac...34). Kindly check the
              details, contact Harsh and accept if the request is legitimate.
            </Text>
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
              justifyContent="space-between"
              mt="1.5rem"
            >
              <SecondaryButton
                prompt="Skip"
                onClick={onClose}
                icon={BsSlashCircle}
                color="danger"
              />
              <PrimaryButton
                justifySelf="end"
                ml="auto"
                icon={Arrow as any}
                prompt={'accept'}
                color={'white'}
                onClick={onAcceptedOpen}
              />
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default RecoveryReview;
