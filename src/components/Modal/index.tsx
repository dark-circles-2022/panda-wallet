import { Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
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
            color="danger"
            onClick={() => onConfirm()}
            borderColor={'danger'}
            icon={Arrow}
          />
          <OutlineButton
            onClick={() => onClose()}
            prompt="Cancel"
            borderColor="black"
            icon={BsSlashCircle}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DefaultModal;
