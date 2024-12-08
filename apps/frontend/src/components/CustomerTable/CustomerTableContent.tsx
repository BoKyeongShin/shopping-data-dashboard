import { Box, Input, useDisclosure } from '@chakra-ui/react'
import { Suspense, useCallback, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Customer, SortBy } from '../../typedef/customer'
import { ErrorFallback } from '../common/ErrorFallback'
import { CustomerDataModal } from '../CustomerDataModal/CustomerDataModal'
import { CustomerTableSkeleton } from './CustomerTableSkeleton'
import { CustomerTableWrapper } from './CustomerTableWrapper'

export const CustomerTableContent = () => {
  const [targetCustomer, setTargetCustomer] = useState<Customer | null>(null)
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined)
  const [filterName, setFilterName] = useState<string>('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpenModal = useCallback(
    (customer: Customer) => {
      onOpen()
      setTargetCustomer(customer)
    },
    [onOpen],
  )

  const handleToggleSort = useCallback(() => {
    setSortBy((prev) => {
      if (prev === 'asc') return 'desc' // asc → desc
      if (prev === 'desc') return undefined // desc → undefined
      return 'asc' // undefined → asc
    })
  }, [])

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(e.target.value)
  }, [])

  return (
    <Box w="full" overflowY="auto">
      <Input placeholder="이름을 입력하세요" value={filterName} onChange={handleFilterChange} mb={4} />
      <ErrorBoundary fallbackRender={({ resetErrorBoundary }) => <ErrorFallback onRefresh={resetErrorBoundary} />}>
        <Suspense fallback={<CustomerTableSkeleton />}>
          <CustomerTableWrapper
            filterName={filterName}
            sortBy={sortBy}
            onSortToggle={handleToggleSort}
            onClickRow={handleOpenModal}
          />
        </Suspense>
      </ErrorBoundary>
      <CustomerDataModal isOpen={isOpen} customer={targetCustomer} onClose={onClose} />
    </Box>
  )
}
