import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'

interface CustomerDataModalProps {
  isOpen: boolean
  onClose: () => void
}
export const CustomerDataModal: React.FC<CustomerDataModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Modal</ModalBody>
      </ModalContent>
    </Modal>
  )
}
