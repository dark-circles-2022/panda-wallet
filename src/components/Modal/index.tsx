import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { BsSlashCircle } from 'react-icons/bs';
import { OutlineButton, SecondaryButton } from '../common/Button';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';

const DefaultModal = ({
  title,
  content,
  isOpen,
  onClose,
  onConfirm,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        w="30ch"
        borderRadius="3xl"
      >
        <ModalHeader fontSize="md">{title}</ModalHeader>
        <ModalBody fontSize="sm">{content}</ModalBody>

        <ModalFooter
          as={Flex}
          justifyContent="space-between"
        >
          <SecondaryButton
            prompt="Confirm"
            onClick={() => onClose()}
            color="danger"
            borderColor={'danger'}
            icon={Arrow}
          />
          <OutlineButton
            prompt="Cancel"
            onClick={() => onConfirm()}
            borderColor="black"
            icon={BsSlashCircle}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DefaultModal;
