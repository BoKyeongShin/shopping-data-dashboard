import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { Customer } from '../../typedef/customer'
import { Purchase } from '../../typedef/purchase'

interface CustomerDataModalProps {
  isOpen: boolean
  customer: Customer | null
  purchases: Purchase[]
  onClose: () => void
}
export const CustomerDataModal: React.FC<CustomerDataModalProps> = ({ isOpen, customer, purchases, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>구매 내역</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {customer?.name} - {purchases?.[0]?.product}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
