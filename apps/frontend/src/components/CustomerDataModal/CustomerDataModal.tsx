import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { Suspense } from 'react'
import { Customer } from '../../typedef/customer'
import { EmptyFallback } from '../common/EmptyFallback'
import { PurchasesContent } from './PurchasesContent'
import { PurchasesSkeleton } from './PurchasesSkeleton'

interface CustomerDataModalProps {
  isOpen: boolean
  customer: Customer | null
  onClose: () => void
}
export const CustomerDataModal: React.FC<CustomerDataModalProps> = ({ isOpen, customer, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="90vw" h="80vh">
        <ModalHeader>{customer?.name}님의 구매 내역</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Suspense fallback={<PurchasesSkeleton />}>
            {customer && <PurchasesContent customer={customer} />}
            {!customer && <EmptyFallback title="No Result" />}
          </Suspense>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
