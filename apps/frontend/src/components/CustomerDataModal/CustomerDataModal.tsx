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
/**
 * @description 고객 데이터를 기반으로 구매 내역을 모달 형태로 표시하는 컴포넌트입니다.
 * `Suspense`를 이용해 로딩 중에는 `PurchasesSkeleton`을 표시합니다.
 * 고객 데이터가 없을 경우 `EmptyFallback`을 표시합니다.
 */
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
